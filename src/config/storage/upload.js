var multer = require('multer')
const sharp = require('sharp');
var storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})

var upload = multer({storage: storage})
module.exports = upload;
