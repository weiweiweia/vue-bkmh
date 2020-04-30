<template>
  <div class="page-search">
    <div id="root" style="overflow: visible;">
      <section class="page-search">
        <!---->
        <div class="search-top">
          <span class="search-top-back" @click="back">
            <i class="fa fa-angle-left">←</i>
          </span>
          <div class="search-top-input">
            <i data-v-0d666cae aria-hidden="true" class="search-top-icon fa fa-search"></i>
            <input type="text" v-model="searchVal" placeholder="漫画 | 作者 | 资讯 | 漫展" />
            <!---->
            <!---->
            <div class="search-top-tip" v-show="searchVal">
              <ul>
                <router-link
                  class="tip-item"
                  v-for="item in searchResult"
                  :key="item"
                  @click.native="handleClick(item)"
                  to="/searchresult"
                >{{item}}</router-link>
              </ul>
            </div>
          </div>
          <router-link
            class="search-top-btn"
            @click.native="handleClick(searchVal)"
            to="/searchresult"
          >搜索</router-link>
        </div>
        <div class="search-default">
          <div class="search-hot-box">
            <p data-v-9edab9cc class="search-hot-key-title">热门搜索</p>
            <p data-v-9edab9cc>
              <span class="search-hot-key">我家大师兄脑子有坑</span>
              <span class="search-hot-key">英雄？我早就不当了</span>
              <span class="search-hot-key">绝世武神</span>
              <span class="search-hot-key">当神不让</span>
              <span class="search-hot-key">非人哉</span>
              <span class="search-hot-key">长歌行</span>
              <span class="search-hot-key">百合姬</span>
              <span class="search-hot-key">纯情丫头火辣辣</span>
              <span class="search-hot-key">伊藤润二</span>
              <span class="search-hot-key">日常幻想指南</span>
              <span class="search-hot-key">微微一笑很倾城</span>
              <span class="search-hot-key">妖神记</span>
              <span class="search-hot-key">凤求凰</span>
            </p>
          </div>
          <div class="search-history" v-show="searchHistory != []">
            <p class="search-title">搜索历史</p>
            <p class="history-item" v-for="item in searchHistory" :key="item">
              <i class="fa fa-clock-o"></i>
              <span>{{item}}</span>
            </p>
          </div>
        </div>
        <!---->
      </section>
    </div>
  </div>
</template>

<script>
import { searchIndex } from '@/api/cartoon.js'
import qs from 'qs'
export default {
  name: 'Search',
  data () {
    return {
      searchVal: '',
      // 历史搜索记录
      searchHistory: this.getSearch(),
      searchResult: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    // 报存最近搜索
    // @param {string} 搜索关键字
    saveSearch (keyword) {
      // 取出之前存的内容
      let tmp = window.localStorage.getItem('search')
      // 判断是否存在
      if (!tmp) {
        tmp = []
      } else {
        tmp = JSON.parse(tmp)
      }
      // 判断 keyword 是否已经在 tmp 中存在
      if (tmp.includes(keyword)) {
        return
      }
      // 讲keyword追加到tmp数组中
      tmp.push(keyword)
      // 将tmp存储
      window.localStorage.setItem('search', JSON.stringify(tmp))
    },
    /**
     * 取出最近搜索
     */
    getSearch () {
      const tmp = window.localStorage.getItem('search')
      if (!tmp) {
        return []
      } else {
        return JSON.parse(tmp)
      }
    },
    handleClick (keyword) {
      console.log(keyword)
      // 保存数据到本地存储
      this.saveSearch(keyword)
    },
    // 搜索框输入内容时处理
    searchIndex () {
      const tmp = qs.stringify({ key: this.searchVal })
      searchIndex(tmp)
        .then(res => {
          this.searchResult = res.datas
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    searchVal (newVal, oldVal) {
      // 防抖
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.searchIndex()
      }, 300)
    }
  }
}
</script>

<style>
#root {
  font-size: 14px;
  width: 100%;
  max-width: 540px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.search-result {
  padding: 2% 0;
  overflow: hidden;
}

.search-default {
  padding: 2%;
}

.search-hot-box .search-hot-key-title,
.search-result .search-hot-key-title,
.search-tip .search-hot-key-title {
  color: #999;
  padding: 10px 0;
}

section {
  margin: 0 auto;
}

.search-top {
  height: 40px;
  line-height: 40px;
  padding: 2%;
  border-bottom: 1px solid #f1f1f1;
}

.search-top-input {
  position: relative;
  background: #e4e5e7;
  height: 40px;
  width: 71%;
  float: left;
  border-radius: 3px;
}

.search-top-input .search-top-icon {
  display: inline-block;
  width: 12%;
  text-align: center;
  font-size: 18px;
  color: #999;
}

.search-top-input input {
  width: 86%;
  display: inline-block;
  border: none;
  font-size: 15px;
  background: #e4e5e7;
  height: 40px;
  padding: 0 5px;
  box-sizing: border-box;
  border-radius: 3px;
}

.search-top-input .search-top-close {
  position: absolute;
  display: block;
  width: 15%;
  top: 2px;
  text-align: center;
  line-height: 35px;
  right: 0;
  font-size: 20px;
  color: #fe960e;
}

.search-top-back,
.search-top-btn,
.search-top-commonstyle {
  text-align: center;
  border-radius: 3px;
  height: 40px;
  line-height: 40px;
  float: left;
}

.search-top-btn {
  color: #999;
  font-size: 15px;
  background: #fe960e;
  color: #fff;
  width: 18%;
  float: right;
}

.search-top-back {
  color: #999;
  font-size: 25px;
  width: 9%;
}

.search-top-tip {
  position: absolute;
  top: 45px;
  background: #fff;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.3);
  left: 0;
  width: 100%;
  z-index: 99;
  color: #999;
}

.search-top-tip i {
  width: 12%;
  text-align: center;
}

.search-top-tip li {
  padding: 0 3%;
}

.search-top-tip li:hover {
  background: #999;
  color: #fff;
}

.search-hot-key {
  display: inline-block;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 12px;
  margin: 5px;
}

.search-history {
  margin-top: 30px;
}

.search-history .search-title {
  color: #999;
  margin-bottom: 10px;
}

.search-history .fa-clock-o {
  width: 8%;
  text-align: center;
}

.search-history .history-item {
  overflow: hidden;
  color: #999;
  font-size: 15px;
  padding: 10px 0;
}

.search-history .history-item i,
.search-history .history-item span {
  float: left;
}

.search-item {
  width: 30.6%;
  float: left;
  margin: 0 0 3% 2%;
}

.search-item img {
  width: 100%;
  display: block;
}

.search-item p {
  margin-top: 5px;
  height: 32px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
