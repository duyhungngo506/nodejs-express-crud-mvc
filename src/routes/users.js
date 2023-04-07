const express = require('express');
const router = express.Router();
const upload = require('../config/storage/upload')
const UserController = require('../app/controllers/UserController');

router.get('/create', UserController.create);
router.get('/trash', UserController.trash);
router.get('/:id', UserController.show);
router.get('/:id/edit', UserController.edit);
router.post('/handle-form-actions', UserController.handleFormActions);
router.post('/handle-form-trash-actions', UserController.handleFormTrashActions);
router.post('/store', upload.any(), UserController.store);
router.put('/:id', upload.any(), UserController.update);
router.patch('/:id/restore', UserController.restore);
router.patch('/:id', UserController.destroy);
router.delete('/:id/force', UserController.forceDestroy);
router.get('/', UserController.index);


module.exports = router;
