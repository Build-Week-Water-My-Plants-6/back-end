# back-end

Web Unit 4

# API for Water-My-Plant Build Week Project

## Pitch

"Building a schedule around ensuring that all your plants are watered is actually pretty difficult. Water my Plants helps to solve those problems by providing and easy to use interface for creating a plant watering schedule that will remind users to water their plants on a regular basis."

### AUTH - Register

## POST

https://water-my-plant-bw.herokuapp.com/api/auth/register

Permission: none

### Parameter

| Field       | Type   | Description         |
| ----------- | ------ | ------------------- |
| fullname    | string | user’s name         |
| username    | string | user’s username     |
| password    | string | user’s password     |
| phonenumber | string | user's phone number |

### Request

￼￼json

```{
"fullname": "John Smith",
"username": "test",
"password": "abc123",
"phonenumber": "12345678910"
}
```

### Response

```
{
"user": {
"id": 6,
"fullname": "John Smith",
"username": "test",
"password": "$2a$12\$FPFgcKvqggAxXJnWR2jBzOBTbU7oey9zfcx8OshxFzCH7eMiqiXcC",
"phonenumber": "12345678910"
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImZ1bGxuYW1lIjoiSm9obiBTbWl0aCIsInVzZXJuYW1lIjoidGVzdCIsInBob25lbnVtYmVyIjoiMTIzNDU2Nzg5MTAiLCJpYXQiOjE1Njk2MDYwMDMsImV4cCI6MTU2OTY5MjQwM30.rsXKWILVHqLaT6hNNUXyjtTOTEDLanV3g7UDMZOiiGA"
}
```

## AUTH - LOGIN

Login existing User. Returns the web token.

### POST

https://water-my-plant-app.herokuapp.com/api/auth/login

Permission: none

### Parameter

| Field    | Type   | Description     |
| -------- | ------ | --------------- |
| username | string | user’s username |
| password | string | user’s password |

### Request

```
{
"username": "test",
"password": "abc123"
}
```

### Response

```
{
"message": "Welcome test!",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImZ1bGxuYW1lIjoiSm9obiBTbWl0aCIsInVzZXJuYW1lIjoidGVzdCIsInBob25lbnVtYmVyIjoiMTIzNDU2Nzg5MTAiLCJpYXQiOjE1Njk2MTA1MzIsImV4cCI6MTU2OTY5NjkzMn0.Zxk1v6TdgEEJCBJpAz58c50Cc05od-j3gzMmyTUaDRg"
}
```

### Error 401

| Name                | Description         |
| ------------------- | ------------------- |
| Invalid Credentials | Invalid Credentials |

## Plant Data

Posts new Plant Data to the Database

## GET Plant Data

### GET

https://water-my-plant-app.herokuapp.com/api/plants

Permission User, Admin

### Parameter

| Field  | Type  | Description        |
| ------ | ----- | ------------------ |
| plants | array | list of all plants |

#### Error 500

```
message: "Failed to get plants."
```

## Add Plant Data

### POST

https://water-my-plant-app.herokuapp.com/api/plants

Permission User, Admin

### Parameter

| Field          | Type   | Description       |
| -------------- | ------ | ----------------- |
| plant_name     | string | plants name       |
| plant_species  | string | plants species    |
| water_schedule | string | "water in x days" |

### Request

```
{
"plant_name": "test",
"plant_species": "test_species",
"water_schedule": "I need to water in x days"
}
```

### Response

```
{
"id": 1,
"plant_name": "test",
"plant_species": "test_species",
"water_schedule": "I need to water in x days"
}
```

### Error 500

```
message: "Failed to add new plant."
```

## Plant Data - Delete Plant Data

### Delete

https://water-my-plant-app.herokuapp.com/api/plants/:id

Permission User, Admin

### Parameter

| Field | Type   | Description |
| ----- | ------ | ----------- |
| id    | number | plant_id    |

### Response

```
message: "removed:" 1
```

### Error 404

```
message: "Could not find plant with given Id."
```

### Error 500

```
message: "Failed to delete plant."
```

## Plant Data - Edit Plant Data

###PUT
https://water-my-plant-app.herokuapp.com/api/plants/:id

Edits the record with the matching params: id
Permission User, Admin

### Parameter

| Field          | Type   | Description       |
| -------------- | ------ | ----------------- |
| plant_name     | string | plants name       |
| plant_species  | string | plants species    |
| water_schedule | string | "water in x days" |

### Response

```
{
"id": 1,
"plant_name": "test",
"plant_species": "test_species",
"water_schedule": "I need to water in x days"
}
```

### Error 404

```
message: "Could not find plant with given Id."
```

### Error 500

```
message: "Failed to update plant."
```

## Dependencies

bcrypt.js
cors
dotenv
express
helmet
jsonwebtoken
knex
knex-cleaner
nodemon
sqlite3
cross-env
supertest
jest

## Team

### UI Team

Ariana Shackelford
Ryan Smith
Nick Verdinia

### Front End Team

Kyle Leonard
Ian Carreras
Ruth Poliakon

### Backend

Melvin Peepers

### Project Lead

Harrison Brock

## Marketing Page

https://watermyplantsamarketing.netlify.com/

## Single Page App

https://water-my-plants-app.netlify.com/
