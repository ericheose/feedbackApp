# Clean up

## Cleaning up Cloudfront distribution
- Distrubutions must be diabled before deleting
- After disabling, it may take a few minutes until the delete option is available

![Alt](../img/assets_cleanUp/cleanCDN.gif)

------------------------------------------------------------------------------------------

## Cleaning up S3 bucket
- S3 buckets must be empty prior to deleting
- Use the `empty` button or the delete button, follow prompts
- Select the bucket again, click `delete`, follow prompts

![Emptying S3 bucket](../img/assets_cleanUp/cleanHost01.gif)

![Deleting S3 bucket](../img/assets_cleanUp/cleanHost02.gif)

------------------------------------------------------------------------------------------

## Cleaning up Amazon API Gateway
- Select the API, click `actions`, then delete

![Delete API](../img/assets_cleanUp/cleanAPI.gif)

------------------------------------------------------------------------------------------

## Cleaning up AWS Lambda Functions
- Select the functions, click `actions`
- Type in `delete` and then click delete button

![Delete lambda functions](../img/assets_cleanUp/cleanLambda.gif)

------------------------------------------------------------------------------------------

## Cleaning up Amazon DynamoDB
- Select table and then `delete`
- Follow the prompts

![Delete dynamoDB](../img/assets_cleanUp/cleanDynamo.gif)

------------------------------------------------------------------------------------------

### Next -> [Project Overview][3.1]
[3.1]: <../README.md>