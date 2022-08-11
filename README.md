# todos-react-FE

_to be used with todos-express-BE https://github.com/mihaidld/todos-express-BE for back-end side_

## Features

- front-end for TODO List app setup with `Create React App` and using `React Hooks API` (_useState_, _useEffect_, _useContext_)
- simple user registration and authentication using API Keys
- HTTP requests using Fetch API and request header `'Authorization': <API Key>`
- modular components styled with _Bootstrap 5_
- responsive, accessible and with a dark mode preference saved in `localStorage`

## Project structure

```bash
src
├── App.js
├── App.test.js
├── components
│   ├── AddTodoForm.js
│   ├── LoginForm.js
│   ├── ModeSwitch.js
│   ├── RegisterForm.js
│   ├── SelectTodos.js
│   ├── Todo.js
│   ├── Todos.js
│   └── TodosList.js
├── context
│   └── ModeContext.js
├── index.js
├── serviceWorker.js
└── setupTests.js
```

## Install

Update `local IP` and `PORT` of the server in `ModeContext.js`.

Install dependencies and start development server via terminal command line

```bash
yarn
yarn start
```

## Usage

Enter an `API KEY` to login or register with a name
