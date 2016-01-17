var express = require('express');
var router = express.Router();

var people = {
  'dan':{name:'dan kwon',location:'new york',specialty:'ios'},
  'anna':{name:'anna garcia',location:'new york',specialty:'juicecrawl'},
  'joey':{name:'joey pacheo',location:'philadelphia',specialty:'ios'},
  'mauricio':{name:'mauricio alavarez',location:'new jersey',specialty:'chuckel head'}
}

/* GET users listing. */
router.get('/:resource', function(req, res, next) {

  var resourceValue = req.params.resource;
  if(resourceValue == 'people'){
      var keys = Object.keys(people);
      var list = [];
      for (var i = 0; i<keys.length; i++){
          var key = keys[i];
          var person = people[key];
          list.push(person);
      }

      res.json({people:list});
      return;
  }



});

module.exports = router;
