const config = require('../utils/config');
const mongoose = require('mongoose');
mongoose.connect(config.localURL);
module.exports = mongoose;