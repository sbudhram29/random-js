folders = ['home', 'home/user', 'home/user/id', 'home/videos', 'home/videos/id'];

routes = {};

for (let uri of folders) {
  current = routes;
  let parms = uri.split('/');
  for (let parm of parms) {
    if (!current[parm]) {
      current[parm] = {};
    } else {
      current = current[parm];
    }
  }
}

function printRoutes(routes, delimeter) {
  for (let route in routes) {
    console.log(delimeter + route);
    if (typeof routes[route] === 'object') {
      printRoutes(routes[route], ' ' + delimeter);
    }
  }
}

printRoutes(routes, '-');
