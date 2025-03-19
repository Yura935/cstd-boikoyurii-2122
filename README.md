# Messanger with translating

Group: KI-47
Student: Boiko Yurii
Variant: 3

Project: Messenger with translating(Bachelor work)

# Instructions for downloading and launching the project
To build a project, you need to get it from the repository. Then download NodeJs version no lower than 14 and VS Code or WebStorm. It is advisable to configure NodeJs so that you can start downloading packages through the terminal. You need to open the project through Vs Code or WebStorm and in the terminal (I use the cmd terminal) write the first command (npm install or npm i). After all the packages are installed, you should write the command (ng serve -o) - this is necessary in order to run the project on the local server.

# Messanger v1.0:
 - Login is done using email and password. Validation is applied to the fields. If the fields are filled in incorrectly, a window with the appropriate information will pop up. To log in, you need to click on the "Sign In" button. (Email and password for testing the program: email - user@gmail.com, password - qwerty123);
- We have the opportunity to change the login to registration. To do this, click on the "Registration" link, which is located under the "Sign In" button. Our window will change according to registration. We have 3 fields for entry: username (user name), email (administrator's email) and password (user password). To log in, you need to click on the "Sign Up" button; After clicking on the button, you will be redirected to the main page, that is, you will be automatically logged in.
- After logging in, you will see the main page, which is divided into 2 blocks: a block with user contacts and a block with a selected user for writing messages.
- Block with user contacts. In this block we have a drop-down menu, a field for searching for contacts and a block with user contacts. When you click on the menu button, a drop-down menu appears. In this window we have again 2 sections (head and body). In the head there are:
    * button "<" - closes the drop-down menu;
    * user photo and his nickname;
    * button "Edit" - opens a new window for editing personal data;
    * button "Logout" - to log out of the system;
  In the body:
    * "Settings" - button for opening a window with additional settings (currently not working);
    * "Language" - button for selecting a language. If you click, a block with a choice will appear: EN or UA (EN by default).
    * "Font size" - button for editing text size (currently not working);
    * "Dark mode" - a button to change the mode (theme) to dark (Light theme by default).
  Field for searching for contacts. As soon as we start writing, available contacts will be displayed in the user's contact block. That is, filtering will occur. If the user has no contacts, all available contacts will be pulled up. (The functionality of adding a contact has not yet been implemented). At the moment, if we write something in the input field, all available users will be displayed (except us).
- Block with the selected user for writing messages. Again, it has 2 sections: head and body. In the head we can see a photo of our contact and his nickname. If you click on head (the entire upper block), a window with information about this user will open. Body is a field with the message history, those on the left are from this contact, those on the left are our messages. Under the message is the date and time the message was sent. Below is a field for entering messages. This functionality has not yet been implemented. Also, the data in the body and in general this entire block is by default and is not pulled up when a user selects it, but is made to familiarize yourself with the appearance.

 # Messanger v1.0 unit-tests
- Unit tests were made before this version, almost 80% of the entire project was covered, including guard, service, pipe & components.
- To run testing, you need to write ng test --code-coverage in the terminal. After the tests have passed, the overall result of the test coverage will be shown below. And to see what and how is covered, you need to open this file cstd-boikoyurii-2122\coverage\taskChat\index.html in a browser and you will see the whole picture of the tests.

 # Messanger v1.1 
- New functionality has been added to this version:
* adding users to your contacts (there is now an "Add to contacts" button next to the name of the selected contact). If you click on the corresponding button, this user will be added to your contacts and moved from the "Other users" block to "Chats", and the add button will disappear.
* displaying user contacts. Now we have 2 user blocks - our contacts and all users who are not our contacts.
* now you can change the selected user, and his data will be pulled up.
* when selecting a specific user, the nickname of the selected user is written in the URL. If no one is selected (i.e. the URL ends with main/), then either the first contact (if there are contacts) or the first other user is selected.
- Unit tests for the new functionality have also been added. Now the project is covered by about 65-70%, which is quite good.
- Some parts of the code have also been formatted and edited.

 # Messanger v2.0 BD
- This project uses the non-relational database Firabase.
- Firebase is a set of tools for "building, improving, and growing your app," and the tools it provides cover a significant portion of the services that developers usually have to build themselves, but in reality they don't want to build because they'd rather focus on the app itself. This includes things like analytics, authentication, databases, configuration, file storage, push notifications, and the list goes on. The services are hosted in the cloud and scale without any effort on the developer's part.
- To connect Firebase to our project, we need to import the appropriate modules into the app.module.ts file (AngularFireModule - for general database connection, AngularFirestoreModule - for connecting data storage in collections, AngularFireStorageModule - for storing photos and other files in the database, AngularFireAuthModule - for working with login and registration).
- For this project, 1 collection (users) was created - this is a set of users of our system. Each user is recorded in the collection by their id. Each user has the following fields: email, image, userName, contacts, id. Let's analyze each in detail.
* email - the user's email address, recorded during registration, and can be changed;
* image - the user's photo, which will be displayed for other users and for the user himself, can be changed;
* userName - the user's name (username), which will be displayed for other users, can be changed;
* id - the identifier that distinguishes this user from others, and by which he is recognized in the system (immutable)
* contacts - a set of user contacts - this is essentially an array of other users
- All requests to the database for us occur in the data.service.ts file.

 # Messanger v2.1 
 - New functionality has been added to this version:
* adding users to your contacts (there is now an "Add to contacts" button next to the name of the selected contact). Now this addition works in both directions. That is, if you add someone to your contacts, you also automatically become a contact in them.
* if you write to a user who is not your contact, you will add him to your contacts automatically.
* sending messages in real time. Now you can communicate with other users in real time.
* displaying sent messages.
- The styling of certain elements has also been edited, and two components have been combined into one.
- Unit tests for the new functionality have also been added. Now the project is about 60% covered, which is quite good.
- Some parts of the code have also been formatted and edited.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
