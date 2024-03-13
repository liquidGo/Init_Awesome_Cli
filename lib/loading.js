const ora = require("ora");

const loading = async (fn, text,url,targetCwd) => {
  const spinner = ora(text).start();
  try {
    await fn(url, targetCwd);
    spinner.succeed();
  } catch (error) {
    spinner.fail();
  }
}

module.exports = loading;