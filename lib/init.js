const path=require('path');
const fs=require("fs-extra");
const console=require('./console');
const downloadTemplate=require('./create');

module.exports=async function(name){
  // 获取当前工作目录
  const cwd=process.cwd();

  // 需要创建的目录地址
  const targetCwd =path.join(cwd,name);

  // 判断目录是否已经存在
  if(fs.existsSync(targetCwd)){
    console.error(`${targetCwd}目录已经存在`);
    process.exit(1);
  }else{
    // 创建目录
    downloadTemplate(name,targetCwd);
  }
}