const User = require('../models/User');
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');
class SiteController { // [GET] /
    index(req, res, next) {
        User.find({}).then((users) => {
            res.render('home', {users: multipleMongooseToObject(users)});
        }).catch(next);
    }

}

module.exports = new SiteController();
