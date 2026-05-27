<div align="center">
  <h1>🌸 error-haiku 🌸</h1>
  <p><b>A stress-relieving error handler for Node.js.</b></p>
  
  [![npm version](https://img.shields.io/npm/v/error-haiku.svg?style=flat-square)](https://www.npmjs.org/package/error-haiku)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
</div>

<br />

> Developers hate seeing massive, angry red error logs. What if your errors were poetic?

`error-haiku` intercepts unhandled crashes and common errors in your Node.js application. Instead of just spitting out a scary stack trace, it prints a calming, beautifully formatted Haiku about what went wrong to help reduce developer stress.

---

## 📦 Installation

Install the package via npm:

```bash
npm install error-haiku
```

## 🚀 Quick Start

Simply require and initialize the package at the very top of your application's entry file (e.g., `index.js` or `server.js`). It requires **zero configuration**.

```javascript
// Add this at the very top of your app!
const errorHaiku = require('error-haiku');
errorHaiku.init();

// The rest of your code below...
console.log("App started...");
```

## 🎭 What it looks like

Now, whenever an unhandled exception or rejection occurs, you will be greeted with a beautiful poem before the stack trace. 

For example, if you try to call a function that doesn't exist, your terminal will output:

```text
🌸 Function is missing 🌸
🍃 Undefined breaks the whole app 🍃
🍂 Check your recent code 🍂

TypeError: thisIsUndefined is not a function
    at Timeout._onTimeout (/your/app/test.js:12:3)
```

## 📚 Supported Error Poetry

Currently, `error-haiku` is a trained poet in the following error types:
- `TypeError`
- `ReferenceError`
- `SyntaxError`
- `RangeError`
- `Generic` *(A catch-all for unknown crashes)*

---

<div align="center">
  <sub>Built with ❤️ to make debugging a little less painful.</sub>
</div>
