# Bucket List Team Project- Back End / Read.me
Overview
This is a group project assignment that was given by General Assembly. Our assignment included creating a website that pertains to bucketlists. We initally thought it would be best to mostly base it on one to many relationships. We needed to create a Single Page Application for the web that would allow a user to to interact with the website and the back end was used to authenticate the functions off CRUD.
The entire team contributed to the read me documentation by communicating technologies used and updates to API.

# Link to wiki - contains ERD and Wireframe and workflow
<https://github.com/Team-3-Project/bucket-list-api/wiki>

# Link to Front End
* Deployed App : https://team-3-project.github.io/bucket-list-app/
* Repository : https://github.com/Team-3-Project/bucket-list-app
# Links to Back End
* Deployed Back End : https://boiling-harbor-16682.herokuapp.com/
*  Respository : https://github.com/Team-3-Project/bucket-list-api

# Project Requirements are:
Our app has been deployed on Github pages.
Many cohesive commits dating back to the first day of building our project.
This read.me was created to document the process and technologies used
Query was used for DOM manipulation and AJAX for interacting with the API

Technologies Used:
* Mongoose ALL
* Mongo ALL
* Handlebars-Alex
* Postman-Terry
* Express-ALL
* AJAX calls and jQuery are used to interact with the DOM and update the view
* Features/Additions

# Stretch Goals not met
We wanted t get a connection to the Google Maps API for our locations.


# Routes, CRUD actions
Authorized routes
* GET : router.get('/bl-items') - https://boiling-harbor-16682.herokuapp.com/bl-items
* GET by ID: router.get('/bl-items/:id' ) - https://boiling-harbor-16682.herokuapp.com/bl-items/:id
* DELETE : router.delete('/bl-items/:id') - https://boiling-harbor-16682.herokuapp.com/bl-items/:id
* UPDATE : router.patch('/bl-items/:id') - https://boiling-harbor-16682.herokuapp.com/bl-items/:id
* CREATE router.post('/bl-items') - https://boiling-harbor-16682.herokuapp.com/bl-items

# Team participation:
As a team we decided to start with meeting project requirements.
Together we joined in on discussing how our project would be created. We started by Terry whiteboarding. He made an ERD and wireframe.

Alex worked on design mostly with bootstrap,html,CSS and SASS. Alex worked on connecting the Update on the back end. He implemented images to show on our site. He used handlebars to implement a template that he chose to work with on the project. He created modals and and worked on toggle functions to hide. Alex tested functions to make sure features were working to mett MVP requirements.

River worked on Schema,used HTML to Sign up with email,password and password confirmation,HTML to code and revising Auth code in html.River worked on the front end Update form. River created a trello board and revamped out mvp outline . River continued to clean up code and test features for any conflicts. River tested functions to make sure they were not displayig errors.

Terry created wireframe doc,created ERD doc, Terry took resposibility for merging pull requests, Worked on Schema and backend api. Terry added HTML code for log out while logged in. Terry copied the auth code into the repo. He tested our API with postman. Assisted with route controllers connecting to the front end. Terry assisted in testing fuctionality of site to confirm everything is working.

Kimber worked on Read.me,User stories as well as adding front end api. Created button for bucketlist in HTML.Added the crud api code from River with a few updates to fit our project needs such as updating method GET and get item by id. Added html code for changing password with current and new password.Assisted with routes controller and connecting to front end .

We all have commits in both repos- We also each contributed to the blocks of code for route controllers in API.

# Unsolved problems to be fixed in future iterations
Find a way to only get signed in users bucket list item

# Challenges

We had a few challenges with merge conflicts.
A few minor oops on pushing to the master branch, but was resolved.
We all had our own visions on how dynamic the project was going to be.
We had to regroup a few times to see the project to completion.


# Things we did right
We had a stand up at the beginning of each day.
We communicated throughout the day.
We sat in the same space together and worked indepedantly but as a group also.
We pushed after each feature or piece of code we were responsible for.
We mostly pulled at the same time from our develpment branch so we could make sure to stay on the same page.

