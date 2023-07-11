# MERN-SocialMedia

## It is live so pls check it out

###

Backend developer

C Create
R Read
U Update
D Delete
A Backend Developer does these 4 api's and obviously the task is repetative once the logic is build.
All we do is create api's and route it with the endpoint and success, that's it we are good to go.
Backend includes,
1.Server-includes API's(the function which when invoke it does the task)
(API-calculation, logic building, manipulation)
2.Database-(stores)

As always to begin install nodejs
so what's nodejs?
it is a runtime environment to run javascript, so we need not go to browser and run javascript we have created an environment so that we can run it locally.

install:
https://nodejs.org/en/download/current

After installation,
run>node
//it shows version
//and yah you're good to execute your calculations right away.
//2+3 etc

starting coding in vscode
mkdir backend
cd backend

npm:we can manage all the packages of nodejs using npm, we basically install directly in package.json

to install----npm i (package name)
to unistall---npm uninstall (package name)

now you might be curious with the package.json file which is very common but here's what I conclude you by saying that it is an information storage of whole node application like you get to know the packages that are installed in your node application with their respecitive versions and run commands

well I believe you've got enough theory let's get some practical stuff😋

run any file
node index.js

but here's a catch whenever you are trying to update the content or logic in your program it never adapts unless you rerun the application which is quite boring right!
What if I give you something which would the above flaw!!!!
yeah many of the experienced developers out there have already have guessed
its nodemon

run command---npm i nodemon
also dont forget to update the scripts

just remove "test"
and add the below line
"dev": "nodemon index.js"

command:
npm run dev

Now we are heading to the next topic node packages(module):
here we have both inbuilt and custom(which we generally borrow from command)

module is basically is function
module is of three types-
1.builtin module
2.third party
3.file based
http:
this is the most common package to learn as a beginner to connect to port and ask server to listen

Here's what you have got another query that's,
when to use import and require

require:
to import-->
const stuff = require("stuff");
to export-->
module.exports = stuff

import:
firstly to use import add the below line or update if its already existing

type:"module"

then you are licensed to use the below syntax:

to import-->
import stuff from "stuff"
to export-->
export default stuff

Now it's the time to introduce you with express
it is beautifier to node, meaning we can syntactically improve the node applications.

npm i express

import express form "express"

const app = express();

app.get("/",(req,res,next)=>{
res.status(200).json({
success:true,
message:"just a response message"
})
}
app.listen(3000,()=>{
console.log("server is working");
})

Hot topic is EJS(embedded javascript templates)
what is it?
this generates HTML markup with javascript

to install:
npm i ejs

then, make sure you make a folder namely,
views
in your root folder
well, the reason is to view with functionality

Here comes the concept of middlewares
well it comes with the "use" keyword
app.use(etc)

whatever is in public folder is hosted which is very obvious that this can have GET/

so we generally host our whole frontend such that is verily accessible.

Now let's create a form

<form method="post" action="/success">
<input type="text" name="name"></input>
<input type="email" name="email"></input>
<button type="submit"></button>

Mongo DB

install it.

###
