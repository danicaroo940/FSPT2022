function defaultFunct(request, response) {
  response.write('<h1>Default message</h1>');
}

function defaultGet(request, response) {
  response.write('<h1>defaultGet response</h1>');
}

function defaultPost(request, response) {
  response.write('<h1>defaultPost response</h1>');
}

export { defaultFunct, defaultGet, defaultPost };
