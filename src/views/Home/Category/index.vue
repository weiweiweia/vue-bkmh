<template>
  <div class="page-category">
    <ul>
      <li>
        <img src="http://i-cdn.ibuka.cn/manga/group/20190926114531_5d8c345bcf314.jpg" alt />
        <p>最近更新</p>
      </li>
      <li>
        <img src="http://i-cdn.ibuka.cn/manga/group/20190926142249_5d8c5939ad274.jpg" alt />
        <p>今日热榜</p>
      </li>
      <li>
        <img src="http://i-cdn.ibuka.cn/logo/group/20170103144735_586b49070de22.png" alt />
        <p>已完结</p>
      </li>
      <li>
        <img src="http://i-cdn.ibuka.cn/manga/group/20190926142249_5d8c5939ad274.jpg" alt />
        <p>高分精选</p>
      </li>
      <li>
        <img src="http://i-cdn.ibuka.cn/manga/group/20190926142249_5d8c5939ad274.jpg" alt />
        <p>漫展周边</p>
      </li>
      <li>
        <img src="http://i-cdn.ibuka.cn/manga/group/20190926114531_5d8c345bcf314.jpg" alt />
        <p>视频解锁</p>
      </li>
      <li>
        <img src="http://i-cdn.ibuka.cn/manga/group/20190926112008_5d8c2e6851a30.jpg" alt />
        <p>付费漫画</p>
      </li>
            <li>
        <img src="http://i-cdn.ibuka.cn/manga/group/20190926115407_5d8c365f92c4e.png" alt />
        <p>付费漫画</p>
      </li>
            <li>
        <img src="http://i-cdn.ibuka.cn/manga/group/20190926112351_5d8c2f479a958.jpg" alt />
        <p>付费漫画</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Category'
}
</script>

<style lang="scss" scoped>
.page-category {
  margin-top: 100px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      width: 20%;
      margin: 10px 10px;
      img {
        width: 100%;
        border-radius: 50%;
      }
      p {
        font-size: 16px;
        text-align: center;
      }
    }
  }
}
</style>
