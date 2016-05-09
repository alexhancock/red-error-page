# red-error-page

Express error handling middleware which renders a red page (using [redbox-react](https://github.com/KeywordBrain/redbox-react)) with an easy to read error format.

![screenshot](https://raw.githubusercontent.com/alexhancock/red-error-page/master/screenshot.png)

#### Installation
```bash
npm install -g red-error-page
```

#### Usage

```javascript
// Where "app" is an express server.
var errorHandler = require("red-error-page");
app.use(errorHandler);
```
