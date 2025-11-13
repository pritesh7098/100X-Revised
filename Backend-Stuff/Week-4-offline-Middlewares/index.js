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





const port = 3000;

app.listen(port);
