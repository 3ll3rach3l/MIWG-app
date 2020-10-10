from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Map
# from passlib.hash import sha256_crypt

from app.api.user_routes import set_password

hashed = set_password('password')

with app.app_context():
  db.drop_all()
  db.create_all()

  ian = User(username = 'Ian', email = 'ian@aa.io', hashed_password=hashed, admin=False)
  javier = User(username = 'Javier', email = 'javier@aa.io', hashed_password=hashed, admin=False)
  dean = User(username = 'Dean', email = 'dean@aa.io', hashed_password=hashed, admin=False)
  angela = User(username = 'Angela', email = 'angela@aa.io', hashed_password=hashed, admin=False)
  soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io', hashed_password=hashed, admin=False)
  alissa = User(username = 'Alissa', email = 'alissa@aa.io', hashed_password=hashed, admin=False)
  lauren = User(username = 'Lauren', email = 'lauren@example.com', hashed_password=hashed, admin=True)

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)
  db.session.add(lauren)

  seattle = Map(city='Seattle', state='WA', lat=47.606209, lng=-122.332069)
  tacoma = Map(city='Tacoma', state='WA',
               lat=47.252876, lng=-122.444290)
  hilo = Map(city='Hilo', state='HI', lat=19.725260, lng=-155.089096)
  weslaco = Map(city='Weslaco', state='TX', lat=26.159519, lng=-97.990837)
  sanFran = Map(city='San Francisco', state='CA',
                lat=37.774929, lng=-122.419418)
  losAngeles = Map(city='Los Angeles', state='CA',
                   lat=34.052235, lng=-118.243683)
  sanDiego = Map(city='San Diego', state='CA', lat=32.715736, lng=-117.161087)
  okCity = Map(city="Oklahoma City", state='OK', lat=35.468491, lng=-97.521263)

  db.session.add(seattle)
  db.session.add(tacoma)
  db.session.add(hilo)
  db.session.add(weslaco)
  db.session.add(sanFran)
  db.session.add(losAngeles)
  db.session.add(sanDiego)
  db.session.add(okCity)


  db.session.commit()
