// 项目的配置文件
module.exports = {
  devServer: {
    // key: value
    //      key - 前缀
    //      value - 是跟 http-proxy-middleware 相同的一个配置对象
    proxy: {
      '/api': {
        // 目标地址，只写主机
        target: 'http://m.buka.cn',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
