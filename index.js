const Parser = require("rss-parser");
const parser = new Parser();

async function main(userId) {
  try {
    const { items } = await parser.parseURL(
      `https://medium.com/feed/@${userId}`
    );

    return items;
  } catch (error) {
    return error;
  }
}

module.exports = main;
