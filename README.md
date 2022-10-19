# todo-meteor
A simple to-do app using Svelte and Meteor.

The app is based on the [Meteor tutorial](https://svelte-tutorial.meteor.com/simple-todos/) for creating a simple Meteor to-do app using Svelte.

## Live Link
To see the completed app running, visit [this link] (https://todo-jstein.meteorapp.com)

## Getting started
To get started, clone the repo, navigate to the enclosing folder, and enter `cd simple-todos-svelte` and then run `meteor npm install` to install the dependencies for the Svelte app.

Finally, run `meteor run` to start the app.

The default port is 3000, so you can access the app at `http://localhost:3000`.'

The preset username is `meteorite` and the password is `password`.

## What's included
Within the download you'll find the following directories and files:

```
simple-todos-svelte/
├── client/
│   ├── main.js
│   ├── main.html
│   ├── main.css
│   ├── App.svelte
│   ├── components/
│   │   ├── Task.svelte
│   │   ├── TaskList.svelte
│   │   └── TaskForm.svelte
│   └── lib/
│       └── accounts.js
├── imports/
│   ├── api/
│   │   └── tasks.js
│   └── startup/
│       └── client/
│           └── routes.js
├── public/
│   └── favicon.ico
├── server/
│   └── main.js
├── .meteor/
│   └── ...
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

We've omitted some files and directories for brevity.
