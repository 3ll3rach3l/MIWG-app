from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import User, db
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from flask_login import current_user
import bcrypt

user_routes = Blueprint('users', __name__)


def set_password(password):
    hashed_password = bcrypt.hashpw(
        password.encode('utf-8'), bcrypt.gensalt())
    return hashed_password


@user_routes.route('/')
def index():
  response = User.query.all()
  return {"users": [user.to_dict() for user in response]}


@user_routes.route('/signup', methods=['POST'])
def signup_user():
  data = request.get_json()
  # try:
  username = data['username']
  email = data['email']
  hashed_password = set_password(data['password'])

  if not username or not email or not hashed_password:
    return jsonify(message="Username, email, and password required"), 400

  
  user = User(
      username=username,
      email=email,
      hashed_password=hashed_password,
  )

  db.session.add(user)
  db.session.commit()

  user1 = user.to_dict()
  auth_token = create_access_token(identity={"email": user.email})

  return jsonify(auth_token=auth_token, user=user1), 200
