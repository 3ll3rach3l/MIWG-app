from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import User, db
from flask_jwt_extended import create_access_token, jwt_required
from flask_login import current_user
import bcrypt

session_routes = Blueprint('session', __name__)

def verify_password(password, hashed_password):
    if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
        return True
    else:
        return False

@session_routes.route('', methods=['POST', 'DELETE'])
def login_user():
  if(request.method=='POST'):
    data = request.get_json()

    email = data['email']
    password = data['password']

    # email = request.json.get('email', None)
    # password = request.json.get('password', None)

    user = User.query.filter(User.email==email).first()
    verified = verify_password(password, user.hashed_password)
    # user_data = user.to_dict()
    if(user and verified):
      session['user']= user.to_dict()
      return {"user": session['user']}, 200
    else:
      return jsonify({"msg": "Incorrect email or password."}), 400
  elif(request.method=='DELETE'):
    session.pop('user', None)
    return {'msg': 'successfully logged out'}

@session_routes.route('/current', methods=['GET'])
def load_user():
  if 'user' in session:
    # user = session['user']
    return {"user": session['user']}, 200
  else:
    return {"msg": "user not loaded"}