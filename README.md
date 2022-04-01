# justin-herfel-code-louisville-task-app

I have created a task list app. This is a very simple application, incorporating 3 features of the project requirements.

Here are the features I'm including in this project.

1. Create a web server with at least one route and connect to it from your application using ExpressJS
2. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application
3. Create a form and save the values (on click of Submit button) to an external file 
    * You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted

You will also need to make sure Node JS is installed on your computer. If you don't have Node JS, please go to https://nodejs.org/en/download/, choose your platform, and follow the instructions to download. Please note: if you have any problems with the running of this program, make sure to download v16.14.2 (version 16.14.2), which is the version I ran while creating this project.

Also, I recommend using Visual Studio Code as a source code editor to run this project.

1. Create a web server with at least one route and connect to it from your application using ExpressJS

Once you clone my git repositiory (https://github.com/justinherfel/justin-herfel-code-louisville-task-app), you could probably just run the Express server as is by typing the command 'npm start' in your terminal. I did not include a gitignore file in this project, as I'm not yet very skilled and, frankly, was unaware of gitignore when I pushed my initial commit. 

However, if there is any problem with running the Express server, you can go to your terminal and type 'npm install', and node should install all of the dependencies you will need in the folder. Please make sure your terminal is reading from the folder 'justin-herfel-code-louisville-task-app' when you run npm install. Once the install has been run, then type 'npm start', and you should see the message at the bottom of your terminal which reads:

'Server listening on port: 3000'

Once you see that message, go to a browser window on your computer (I like using Google Chrome), and type in the following URL:

http://localhost:3000

You should see the task list app in your browser.

Go ahead and click inside the 'Type Task Here...' field, and type an item. Then click "Add Item", and you should see a bulleted point appear below the field with whatever you typed (if you're in mobile view), and to the right of the add button (if you're in desktop view). Then type a few more items to populate the list.

2. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application

Once you click the 'Add Item' button on the webpage, you will see the list populate. Each time you type something and subsequently click the button, the list will continue to populate and it displays as a list item on the html web page.

3. Create a form and save the values (on click of Submit button) to an external file 
    * You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted

The JavaScript file inside the public folder is saving the information you type in the field into local storage. You can see this by opening Google Chrome's dev tools, choosing the Application tab, and selecting Local Storage, and then selecting the sub directory below (this should read http://localhost:3000), and you should see the Key and Value populated with objects below.

In order to prove this information persists, you can close out the browswer window completely, and then open a new window, and again type 'http://localhost:3000' and press return. You should see the task list app appear with the populated list you previously typed.





