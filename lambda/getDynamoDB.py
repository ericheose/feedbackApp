import boto3 # import the AWS SDK (for python)
import random

def lambda_handler(event, context):
    # Initialize a boto3 DynamoDB client
    dynamodb = boto3.client('dynamodb')

    # Make a call to the scan method to retrieve all items in the table
    response = dynamodb.scan(TableName='feedback')
    items = response['Items']

    # Select a random item from the list of items
    random_item = random.choice(items)

    # Return the random item
    return random_item