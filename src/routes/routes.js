const ParseController = require('../controllers/parseController');

module.exports = (app) => {
  app.route('/parse_columns')
  .post(ParseController.columnObjectParser);

  app.route('/parse_rows')
  .post(ParseController.rowObjectParser);
};
