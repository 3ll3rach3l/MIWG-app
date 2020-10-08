from flask import Blueprint, jsonify, request
from app.models import db, Map


map_routes = Blueprint('maps', __name__)

@map_routes.route('')
def index():
    response = Map.query.all()
    return {'cities': [city.to_dict() for city in response]}

@map_routes.route('/missing', methods=['POST'])
def add_city():
    data = request.get_json()

    city = data['city']
    stateAbbr = data['stateAbbr']

    newCity = Map(
        city=city,
        stateAbbr=stateAbbr
    )

    db.session.add(newCity)
    db.session.commit()

    city1 = newCity.to_dict()

    return jsonify(newCity=city1), 200
