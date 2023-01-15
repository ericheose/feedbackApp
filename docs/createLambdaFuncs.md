# Create lamda functions

## AWS Lambda
- A serverless, event-driven compute service
- Able to run code for virtually any type of application or backend service without provisioning or managing servers.
- In this application `lambda` will be triggered using `API Gateway` 

## Terminonlogy and Concepts
- **Serverless function:** Piece of code that will be executed by a compute service, on demand.
- **Lambda trigger:** The type of event that will make a Lambda (serverless) function run. 

### Step 01:
- Give the function a name, in this case `postFeedback`
- Use runtime of `python 3.9` or above
- Architecture `x86`

![Alt](../img/assets_lambda/lambda01.gif)

### Step 02:
- Under persmissions, click on `change default execution role`
- This gives the `lambda function` basic access to `dynamoDB`
- Select `create a new role from AWS policy templates`
- Give the role a name
- For the policy search for and select `simple microservice permissions`
- Click `create function`

![Alt](../img/assets_lambda/lambda02.gif)

### Step 03:
- 

![Alt](../img/assets_lambda/lambda03.gif)

### Step 04:
![Alt](../img/assets_lambda/lambda04.gif)

### Step 05:
![Alt](../img/assets_lambda/lambda05.gif)

### Step 06:
![Alt](../img/assets_lambda/lambda06.gif)

### Step 07:
![Alt](../img/assets_lambda/lambda07.gif)

### Step 08:
![Alt](../img/assets_lambda/lambda08.gif)

### Step 09:
![Alt](../img/assets_lambda/lambda09.gif)

### Step 10:
![Alt](../img/assets_lambda/lambda10.gif)

### Step 11:
![Alt](../img/assets_lambda/lambda11.gif)



### Next -> [Create REST API][2.3]
[2.3]: <createRestAPI.md>
