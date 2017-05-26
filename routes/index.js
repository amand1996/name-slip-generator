var express = require('express');
var router = express.Router();

const data = [
 {
   "FIELD1": 1,
   "FIELD2": "0201CS110001",
   "FIELD3": "ABC ",
   "FIELD4": "CSE"
 },
 {
   "FIELD1": 2,
   "FIELD2": "0201IP110002",
   "FIELD3": "DEF ",
   "FIELD4": "IP"
 },
 {
   "FIELD1": 3,
   "FIELD2": "0201IT110003",
   "FIELD3": "XYZ ",
   "FIELD4": "IT"
 },
 {
   "FIELD1": 4,
   "FIELD2": "0201ME110004",
   "FIELD3": "MNO ",
   "FIELD4": "MECH"
 }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data:data });
});

module.exports = router;
