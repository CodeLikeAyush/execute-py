const { spawn } = require("child_process");

const executePy = (filePath, arguments = []) => {
  return new Promise((resolve, reject) => {
    const child = spawn("python", [filePath, ...arguments]);

    let stdoutData = "";
    let stderrData = "";

    child.stdout.on("data", (data) => {
      stdoutData += data;
    });

    child.stderr.on("data", (data) => {
      stderrData += data;
    });

    child.on("error", (error) => {
      reject(error);
    });

    child.on("close", (exitCode) => {
      if (exitCode === 0) {
        resolve(stdoutData.trim());
      } else {
        reject(stderrData.trim());
      }
    });
  });
};

module.exports = { executePy };
