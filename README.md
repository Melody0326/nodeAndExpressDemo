# nodeAndExpressDemo
这个demo是依托于pm2做为启动控制，express＋jade的当是实现的简单demo，用于给从来没有用过的同学借鉴一下。

config/pm2/zhengdewei.json做为启动文件，script是启动文件地址。       
使用pm2 start config/pm2/zhengdewei.json启动       

### app.js     
引入init模块，并且建立服务。

### init.js      
创建express实例。    
设置jade模版引擎   
设置静态资源地址build  //静态资源可以直接放置在build下使用。    
创建中间件，如果访问index后，执行test模块。     
最后返回app实例。


### server/index.js     
使用express路由，
访问index或者访问/getname 后对请求进行处理，并渲染jade模版引擎    

### public/view/index.jade
title 与name做为需要注入的数据变量

简单demo  如有疑问  QQ452202586




