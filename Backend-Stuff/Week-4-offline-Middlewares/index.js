const express = require("express");

const app = express();

// isOldenough middleware - kind of function

/* function isOldEnough(age) {
  if (age > 14) {
    return true;
  } else {
    return false;
  }
}

app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "u have successfully riden the ride 1",
    });
  } else {
    res.status(411).json({
      msg: "sorry abhi to aap bacche ho",
    });
  }
});

app.get("/ride2", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "u have successfully riden the ride 1",
    });
  } else {
    res.status(411).json({
      msg: "sorry abhi to aap bacche ho",
    });
  }
});
 */

// ----------------------------------------------------------

// applying  express middlewares
// 1- age checker middleware

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;

  if (age > 14) {
    next();
  } else {
    res.json({
      msg: "You are not of age yet",
    });
  }
}

// remember - you can define mw indivisually or as an seprate fun like below.
// also it only triggers for the routes defined below that so use it wisely.

app.use(isOldEnoughMiddleware);

app.get("/ride1", function (req, res) {
  res.json({
    msg: "you have successfully riden the ride 1",
  });
});

app.get("/ride2", function (req, res) {
  res.json({
    msg: "you have successfully riden the ride 2",
  });
});

const port = 3000;

app.listen(port);

// cont from asignment solving based on mw
