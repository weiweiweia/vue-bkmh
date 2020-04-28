// 处理漫画相关的接口请求

// 引入封装好的axios的实例
import request from '@/utils/request'

// 一个接口就暴露一个函数
// 获取推荐页面数据
export const getRecommend = () => {
  // 返回的是接口调用之后axios返回的promise对象
  return request({
    url: '/api/v3/home?page=1',
    method: 'GET'
    // 需要请求体参数就提供data
    // 需要查询字符串参数就提供params
  })
}
