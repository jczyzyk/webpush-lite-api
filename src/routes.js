const subscriber = require('./notifications/notifications.router');

const routingSetup = (app) => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use('/pushnotifications', subscriber);


  /* GET home page. */
  app.get('/', (req, res) => {
    res.json({
      title: 'Push Notifiation Service',
    });
  });

  // app.use(express.static(path.join(__dirname, 'public')));

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500).send({ error: err.message });
    next();
  });
};

module.exports = routingSetup;
