
# execute-py


A Node.js package that allows you to run Python scripts from your Node.js code.

## Installation

```bash
npm install execute-py
```

## Usage

```javascript
const { executePy } = require("execute-py");
const path = require("path");

const execute = async () => {
  try {
    // Provide the path to your Python script
    const res = await executePy(path.join(__dirname, "script.py"));

    // Output the result of the Python script
    console.log(res);
  } catch (error) {
    // Handle any errors that occur during execution
    console.error("Error:", error);
  }
};

execute();
```

Optionally, you can pass an array of arguments to the `executePy` function, which will be available inside your Python script as `sys.argv[1]`, `sys.argv[2]`, and so on.

The `executePy` function returns a promise, so you need to use `.then` or `async-await` to run the function and retrieve the values/data of the print statements inside the Python script or handle any errors that may occur.

## Example with Arguments

```javascript
const { executePy } = require("execute-py");
const path = require("path");

const executeWithArgs = async () => {
  try {
    // Provide the path to your Python script and an array of arguments
    const res = await executePy(path.join(__dirname, "script_with_args.py"), ["arg1", "arg2"]);

    // Output the result of the Python script
    console.log(res);
  } catch (error) {
    // Handle any errors that occur during execution
    console.error("Error:", error);
  }
};

executeWithArgs();
```

## License
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

This project is licensed under the ISC License.

