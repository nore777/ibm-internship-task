# IBM internship task

## About
This is a React and Node.js application developed in TypeScript specifically for the internship task assigned by IBM.
The Node.js backend uses Express framework to handle logging user interactions both into console and MongoDB database.
The only React frontend dependencies are Radix Themes, Lucide and SASS for styling and React Router Dom for navigation.
Everything else is developed using built in React and Javascript functionality - like Context for state management, fetch for 
HTTP requests and so on...

This app is deployed to AWS, you can find it here:
https://main.d1mut42q63br5a.amplifyapp.com/
> **Note:** this tries to make a log request to localhost, also the backend side of this project is not hosted on AWS

## Setup
To test out this application locally you'll need to run the React client and Node.js server separately like so:
```bash
# clone the repo
git clone https://github.com/nore777/ibm-internship-task .

# start backend
cd backend
npm i
```
Now you'll need to copy the .env.example file to .env.dev file inside the backend directory.
Make sure you have access to MongoDB, either install it on your machine or get a free instance 
on their website. Add it to .env.dev and run the development environment with:
```bash
npm run dev
```

To run the client go to the frontend directory and type:
```bash
npm i
npm run dev
```

Now you're set to test the app!


## Project Structure
```
├── backend
│   └── src
│       ├── models
│       └── routes
│
├── frontend
│   ├── public
│   └── src
│       ├── assets
│       ├── components
│       │   ├── button
│       │   ├── forecast
│       │   ├── header
│       │   ├── layout
│       │   ├── searchableDropdown
│       │   └── textfield
│       ├── context
│       ├── hooks
│       ├── interface
│       ├── pages
│       └── utils
└── README.md
```
