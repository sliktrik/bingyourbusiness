var express = require('express');
var request = require('request');
var router = express.Router();

var api = "http://api.similarweb.com/Site/";
var key = "32062136805a7a2ef5a3a055b7673bc7";


router.get('/', function (req, res) {
    res.render('index', {
        title: 'api endpoint'
    });
});

router.get('/visits/:website', function (req, res) {

    var today = new Date();
    var endDate = (today.getMonth() - 1) + "-" + today.getFullYear();
    var startDate = (today.getMonth() - 2) + "-" + today.getFullYear();

    var website = req.params.website;
    var url = api + website + "/v1/visits?gr=daily&start=" + startDate + "&end=" + endDate + "&md=false&Format=JSON&UserKey=" + key;

    request(url, function (error, response, body) {
        

        if (!error && response.statusCode == 200) {

            var json = JSON.parse(body);
            var total = 0;
            
            console.log(json);

            for (var key in json.Values) {
                total += json.Values[key].Value;
            }

            res.json({
                status: true,
                data: total,
                url: url
            });

        } else {
            res.json({
                status: false,
                message: "no data",
                url: url
            });
        }
    })
});

router.get('/rank/:website', function (req, res) {

    var today = new Date();
    var endDate = (today.getMonth() - 1) + "-" + today.getFullYear();
    var startDate = (today.getMonth() - 2) + "-" + today.getFullYear();

    var website = req.params.website;
    var url = api + website + "/v1/traffic?gr=daily&start=" + startDate + "&end=" + endDate + "&md=false&Format=JSON&UserKey=" + key;

    request(url, function (error, response, body) {

        if (!error && response.statusCode == 200) {

            var json = JSON.parse(body);

            res.json({
                status: true,
                data: json.GlobalRank,
                url: url
            });

        } else {
            res.json({
                status: false,
                message: "no data",
                url: url
            });
        }
    })
});

router.get('/orgsearch/:website', function (req, res) {

    var today = new Date();
    var endDate = (today.getMonth() - 1) + "-" + today.getFullYear();
    var startDate = (today.getMonth() - 2) + "-" + today.getFullYear();

    var website = req.params.website;
    var url = api + website + "/v1/orgsearch?gr=daily&start=" + startDate + "&end=" + endDate + "&md=false&Format=JSON&UserKey=" + key;

    request(url, function (error, response, body) {

        if (!error && response.statusCode == 200) {

            var json = JSON.parse(body);
            var total = 0;

            for (var key in json.Data) {
                total += json.Data[key].Visits;
            }

            res.json({
                status: true,
                data: total,
                url: url
            });

        } else {
            res.json({
                status: false,
                message: "no data",
                url: url
            });
        }
    })
});

router.get('/paidsearch/:website', function (req, res) {

    var today = new Date();
    var endDate = (today.getMonth() - 1) + "-" + today.getFullYear();
    var startDate = (today.getMonth() - 2) + "-" + today.getFullYear();

    var website = req.params.website;
    var url = api + website + "/v1/paidsearch?gr=daily&start=" + startDate + "&end=" + endDate + "&md=false&Format=JSON&UserKey=" + key;

    request(url, function (error, response, body) {

        if (!error && response.statusCode == 200) {

            var json = JSON.parse(body);
            var total = 0;

            for (var key in json.Data) {
                total += json.Data[key].Visits;
            }

            res.json({
                status: true,
                data: total,
                url: url
            });

        } else {
            res.json({
                status: false,
                message: "no data",
                url: url
            });
        }
    })
});

module.exports = router;