[![Node.js CI](https://github.com/StewartBarker/PeopleLocationApi/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/StewartBarker/PeopleLocationApi/actions/workflows/node.js.yml)

# PeopleLocationApi
This api is used to return people who are listed as either living in London, or whose current coordinates are within 50 miles of London. It uses the BPDTS api to get the list of users and locations.

## To Run

``git clone git@github.com:StewartBarker/PeopleLocationApi.git``

``cd PeopleLocationApi/src``

``npm install``

``npm start``

And go to:
* http://localhost:4000/api/v1/getUsersLivingInOrWithin50MilesOfLondon

## To Run Tests

``npm test``

## For Api Docs

* http://localhost:4000/api-docs


