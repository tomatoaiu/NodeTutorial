var osmosis = require('osmosis');

osmosis
  .get("https://www.npmjs.com/package/osmosis")
  .set({
    ogTitle: 'meta[property="og:title"]@content',
    ogDescription: 'meta[property="og:description"]@content',
    ogUrl: 'meta[property="og:url"]@content',
  })
  .data(item => console.log(item));
