<template>
  <div class="page-recommend">
    <IndexSwiper :loop="true"/>
    <div v-for="item in recommendList" :key="item.id" class="home-module">
      <p class="home-module-title">
        <span class="home-module-title-icon"></span>
        <span class="home-module-title-text">{{item.title}}</span>
      </p>
      <div
        v-for="childItem in item.items"
        :key="childItem.id"
        class="manga-item"
        :class="[{'manga-list-item-big' : childItem.type == 1}, {'manga-list-item-lr':childItem.type == 2},{'manga-list-item-l':childItem.type == 2}]"
      >
        <div class="manga-item-pic">
          <img height="180.00px" :alt="childItem.title" :src="childItem.pic_url" />
          <!---->
        </div>
        <p class="manga-list-item-name">{{childItem.title}}</p>
        <p class="manga-list-item-small">{{childItem.subtitle}}</p>
      </div>
      <!-- <div class="manga-item manga-list-item-lr manga-list-item-l">
        <div class="manga-item-pic">
          <img
            height="117.49px"
            alt="阿多尼斯"
            src="http://c-r7.ibuka.cn/auto/appRecom/202004171622_5e99674a1cca6.jpg"
          />
        </div>
        <p class="manga-list-item-name">阿多尼斯</p>
        <p class="manga-list-item-small">让世界屈服于她的脚下</p>
      </div>-->
    </div>
    <footer>
      <p class="footer-logo"></p>
      <router-link to="#">安装客户端</router-link>
      <p class="copy-right">Copyright©buka.cn</p>
    </footer>
    <div id="footer-arrow" class="fa fa-arrow-up buka-toup" @click="goTop" v-show="scrollTop>300">
      <i class="iconfont icon-jiantou-copy"></i>
    </div>
  </div>
</template>

<script>
import IndexSwiper from '../Components/indexSwiper'
import { getRecommend } from '@/api/cartoon'
import '@/assets/font/iconfont.css'
export default {
  name: 'Recommend',
  components: {
    IndexSwiper
  },
  data () {
    return {
      recommendList: [],
      scrollTop: 0
    }
  },
  methods: {
    goTop (e) {
      document.documentElement.scrollTop = 0
    },
    handleScroll () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.scrollTop = scrollTop
    }
  },
  created () {
    // fetch('/api/v3/home?page=1').then(res => res.json()).then(res => {
    //   console.log(res)
    // })
    getRecommend().then(res => {
      this.recommendList = res.datas.items.slice(1, 8)
    }).catch(err => {
      alert(err, '请求数据失败')
    })
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scored>
.page-recommend {
  padding: 4px;
  margin-top: 86px;
}
.home-module {
  font-size: 12px;
}

.home-module-title {
  margin: 0 0 8px 0;
  font-size: 14px;
  height: 17px;
  line-height: 17px;
}

.home-module-title span {
  float: left;
}

.home-module-title .home-module-title-icon {
  display: inline-block;
  border-radius: 3px;
  margin-top: 1px;
  width: 3px;
  height: 15px;
  background: #fe960e;
  margin-right: 10px;
}
.manga-item {
  display: inline-block;
  width: 48%;
  overflow: hidden;
  margin-bottom: 20px;
}
.manga-list-item-big {
  width: 100%;
}
.manga-list-item-l {
  margin-left: 6px;
  height: 180px;
  img {
    height: 120px;
  }
}
.manga-list-item-name {
  margin-top: 6px;
  font-size: 14px;
}
.manga-list-item-small {
  font-size: 12px;
  margin-top: 8px;
  color: #999;
}
.home-module-title {
  font-size: 16px;
}
footer {
  box-sizing: border-box;
  text-align: center;
  .footer-logo {
    margin: 10px auto 0;
    width: 145px;
    height: 30px;
    background-image: url("~@/assets/img/footer-logo.png");
    background-size: 145px 30px;
  }
  a {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 15px;
    color: #fff;
    background: #fe960e;
    margin: 0 auto;
  }
  .copy-right {
    font-size: 14px;
    color: #ccc;
    margin-top: 10px;
  }
}
.buka-toup {
  position: fixed;
  font-size: 25px;
  bottom: 15px;
  width: 30px;
  height: 30px;
  right: 15px;
  text-align: center;
  line-height: 30px;
  z-index: 999;
  color: #fff;
  border-radius: 50%;
  background: #fe960e;
  padding: 5px;
  opacity: 0.8;
  display: inline-block;
  .icon-jiantou-copy {
    font-size: 30px;
  }
}
</style>
