# Big5 Traits

A simple questionaire that gives your scores for the big5 personality traits which are openness, conscientiousness, extraversion, agreeableness and neuroticism.

There is a backend for saving the results in a DB so other people can see them and compare them to their friends scores.

The frontend is made with react / webpack and the backend uses express and mongoDB.

## Run locally

Set the base URL in `axios.config.js`, use `"http://localhost:3000/api/results"`.

Add a `.env` with a mongo connection string, eg. `MONGO_URI=yourConnectionString`.

**NOTE**: You can sign up for a free mongoDB cloud account if you don't have one.

Start frontend from within client folder: `$ npm start`.

Start backend from root folder: `$ npm start`.

Then go to `http://localhost:3000`.

## Deploy

Set the base URL in `axios.config.js`, use `"<appURL>/api/results"`.

## Heroku

    $ heroku login
    $ heroku local web // run locally first to try it
    $ heroku create your-app-name
    $ git push heroku main  // or master?
    $ git push heroku <your-branch-name>:main // use another branch

### Set environment variables

    $ heroku config:set NODE_ENV='production'
    $ heroku config:set MONGODB_URI=<your-mongo-uri>
    $ heroku config // inspect config variables

### Making Changes to Hosted App

    $ git add .
    $ git commit -m "my commit message"
    $ git push heroku master
    $ heroku local web
