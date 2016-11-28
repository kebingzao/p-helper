#! /usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const _ = require('lodash');
const chalk = require('chalk');
const fs = require("fs-extra");


const pkg = require('./package.json');
program.version(pkg.version);

program
    .command('init')
    .alias('i')
    .description('创建一个项目')
    .option('--name [moduleName]')
    .action(option => {
        var config = _.assign({
            name: null,
            description: ''
        }, option);
        var promps = [];
        if(!config.name) {
            promps.push({
                type: 'input',
                name: 'name',
                message: '请输入模块名称',
                validate: function (input){
                    if(!input) {
                        return '不能为空'
                    }
                    return true
                }
            })
        }
        if(!config.description) {
            promps.push({
                type: 'input',
                name: 'description',
                message: '请输入模块描述'
            })
        }
        inquirer.prompt(promps).then(function (answers) {
            config = _.assign(config, answers);
            // 接下来拷贝目录
            fs.copySync(__dirname + '/structrue', config.name);
            console.log(chalk.green(`项目创建成功`));
            console.log(chalk.green(`项目名：${config.name}`));
        })
    })
    .on('--help', function() {
        console.log('  Examples:');
        console.log('');
        console.log('$ p-helper i');
        console.log('$ p-helper i --name kbzProject');
    });
program.parse(process.argv);

if (!program.args.length) program.help();