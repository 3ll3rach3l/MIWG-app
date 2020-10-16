from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  admin = db.Column(db.Boolean, default=False)
  hashed_password = db.Column(db.Binary(100), nullable=False)
  missings = db.relationship('Missing', backref='users', lazy=True)

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "admin": self.admin
    }

class Missing(db.Model):
  __tablename__= 'missings'

  id = db.Column(db.Integer, primary_key=True)
  fullName = db.Column(db.String(100), nullable = False)
  age = db.Column(db.Integer, nullable=False)
  tribalAffiliation = db.Column(db.String(20), nullable=False)
  location = db.Column(db.String(50), nullable = False)
  dateLastSeen= db.Column(db.DateTime, nullable=False)
  details= db.Column(db.String(1000), nullable=True)
  status= db.Column(db.String(10), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  lat = db.Column(db.Float, nullable=False)
  lng = db.Column(db.Float, nullable=False)

  def to_dict(self):
    return{
        "id": self.id,
        "fullName": self.fullName,
        "age": self.age,
        "tribalAffiliation": self.tribalAffiliation,
        "location": self.location,
        "dateLastSeen": self.dateLastSeen,
        "details": self.details,
        "status": self.status,
        "userId": self.userId,
        "lat": self.lat,
        "lng": self.lng,
    }

# class Map(db.Model):
#   __tablename__ = 'maps'

#   id = db.Column(db.Integer, primary_key=True)
#   city = db.Column(db.String(50), nullable=False)
#   state = db.Column(db.String(3), nullable=False)
#   lat = db.Column(db.Float, nullable=False)
#   lng = db.Column(db.Float, nullable=False)

#   def to_dict(self):
#     return{
#         "id": self.id,
#         "city": self.city,
#         "state": self.state,
#         "lat": self.lat,
#         "lng": self.lng
#     }
