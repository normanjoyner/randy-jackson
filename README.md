# randy-jackson

![randy jackson](https://media.giphy.com/media/3o751Rsd8DWyeWrDEI/giphy.gif)

## About

### Description
Express middleware that pays homage to the greatest American Idol judge of all time: Randy Jackson.

`randy-jackson` intercepts all responses, setting the status message to `FROM ME DAWG` and the response body to `Yeah, that's gonna be a {statusCode} from me dawg`.

### Installation
`yarn add randy-jackson`

### Example Usage
```
const Express = require('express');
const randy_jackson = require('randy-jackson');

const server = new Express();
server.use(randy_jackson);

server.all('*', (req, res, next) => {
    res.sendStatus(404);
});

server.listen(8080);
```

```
➞ curl localhost:8080 -i
HTTP/1.1 404 FROM ME DAWG
X-Powered-By: Express
Content-Type: text/plain; charset=utf-8
Content-Length: 40
Connection: keep-alive

Yeah, that's gonna be a 404 from me dawg
```

### Content-Type Support
* `text/plain`
* `application/json`

## FAQ
* Why would I ever use this?
  * You love Randy Jackson
  
## Roadmap
* Additional content-type support
* Status code whitelisting / blacklisting
