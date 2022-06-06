const mw = (req, res, next) => {
  console.log('mw!');
  next();
};

/** @type {import('$types/endpoint').RequestHandler} */
export const get = [mw, (req, res) => {
  res.status(200).send('get');
}];

/** @type {import('$types/endpoint').RequestHandler} */
export const post = (req, res) => {
  res.status(201).send('post');
};

/** @type {import('$types/endpoint').RequestHandler} */
export const put = (req, res) => {
  res.status(200).send('put');
};

/** @type {import('$types/endpoint').RequestHandler} */
export const del = (req, res) => {
  res.status(200).send('delete');
};
