/** @type {import('$types/endpoint').RequestHandler} */
export const get = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`get id=${id}`);
};
