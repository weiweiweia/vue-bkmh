<template>
  <div class="page-recommend">
    <IndexSwiper />
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
  </div>
</template>

<script>
import IndexSwiper from '../Components/indexSwiper'
import { getRecommend } from '@/api/cartoon'
export default {
  name: 'Recommend',
  components: {
    IndexSwiper
  },
  data () {
    return {
      recommendList: []
    }
  },
  created () {
    // fetch('/api/v3/home?page=1').then(res => res.json()).then(res => {
    //   console.log(res)
    // })
    getRecommend().then(res => {
      this.recommendList = res.datas.items.slice(1, 8)
    })
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
</style>
