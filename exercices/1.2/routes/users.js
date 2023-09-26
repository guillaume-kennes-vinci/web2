var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const stats = {}; //

app.use((req, res, next) => {
    const currentOperation = `${req.method} ${req.path}`;
    const currentOperationCounter = stats[currentOperation];
    if (currentOperationCounter === undefined) stats[currentOperation] = 0;
    stats[currentOperation] += 1;
    const statsMessage = `Request counter : \n${Object.keys(stats)
      .map((operation) => `- ${operation} : ${stats[operation]}`)
      .join('\n')}
        `;
    console.log(statsMessage);
    next();
});
 
app.use(express.static(path.join(__dirname, 'public'))); //
module.exports = router;
