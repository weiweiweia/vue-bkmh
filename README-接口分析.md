## 分析接口文档

### 轮播图及主体数据 
 GET http://m.buka.cn/api/v3/home?page=1

 ### 底部更多数据
 GET http://m.buka.cn/api/v3/home?page=2

 跨域的如何处理呢？

1. jsonp
2. cors
3. 代理   (推荐)
4. ....

#### 代理的处理

方案一、自己做一个nodejs的中间层

A - 当前页面地址    http://localhost:8080
B - nodejs中间层   http://localhost:9090
C - 目标地址       http://movie.miguvideo.com
D - 目标地址的某个接口地址 http://movie.miguvideo.com/lovev/miguMovie/data/seeFilmData.jsp

方案二、配置 Vue 脚手架的配置文件

Vue 脚手架创建的项目，在本地开发时（npm run serve）时，启动的服务就是一个node实现的。
Vue 脚手架创建的项目，有一个配置文件叫做 vue.config.js
在这个配置文件中可以做很多的配置，其中就有代理的配置。

1. 项目根目录下创建一个 vue.config.js
2. 配置 vue.config.js 中 devServer.proxy 配置。这里的配置与方案一种的配置项是一样的
3. 重新运行项目
4. A 与 B 是同一个主机。这里就是 http://localhost:8080
