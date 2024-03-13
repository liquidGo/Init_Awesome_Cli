#!/usr/bin/env node

const { program } = require('commander');

// 设置版本号
program.version(require('../package.json').version);

//  设置命令
program.command('create <name>')
  .description('初始化项目')
  .action((name) => {
    require('../lib/init.js')(name);
  });

// 解析命令行参数
program.parse(process.argv);