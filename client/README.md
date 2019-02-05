This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## HELLO JSON

This is my final project for ICS 211.

It is also my e-portfolio for ICS 217.

Therefore, there are a couple of notes I need to make for you on the weird stuff in it.

### It consumes two APIs

The first is a Heroku app I created, that is running an Express.js server with user information for three users:

Admin  
Lynda Robbins  
The Public  

The first form of the site is a "log in" modal that takes user name and password. The API receives these over the HTTPS protocol you graciously provided, authenticates, and responds with a user authorization object.

**Note:**  
 The modal was made from scratch, therefore it is weird because it will only close if you toggle it by either 'Submit'ting, or clicking the Log In/Out button again. Also it will take about 5 seconds to respond, because Heroku puts their containers to sleep after an idle period. After it wakes, API calls will go through immediately.

The second is a Cloudmersive Image Recognition API fetched in the project component.

## User Login Credentials:

**Admin**  
username: aRanney  
password: receiver  

**If you care to see the navbar views altered (although it's a pretty small thing):**  

**Lynda**  
username: lRobbins  
password: ICSFaculty  

## Lastly

The STUNNING smooth-auto scrolling as components were rendered and removed from the DOM was removed in favour of consistent use of React Router. It only worked in Chrome. And not very well, at that.