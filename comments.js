//Create web server
const express = require('express');
const app = express();

//Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

//Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Express Middleware
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.
- Middleware functions can perform the following tasks:
  - Execute any code.
  - Make changes to the request and the response objects.
  - End the request-response cycle.
  - Call the next middleware function in the stack.

### Express Routing
- Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
- Each route can have one or more handler functions, which are executed when the route is matched.

```javascript
// Path: app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Express Router
- Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
- The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts it on a path on the main app.

```javascript
// Path: app.js
const express = require('express');
const app = express();
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// define the home page route
router.get('/', (req, res) => {