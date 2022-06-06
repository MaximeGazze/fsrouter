# Filesystem routing for ExpressJS

This project is a demo of how we can use express with filesystem routing to create a REST API.

## Installation

```bash
git clone https://github.com/MaximeGazze/fsrouter
cd fsrouter
npm install
```

## Usage

### Creating an endpoint

the `@type` annotation allows us to take advantage of the IDE's IntelliSens.

```js
/** @type {import('#types/endpoint').RequestHandler} */
export const get = (req, res) => {
  console.log('get');
};
```

Every express routing method is supported

```js
export const get = (req, res) => {...};
export const post = (req, res) => {...};
export const put = (req, res) => {...};
export const del = (req, res) => {...}; // delete is a reserved keyword
// etc.
```

### Filesystem routing

The router's root is the `./router` directory. Any files with the name `index.js` will result in the directory's name being used.

URL params are defined using brackets `[]`.

```
router/
├── index.js         => /
└── test
    ├── [id].js      => /test/:id
    └── index.js     => /test
```