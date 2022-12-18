const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  const { title, youtube_url, id_album } = req.body;
  connection
    .promise()
    .query(
      'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)',
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      const item = req.body;
      item.id = result.insertId;
      res.status(201).send(item);
    })
    .catch((e) => console.error(e));
};
