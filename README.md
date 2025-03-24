# IBM internship task
This is a React and Node.js application developed in TypeScript specifically for the internship task assigned by IBM.

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

├── backend
│   ├── src
│   │   ├── models
│   │   │   └── logSchema.ts
│   │   ├── routes
│   │   │   └── logRoute.ts
│   │   └── index.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
│
├── frontend
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── button
│   │   │   │   ├── button.scss
│   │   │   │   └── index.tsx
│   │   │   ├── forecast
│   │   │   │   ├── CityHeader.tsx
│   │   │   │   ├── ForecastCard.scss
│   │   │   │   ├── ForecastCard.tsx
│   │   │   │   └── ForecastCurrent.tsx
│   │   │   ├── header
│   │   │   │   └── index.tsx
│   │   │   ├── layout
│   │   │   │   └── index.tsx
│   │   │   ├── searchableDropdown
│   │   │   │   ├── index.tsx
│   │   │   │   └── searchableDropdown.scss
│   │   │   └── textfield
│   │   │       ├── index.tsx
│   │   │       └── textfield.scss
│   │   ├── context
│   │   │   └── StateContext.tsx
│   │   ├── hooks
│   │   │   └── useLog.tsx
│   │   ├── interface
│   │   │   ├── ICityItem.tsx
│   │   │   └── IForecastData.tsx
│   │   ├── pages
│   │   │   ├── Forecast.tsx
│   │   │   └── Home.tsx
│   │   ├── utils
│   │   │   └── formatDate.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── mixins.scss
│   │   └── vite-env.d.ts
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── README.md

