# Digits  

![](/doc/home.png)

Digits is an application that allows users to:

- Register an account.
- Create and manage a set of contacts.
- Add a set of timestamped notes regarding their interactions with each contact.

## Installation  

First, [install Meteor](https://www.meteor.com/install)  

Then download a copy of [this repo](https://github.com/keggit/digits)  

Third, cd into the app directory install the required libraries with:   

```
$ meteor npm install  
```

Once the libraries are installed, you can run the application by invoking:  

```
$ meteor npm run start
```

Note regarding bcrypt warning. You will also get the following message when you run this application:  

``` 
Note: you are using a pure-JavaScript implementation of bcrypt.
While this implementation will work correctly, it is known to be
approximately three times slower than the native implementation.
In order to use the native implementation instead, run

  meteor npm install --save bcrypt

in the root directory of your application.
```

## User Interface Walkthrough  

Landing Page  

When you first bring up the application, you will see the landing page that provides a brief introduction to the capabilities of Digits:  

![](/doc/nolog.png)

Register  
If you do not yet have an account on the system, you can register by clicking on “Login”, then “Sign Up”:  

![](/doc/register.png)

User home page  

After successfully logging in, the system takes you to your home page. It is just like the landing page, but the NavBar contains links to list contact and add new contacts  

![](/doc/home.png)

List Contacts  

Clicking on the List Contacts link brings up a page that lists all of the contacts associated with the logged in user:  

![](/doc/list.png)

