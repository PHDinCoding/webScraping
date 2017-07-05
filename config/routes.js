var scrape = require("../scripts/scrape");

var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");

module.exports = function(router){

    router.get("/", function(req,res){
        res.render("home");
    });

    

}