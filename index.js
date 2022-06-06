import express, { json, urlencoded } from 'express';
import { readdirSync, statSync } from 'fs';

const app = express();
const port = 8080;

app.use(json());
app.use(urlencoded({ extended: true }));

const getFilePaths = (path) => readdirSync(path).reduce((acc, file) => {
  const filePath = `${path}/${file}`;
  if (statSync(filePath).isDirectory()) return acc.concat(getFilePaths(filePath));
  return acc.concat(filePath);
}, []);

const paths = getFilePaths('./router');

const formatTokens = {
  './router': '',
  '/index.js': '',
  '.js': '',
  '[': ':',
  ']': '',
};

paths.forEach(async (/** @type {string} */ path) => {
  const endpointPath = Object.keys(formatTokens).reduce((acc, key) => acc.replace(key, formatTokens[key]), path) || '/';
  if (endpointPath.endsWith('__middleware')) {
    const module = await import(path);
    const mw = module.middleWare; 
    // get function and add to begining of call stack for all routes starting with prefix (endpointpath.replace('__middleware', ''))
  }
  const endpoint = await import(path);
  const methods = Object.keys(endpoint);
  const methodVerbs = methods.map((item) => (item === 'del' ? 'delete' : item));
  methodVerbs.forEach((method, index) => app[method](endpointPath, endpoint[methods[index]]));
  methodVerbs.forEach((item) => console.log(item.toUpperCase(), endpointPath));
});

app.listen(port, () => console.log(`The application is listening on port ${port}!`));
