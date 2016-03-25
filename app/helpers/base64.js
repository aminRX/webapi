var fs = require('fs');

exports.decodeBase64Image = function decodeBase64Image(dataString) {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
};

exports.writeFile = function(response, fileName, imageBuffer, path) {
  console.log(imageBuffer);
  fs.writeFile(path, imageBuffer.data, function(err) {
    if (err !== null) {
      response.json({
        success: false,
        message: 'Image not write in the dir.'
      });
    }

    console.log(`Photo updating error: ${err}`);
  });
};
