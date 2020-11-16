import boto3
import os


BUCKET_NAME = os.environ.get('BUCKET_NAME')
ACCESS_ID = os.environ.get('AWS_ACCESS_KEY_ID')
ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
REGION_NAME = os.environ.get('AWS_REGION_NAME')


# Building your client
s3 = boto3.client('s3', region_name=REGION_NAME, aws_access_key_id=ACCESS_ID,
                  aws_secret_access_key=ACCESS_KEY)


# grabbing all of your buckets
response = s3.list_buckets()

# Iterate over Buckets for response
for bucket in response['Buckets']:

    # Print the Name for each bucket
    print(bucket['Name'])


