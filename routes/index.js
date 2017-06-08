
module.exports = function(app){
	
	 /* GET home page. */
	app.get('/', function(req, res) {
	   res.render('template/index', {});
	});

	app.get('/login', function(req, res) {
	   res.render('template/login', { message: req.flash('message') });
	});

	app.get('/readme', function(req, res) {
	   res.render('template/readme', {});
	});
	app.get('/dashboard', function(req, res) {
	   res.render('template/index', {});
	});
	app.get('/flot', function(req, res) {
	   res.render('template/flot', {});
	});
	app.get('/morris', function(req, res) {
	   res.render('template/morris', {});
	});
	app.get('/tables', function(req, res) {
	   res.render('template/tables', {});
	});
	app.get('/forms', function(req, res) {
	   res.render('template/forms', {});
	});
	app.get('/panelswells', function(req, res) {
	   res.render('template/panelswells', {});
	});
	app.get('/buttons', function(req, res) {
	   res.render('template/buttons', {});
	});
	app.get('/notifications', function(req, res) {
	   res.render('template/notifications', {});
	});
	app.get('/typography',function(req, res) {
	   res.render('template/typography', {});
	});
	app.get('/icons', function(req, res) {
	   res.render('template/icons', {});
	});
	app.get('/grid', function(req, res) {
	   res.render('template/grid', {});
	});
	app.get('/blank', function(req, res) {
	   res.render('template/blank', {});
	});
	
  
}


