from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Missing
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

  janeDoe = Missing(fullName='Jane Doe', 
                    age=21, 
                    tribalAffiliation='Tulalip', 
                    location='Seattle', 
                    lat=47.606209, 
                    lng=-122.332069, 
                    dateLastSeen='01/01/2020', 
                    details='please call local authorities if seen', 
                    status='missing', 
                    userId=6)
  alyssa = Missing(fullName='Alyssa Parizal',
                    age=17,
                    tribalAffiliation='Kanaka Maoli',
                    location='Hilo',
                    lat=19.725260,
                    lng=-155.089096,
                    dateLastSeen='10/07/2020',
                    details="5'4, 117lbs, short blonde/orange hair, brown eyes, fair complexion, birthmark on elbow. If seen, please call Honolulu PD 808-529-3111",
                    status='missing',
                    userId=3)
  tacoma = Missing(fullName='Jane Doe',
    age=30,
    tribalAffiliation='Snoqualmie',
    location='Tacoma',
    lat=7.252876, 
    lng=-122.444290,
    dateLastSeen='03/14/2020',
    details='details, details, details',
    status='missing',
    userId=2)
  weslaco = Missing(fullName='Jane Doe',
  age=20,
  tribalAffiliation='Apache',
  location='Weslaco',
    lat=26.159519, 
    lng=-97.990837,
    dateLastSeen='07/21/2020',
    details='for demonstration purposes only',
    status='missing',
    userId=1)
  sanFran = Missing(fullName='Kali Fornia',
  age=39,
  tribalAffiliation='Cahuilla',
  location='San Francisco', 
                lat=37.774929,
                lng=-122.419418,
                dateLastSeen='02/26/2020',
                details='example post',
                status='found',
                userId=5)
  losAngeles = Missing(fullName='Angel Cuidad',
  age=18,
  tribalAffiliation='Pomo',
  location='Los Angeles', 
                   lat=34.052235, 
                   lng=-118.243683,
                   dateLastSeen='08/18/2020',
                   details='notify police if seen',
                   status='missing',
                   userId=1)
  sanDiego = Missing(fullName='Janice Doe',
  age=18,
  tribalAffiliation='Pala Band',
  location='San Diego',
    lat=32.715736,
     lng=-117.161087,
     dateLastSeen='12/20/2019',
     details='this is an example',
     status='missing',
     userId=6
     )
  okCity = Missing(fullName='Missy Sissy',
  age=36,
  tribalAffiliation='Choctaw',
  location="Oklahoma City",
    lat=35.468491,
     lng=-97.521263,
     dateLastSeen='10/11/2020',
     status='deceased',
     userId=2)

  db.session.add(janeDoe)
  db.session.add(tacoma)
  db.session.add(alyssa)
  db.session.add(weslaco)
  db.session.add(sanFran)
  db.session.add(losAngeles)
  db.session.add(sanDiego)
  db.session.add(okCity)


  db.session.commit()
