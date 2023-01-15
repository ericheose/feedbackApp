# Deploy to CDN

## Amazon Cloudfront
- CDN service built for high performance, security, and developer convenience.
- It will copy the app to edge locations around the world to improve speed in which app is served to users

------------------------------------------------------------------------------------------

## Implementation
### Step 01:
- Create distribition
- Click on origin domain and selec the S3 of the static website
- `ignore` the recommendation for switching endpoints

![Alt](../img/assets_CDN/cloudfront01.gif)

### Step 02:
- Scroll down until you reach the `settings` header
- In `default root object` input `index.html`
- Scroll down and click `create distribution`
- It may take a few minutes for it to deploy

![Alt](../img/assets_CDN/cloudfront02.gif)

### Step 03:
- It is deployed once the status is enabled and the timestamp has been updated
- Click on the `ID`
- Copy and paste the `Distribution domain name` into a new tab
- Test functionality, review `dynamoDB` for new items

![Alt](../img/assets_CDN/cloudfront03.gif)

------------------------------------------------------------------------------------------

### Next -> [Clean up][2.6]
[2.6]: <cleanUp.md>