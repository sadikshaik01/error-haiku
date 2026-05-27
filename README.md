# 🌸 error-haiku 🌸

> A stress-relieving error handler for Node.js.

Developers hate seeing massive, angry red error logs. What if your errors were poetic?

`error-haiku` intercepts unhandled crashes and common errors in your Node.js application. Instead of just spitting out a scary stack trace, it prints a calming, beautifully formatted Haiku about what went wrong to help reduce developer stress.

## Installation

```bash
npm install error-haiku
```

## Usage

Simply require and initialize the package at the very top of your application's entry file (e.g., `index.js` or `server.js`).

```javascript
const errorHaiku = require('error-haiku');
errorHaiku.init();

// The rest of your app...
```

Now, whenever an unhandled exception or rejection occurs, you will be greeted with a poem before the stack trace:

```text
🌸 Function is missing 🌸
🍃 Undefined breaks the whole app 🍃
🍂 Check your recent code 🍂

TypeError: thisIsUndefined is not a function
    at Timeout._onTimeout (/your/app/test.js:12:3)
```

## Supported Error Types

Currently, `error-haiku` generates specific poetry for:
- `TypeError`
- `ReferenceError`
- `SyntaxError`
- `RangeError`
- `Generic` (for anything else)

## License

ISC
