import chai from 'chai';
import sinonChai from 'sinon-chai';
import jsdom from 'jsdom';
import fs from 'fs';
import path from 'path';

chai.use(sinonChai);

/*
 This is being set for the cases where a DOM is required, but usually it is
 faster to use shallow rendering (https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md).

 The window and document are being set in the global namespace because they
 don't exist in Node, so we need to simulate it.

 Taken from http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html#the-client-application
 */

const markup = fs.readFileSync(path.join(__dirname, '/resources/fixtures/document.html'));
const baseUrl = 'http://localhost';
const doc = jsdom.jsdom(markup, {
  url: `${baseUrl}/`,
});
const win = doc.defaultView;

global.document = doc;
global.window = win;
global.baseUrl = baseUrl;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
