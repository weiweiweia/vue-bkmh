<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
          <img src="http://c-r7.ibuka.cn/auto/appRecom/202004101353_5e9009d8c555e.jpg" alt="">
      </div>
      <div class="swiper-slide">
          <img src="http://c-r7.ibuka.cn/auto/appRecom/202004231806_5ea168a644114.jpg" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 引入swiper的核心和样式
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'IndexSwiper',
  mounted () {
    /*eslint-disable */
    new Swiper(this.$refs.swiper, {
      /* eslint-enable */
      loop: true, // 循环模式选项
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 250px;
  margin-top: 16px;
  margin-bottom: 16px;
  img{
      width: 100%;
  }
}
</style>
