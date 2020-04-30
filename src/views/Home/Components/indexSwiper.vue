<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
        <img :src="item.pic_url" alt />
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
import { getRecommend } from '@/api/cartoon'

export default {
  name: 'IndexSwiper',
  data () {
    return {
      swiperList: []
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    initSwiper () {
      /*eslint-disable */
      new Swiper(this.$refs.swiper, {
        /* eslint-enable */
        loop: this.loop, // 循环模式选项
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
    }).catch(err => {
      console.log(err)
    })
  },
  mounted () {},
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
