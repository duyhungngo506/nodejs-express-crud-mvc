const mongooseDelete = require('mongoose-delete');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        maxLength: 255,
        require: true
    },
    birthday: Date,
    gender: {
        type: String,
        maxLength: 10
    },
    address: {
        type: String,
        maxLength: 255
    },
    phone_number: {
        type: String,
        maxLength: 10
    },
    image: {
        type: String,
        maxLength: 255
    }
}, {
    timestamps: true
},);


User.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('User', User);
