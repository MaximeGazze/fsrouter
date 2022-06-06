/** @type {import('#types/endpoint').RequestHandler} */
export const get = (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log('get');
};
