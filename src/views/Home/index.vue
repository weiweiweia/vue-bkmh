<template>
  <div class="page-home">
    <IndexHeader/>
    <router-view />
  </div>
</template>

<script>
import IndexHeader from './Components/indexHeader'
export default {
  name: 'Home',
  components: {
    IndexHeader
  }
}
</script>

<style lang="scss" scored>
.page-home {
  height: 100%;

}
</style>
