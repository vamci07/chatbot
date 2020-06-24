var express = require("express");
const { request } = require("express");
const { default: Axios } = require("axios");
var router = express.Router();

router.post("/", function(req, res, next) {
    Axios.post("http://localhost:5005/webhooks/rest/webhook", req.body)
        .then((response) => {
            const { data } = response;
            res.send(data)
        })
        .catch((exception) => {
            console.error(exception);
        });
});

module.exports = router;