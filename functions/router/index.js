const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Api running!</h1>');
    res.end();
});


router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users/create', userController.create);
router.patch('/users/:id/edit', userController.update);
router.delete('/users/:id/delete', userController.remove);


module.exports = router;