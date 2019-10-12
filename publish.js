const ghpages = require('gh-pages');

ghpages.publish('iframe', function (err) {
    if (err) console.log(err);
    else console.log('published')
});
