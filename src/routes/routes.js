const ParseController = require('../controllers/parseController');

module.exports = (app) => {
  app.route('/parse_json')
  .post(ParseController.jsonMaker);
};
