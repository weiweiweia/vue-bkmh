<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
        <img :src="item.pic_url" alt />
      </div>
      <!-- <div class="swiper-slide">
          <img src="http://c-r7.ibuka.cn/auto/appRecom/202004231806_5ea168a644114.jpg" alt="">
      </div>-->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 引入swiper的核心和样式
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import { getRecommend } from '@/api/cartoon'

export default {
  name: 'IndexSwiper',
  data () {
    return {
      swiperList: []
    }
  },
  methods: {
    initSwiper () {
      /*eslint-disable */
        new Swiper(this.$refs.swiper, {
          /* eslint-enable */
        loop: true, // 循环模式选项
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
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
  },
  created () {
    getRecommend().then(res => {
      this.swiperList = res.datas.items[0].items
    })
  },
  mounted () {

  },
  updated () {
    this.initSwiper()
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 250px;
  margin-top: 16px;
  margin-bottom: 16px;
  img {
    width: 100%;
  }
}
</style>
