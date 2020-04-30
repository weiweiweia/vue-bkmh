<template>
  <div class="page-ranking">
    <ul>
      <li v-for="(item,index) in rankingList" :key="item.mid">
        <router-link to="#">
          <img :src="item.logo" alt />
          <h3>{{index+1}}.{{item.name}}</h3>
          <p>{{item.author}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRanking } from '@/api/cartoon'
export default {
  name: 'Ranking',
  data () {
    return {
      rankingList: []
    }
  },
  created () {
    getRanking()
      .then(res => {
        console.log(res)
        this.rankingList = res.datas.items
      })
      .catch(err => {
        alert(err, '请求数据失败')
      })
  }
}
</script>

<style lang="scss" scored>
.page-ranking {
  padding: 4px;
  margin-top: 100px;
  ul{
    display: flex;
    flex-wrap:wrap;
    li{
      width: 30%;
      margin-left: 10px;
      margin-bottom: 16px;
      img{
        width: 100%;
      }
      h3{
        font-size: 16px;
        margin-bottom: 4px;
      }
      p{
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>
