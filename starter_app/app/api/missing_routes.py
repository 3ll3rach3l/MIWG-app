from flask import Blueprint, jsonify, redirect, url_for, request
from app.models import db, User, Missing

missing_routes = Blueprint('missings', __name__)

@missing_routes.route('')
def showMissing():
    response = Missing.query.order_by(Missing.dateLastSeen.desc())
    return {'missings': [missing.to_dict() for missing in response]}


@missing_routes.route('/search_by_id')
def one_missing():

    missingId = request.args.get('id', None)
    missing = Missing.query.get(missingId)
    missing = missing.to_dict()
    return {'missing': missing}, 200
    # missingId = Missing.query.filter_by(id=id).first()
    # missingsDict = missing.to_dict()
    # user = User.query.filter_by(id=missing.userId).first()
    # usersDict = user.to_dict()
    # missingsDict["username"] = usersDict["username"]
    # return jsonify(missing=missingsDict), 200

@missing_routes.route('/new', methods=['POST'])
def add_missing():
   
    fullName = request.json.get('fullName')
    age = request.json.get('age')
    tribalAffiliation = request.json.get('tribalAffiliation')
    location = request.json.get('location')
    lat = request.json.get('lat')
    lng = request.json.get('lng')
    dateLastSeen = request.json.get('dateLastSeen')
    details = request.json.get('details')
    status = request.json.get('status')
    userId = request.json.get('userId')

    # print("this is age", age)
    # print("this is userId", userId)


    newMissing = Missing(
        fullName=fullName,
        age=age,
        tribalAffiliation=tribalAffiliation,
        location=location,
        lat=lat,
        lng=lng,
        dateLastSeen=dateLastSeen,
        details=details,
        status=status,
        userId=userId
    )
    # print("newMissing", newMissing)
    # print("age", age)

    db.session.add(newMissing)
    db.session.commit()

    missing1 = newMissing.to_dict()
    # print("this is missing1", missing1)

    return jsonify(newMissing=missing1), 200

@missing_routes.route('/update', methods=['PATCH'])
def update_missing():
    missingId = request.json.get('id')
    missing = Missing.query.filter(Missing.id == missingId).first()
    new_age = request.json.get('age')
    new_location = request.json.get('location')
    new_dateLastSeen = request.json.get('dateLastSeen')
    new_details = request.json.get('details')
    new_status = request.json.get('status')
    new_lat = request.json.get('lat')
    new_lng = request.json.get('lng')


    if new_age:
        missing.age = new_age
    if new_dateLastSeen:
        missing.dateLastSeen = new_dateLastSeen
    if new_details:
        missing.details = new_details
    if new_status:
        missing.status = new_status
    if new_location:
        missing.location = new_location
        missing.lat = new_lat
        missing.lng = new_lng
    else:
        missing.location = missing.location
        missing.lat = missing.lat
        missing.lng = missing.lng
    
    db.session.add(missing)
    db.session.commit()

    return {'missing': missing.to_dict(), 'msg': 'Missing MIWG updated successfully!'}, 200