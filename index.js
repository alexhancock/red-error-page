var RedBoxError = require("redbox-react").RedBoxError;
var React = require("react");
var ReactDOMServer = require('react-dom/server');
var accepts = require("accepts");

module.exports = function(err, req, res, next){
  // Basic negotiation
  var type = accepts(req).type("html");

  // Bail and forward the error if...
  // a) the headers are sent
  // b) the request does not accept html
  if (res.headersSent || type !== "html") {
    return next(err);
  }

  // Send red page markup
  var element = React.createElement(RedBoxError, {
    error: err,
    style: {
      overflowY: "scroll"
    }
  });

  var html = ReactDOMServer.renderToStaticMarkup(element);

  res.end(html);

  // Forward the error
  next(err);
};
