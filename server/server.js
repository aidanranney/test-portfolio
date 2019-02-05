import bodyParser from 'body-parser'
import express from 'express'
import logger from 'morgan'
import path from 'path'
import cors from 'cors'

//Create express and set to serve React build files
const app = express()
const staticFiles = express.static(path.join(__dirname, '../../client/build'))

//Configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(staticFiles);
app.use(logger('combined'));
app.use(cors());

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

var user = {
  username: 'public',
  privLevel: 1
};

const registeredUsers = {
    admin: {
      username: 'aRanney',
      password: 'receiver',
      privLevel: 3
    },
    instructor: {
      username: 'lRobbins',
      password: 'ICSFaculty',
      privLevel: 2
    },
    public: {
      username: 'public',
      privLevel: 1
    }
};

//ROUTES
app.post('/userlogin', async (req, res) => {
  if (req.body.password == registeredUsers.admin.password && req.body.username == registeredUsers.admin.username) {
    user = registeredUsers.admin;
    console.log(user.username + ' is logged in');
  } else if (req.body.password == registeredUsers.instructor.password && req.body.username == registeredUsers.instructor.username) {
      user = registeredUsers.instructor;
      console.log(user.username + ' is logged in');
  }
  console.log(user);
});

app.post('/userlogout', async (req, res) => {
  user = registeredUsers.public;
  console.log(req.body);
});

app.get('/currentuser', (req, res) => {
    res.json({username: user.username, privLevel: user.privLevel});
});

//Set port to handle local dev or Heroku env
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
