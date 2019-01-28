# Await Catch Break

## Why ?

When using async/await the code will not stop when something reject.  
And need to wrap with try/catch to the whole code.

## Install

```
npm install git+https://github.com/vedsmith92/await-catch-break.git
```

## Usage

```js
import awcb from 'await-catch-break';

let data = await awcb(foo()) // foo = Some promise that reject an error.
.catch((error) => console.log({ catch: error }));

// When rejected an error, this code below will not be executed !
console.log({ data });
```