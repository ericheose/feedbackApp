# Host web app

## Amazon S3
- An object storage service offering industry-leading scalability, data availability, security, and performance.
- Will be used to statically host the web app


https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}
```
replace bucket-name with your won bucket



### Step 01:
![Alt](../img/assets_host/host01.gif)

### Step 02:
![Alt](../img/assets_host/host02.gif)

### Step 03:
![Alt](../img/assets_host/host03.gif)

### Step 04:
![Alt](../img/assets_host/host04.gif)

### Step 05:
![Alt](../img/assets_host/host05.gif)

### Step 06:
![Alt](../img/assets_host/host06.gif)

### Step 07:
![Alt](../img/assets_host/host07.gif)

### Step 08:
![Alt](../img/assets_host/host08.gif)

### Step 09:
![Alt](../img/assets_host/host09.gif)

### Next -> [Clean up][2.5]
[2.5]: <cleanUp.md>