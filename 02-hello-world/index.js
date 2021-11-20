
var koa = require('koa');

var app = module.exports = koa();

/**
 * Return "hello world" as a string on every request.
 * Hint: this only requires a single line of code.
 */

app.use(function* () {
  this.response.status = 200;
  // this.response.length = 11;
  this.response.type = 'text/plain; charset=utf-8';
  this.response.body = 'hello world';
});
