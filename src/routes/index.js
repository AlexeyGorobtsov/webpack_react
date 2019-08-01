const express = require('express');
const router = express.Router();
const CustomError = require('./custom-error');

router.use(async (req, res) => {
    try {
        const route = require(`.${req.path}`)[req.method];
        try {
            const result = await route(req);
            res.send(result);
        } catch (e) {
            if (e instanceof CustomError) {
                return res.status(e.status).send({
                    error: e.code,
                    description: e.message
                })
            } else {
                console.error(e);
                return res.status(500).send({
                    error: 'GENERIC',
                    description: 'Something went wrong.'
                })
            }
        }
    } catch (e) {
        res.status(404).send({
            error: 'NOT_FOUND',
            description: 'The resource you tried to access does not exist!!!!!'
        })
    }
});

module.exports = router;