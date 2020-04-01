# micii-producatori-api

Lamdba and other AWS related resources

## Setup

### Install Serverless

Serverless should be installed globally.

```
npm install -g serverless
```

### Enter credentials

AWS credentials should be added for deploying on the cloud.

```
serverless config credentials --provider aws --key <Access key ID> --secret <Secret access key>
```

### Development process

The ReST API can be deployed locally using the command:

```
npm run start
```

The ReST API can be deployed on the cloud using the command:

```
npm run deploy
```

Before commiting your changes you can format the whole project:

```
npm run format
```

On each save the code written in TypeScript will be linted and formatted, some errors need to be corrected manually.

A pre-commit hook ensures that the formatting and coding conventions are followed.
