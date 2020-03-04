const ParseController = require('../controllers/parseController');

module.exports = (app) => {
  app.route('/parse_columns')
  .post(ParseController.columnObjectParser);
};
