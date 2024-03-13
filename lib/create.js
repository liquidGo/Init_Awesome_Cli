const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const inquirer = require('inquirer');
const loading=require('./loading');
const { EDownloadList,downloadList } = require('./config');

const selectFrames = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'frame',
      message: '请选择框架',
      choices: [
        { value: EDownloadList['React-H5'], name: "React-H5" },
        { value: EDownloadList['React-Mobile'], name: "React-Mobile" },
        { value: false, name: "取消" }
      ]
    }
  ])
}

module.exports = async function (name,targetCwd) {
  const { frame } = await selectFrames();
  if(!frame) return;

  // 下载模板
  loading(download, '正在下载模板',downloadList[frame],targetCwd);
}