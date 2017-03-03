//HomeController.js for the pages in the views home directory
exports.Index = function(request, response){  
    response.render('home/index', 
  	{ title: "Laurie's Tools Home Page"});
};