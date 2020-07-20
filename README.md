# Lakes Area Recovery Connect

Being apart of the Lakes Area recovery group for a few years.
I always thought there is a better way of keep connected with other is the community. So that's why
for my solo project a Emerging Digital Academy I deceided to make this website. As a easy way to stay up to date
on things happening around you. Board members can keep the events as current as possible and you will have ability
to create and leave yourself personal notes. Also check on meetings around the area and have access to a phone list
of places and people willing to help if you're going through a tough time. Thanks for checking out my project hope you enjoy it.

## Getting Started

If you want to take this project for yourself and improve upon it. All you have to do is clone it from my git hub onto your machine, next run a npm install all everything you need to get it working properly is located in the package.json file. Last you need to create the database. I have all the information from mine inside the database.sql after that just do a npm run server open another terminal type npm run client and away you go.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

You will have to update the pool.js file to get the database up and running. I currently have my information stored inside a .env file which I would highly recommend you do yourself. To keep all your personal data protected from anyone who may want to look at it.

## Development Setup Instructions

- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Redux

For this project I recommend using the Redux DevTools and React Developer Tools Google Chrome extensions I already have the code set up to use the DevTools if it's something you would like to use.

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Built With

    "axios": "^0.19.0",
    "bcryptjs": "^2.4.3",
    "cookie-session": "^2.0.0-beta.3",
    "dotenv": "^4.0.0",
    "evergreen-ui": "^4.28.0",
    "express": "^4.16.4",
    "moment": "^2.27.0",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0",
    "pg": "^8.2.1",
    "prop-types": "^15.7.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-iframe": "^1.8.0",
    "react-mailto": "^0.4.0",
    "react-redux": "^7.1.1",
    "react-router-dom": "^5.0.0",
    "react-scripts": "^3.4.0",
    "redux": "^4.0.1",
    "redux-devtools-extension": "^2.13.8",
    "redux-logger": "^3.0.6",
    "redux-saga": "^1.0.2",
    "sweetalert": "^2.1.2"


## Acknowledgments

I would like to thank teachers from Emerging Digital Academy and everyone in my cohort.
For supporting me with any questions or bugs I had to overcome