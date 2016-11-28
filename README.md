# 创建项目的脚手架
## 安装运行环境
该脚本需要 Node.js >= 4.2 作为运行环境.
如果你没有 Node.js 的话[点这里去下载 Node.js](https://nodejs.org/zh-cn/).

## 安装/更新
安装和更新的方法是一样的

Mac 下运行
```sh
#http方式
sudo npm i -g git+http://github.com/kebingzao/p-helper.git
#ssh方式
sudo npm i -g git+ssh://git@github.com:kebingzao/p-helper.git
```

Windows 下以`管理员身份`运行 cmd, 然后执行命令
```sh
#http方式
npm i -g git+http://github.com/kebingzao/p-helper.git
#ssh方式
npm i -g git+ssh://git@github.com:kebingzao/p-helper.git
```

## 使用
初始化项目
```sh
p-helper init
#或者使用简写
p-helper i
#后面可以加上项目名
p-helper i --name myProject
```

查看帮助
```sh
p-helper -h
#或者直接使用
p-helper
```