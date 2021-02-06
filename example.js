const medium = require("./index");

const feed = medium("jainamdesai");

feed
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      console.log(element.title);
    });
  })
  .catch((error) => console.error(error));
