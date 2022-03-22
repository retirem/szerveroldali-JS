
/**
 * Generically renders the front-end
 */
 const reuireOption = require('../utility/requireOption');

 module.exports = function(objectRepository, viewName){
     return function(req, res){
        res.render(viewName, res.locals);
     };
 };