const express = require('express');
const authMiddleware = require('../middleware/auth');

const Project = require('../models/Project');
const Task = requite('../models/Task');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async  (req, res) => {
    res.send({ user: req.userId });
});

router.get('/:projectId', async (req, res) => {
    res.send({ user: req.userId });
});

router.post('/', async (req, res) => {
    res.send({ user: req.userId });
});

router.put('/:projectId', async (req, res) => {
    res.send({ user: req.userId });
});

router.delete('/:projectId', async (req, res) => {
    res.send({ user: req.userId });
});

module.exports = app => app.use('/projects', router);