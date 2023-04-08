const User = require('../models/User');
const sharp = require('sharp');

const {
    mongooseToObject,
    multipleMongooseToObject,
} = require('../../util/mongoose');
class UserController {
    index(req, res, next) {
        let userQuery = User.find({});
        if (req.query.hasOwnProperty('_sort')) {
            userQuery = userQuery.sort({ [req.query.column]: req.query.type });
        }

        Promise.all([userQuery, User.countDocumentsDeleted()])
            .then(([users, deletedCount]) => {
                res.render('users/stored-users', {
                    users: multipleMongooseToObject(users),
                    deletedCount,
                });
            })
            .catch(next);
    }

    trash(req, res, next) {
        User.findDeleted({})
            .then((users) => {
                res.render('users/trash-users', {
                    users: multipleMongooseToObject(users),
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('users/create');
    }

    // [GET] /users/:id
    edit(req, res, next) {
        User.findOne({ _id: req.params.id })
            .then((user) =>
                res.render('users/edit', { user: mongooseToObject(user) }),
            )
            .catch(next);
    }

    // [PUT] /users/:id
    update(req, res, next) {
        if (req.files[0]?.filename) {
            sharp(req.files[0].path)
                .resize(300, 400)
                .toFile(
                    'src/public/uploads/' + '300x400-' + req.files[0].filename,
                    () => {
                        req.body.image = '300x400-' + req.files[0].filename;
                    },
                );
        }
        User.updateOne(
            {
                _id: req.params.id,
            },
            {
                ...req.body,
            },
            { new: true },
        )
            .then((user) => {
                res.redirect('/users');
            })
            .catch(next);
    }

    // [PATCH] /users/:id/restore
    restore(req, res, next) {
        User.restore({ _id: req.params.id })
            .then((user) => {
                res.redirect('back');
            })
            .catch(next);
    }

    // [POST] /users/store
    store(req, res, next) {
        if (req.files[0]?.filename) {
            sharp(req.files[0].path)
                .resize(300, 400)
                .toFile(
                    'src/public/uploads/' + '300x400-' + req.files[0].filename,
                    function (err) {
                        req.body.image = '300x400-' + req.files[0].filename;
                        const user = new User(req.body);
                        user.save()
                            .then(() => res.redirect('/users'))
                            .catch(next);
                    },
                );
        } else {
            res.redirect('back');
        }
    }

    // [PATCH] /users/:id
    destroy(req, res, next) {
        User.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    // [DELETE] /users/:id/force
    forceDestroy(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    // [GET] /users/:id
    show(req, res, next) {
        User.findOne({ _id: req.params.id })
            .then((user) => {
                res.render('users/show', { user: mongooseToObject(user) });
            })
            .catch(next);
    }

    // [POST] /users/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                User.delete({
                    _id: {
                        $in: req.body.userIds,
                    },
                })
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action invalid' });
                break;
        }
    }
    // [POST] /users/handle-form-trash-actions
    handleFormTrashActions(req, res, next) {
        switch (req.body.action) {
            case 'restore':
                User.restore({
                    _id: {
                        $in: req.body.userIds,
                    },
                })
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch(next);
                break;
            case 'delete':
                User.deleteMany({
                    _id: {
                        $in: req.body.userIds,
                    },
                })
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch(next);
                break;

            default:
                res.json({ message: 'Action invalid' });
                break;
        }
    }
}

module.exports = new UserController();
