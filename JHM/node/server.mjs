import helloFunct from './hello.mjs';
import * as byeController from './bye.mjs';
import { defaultFunct, defaultGet, defaultPost } from './default.mjs';

// const OK_STATUS = 200;
let clicks = 0;

function serverRouter(request, response) {
  // response.write('My server message');
  // response.end();

  // response.writeHead(statusCode:number [, statusMessage:string][, headers:object]);
  // response.writeHead(OK_STATUS, {'Content-Type': 'text/html'});
  // response.writeHead(OK_STATUS, 'todo guay', {'Content-Type': 'text/html'});

  const url = request.url;
  const method = request.method;

  if (url ==='/click') {
    if (method === 'GET') {
      response.write(`${clicks} clicks`);
    } else if (method === 'POST') {
      clicks++;
      response.write('click!');
    } else if (method === 'PUT') {
      response.write('clicks updated!');
    }

    response.end();
    return;
  }

  // let message;
  if (url === '/hello') {
    // message = 'Hello web!';
    helloFunct(request, response);
  } else if (url === '/bye') {
    // message = 'Good bye web!';
    byeController.byeFunct(request, response);
  } else {
    // message = '<h1>Default message</h1>';
    if (method === 'GET') {
      defaultGet(request, response);
    } else if (method === 'POST') {
      defaultPost(request, response);
    } else {
      defaultFunct(request, response);
    }
  }

  // response.write(message);

  response.end();
}

export { serverRouter };
