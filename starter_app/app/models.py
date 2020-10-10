from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  admin = db.Column(db.Boolean, default=False)
  hashed_password = db.Column(db.Binary(100), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "admin": self.admin
    }

class Map(db.Model):
  __tablename__ = 'maps'

  id = db.Column(db.Integer, primary_key = True)
  city = db.Column(db.String(50), nullable = False)
  state = db.Column(db.String(3), nullable = False)
  lat = db.Column(db.Float, nullable=False)
  lng = db.Column(db.Float, nullable=False)

  def to_dict(self):
    return{
      "id": self.id,
      "city": self.city,
      "state": self.state,
      "lat": self.lat,
      "lng": self.lng
    }