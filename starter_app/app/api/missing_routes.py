from flask import Blueprint, jsonify, redirect, url_for, request
from app.models import db, User, Missing

missing_routes = Blueprint('missings', __name__)

@missing_routes.route('')
def showMissing():
    response = Missing.query.order_by(Missing.dateLastSeen.desc())
    return {'missings': [person.to_dict() for person in response]}


@missing_routes.route('/<id>')
def one_missing(id):

    missing = Missing.query.filter_by(id=id).first()
    missingsDict = missing.to_dict()
    user = User.query.filter_by(id=missing.userId).first()
    usersDict = user.to_dict()
    missingsDict["username"] = usersDict["username"]
    return jsonify(missing=missingsDict), 200

@missing_routes.route('/new', methods=['POST'])
def add_missing():
    data = request.json
    print("this is data in routes", data)

    fullName = request.json.get('fullName')
    age = request.json.get('age')
    tribalAffiliation = request.json.get('tribalAffiliation')
    location = request.json.get('location')
    dateLastSeen = request.json.get('dateLastSeen')
    details = request.json.get('details')
    status = request.json.get('status')
    userId = request.json.get('userId')

    print("this is age", age)
    print("this is userId", userId)


    newMissing = Missing(
        fullName=fullName,
        age=age,
        tribalAffiliation=tribalAffiliation,
        location=location,
        dateLastSeen=dateLastSeen,
        details=details,
        status=status,
        userId=userId
    )
    print("newMissing", newMissing)
    print("age", age)

    db.session.add(newMissing)
    db.session.commit()

    missing1 = newMissing.to_dict()
    print("this is missing1", missing1)

    return jsonify(newMissing=missing1), 200

