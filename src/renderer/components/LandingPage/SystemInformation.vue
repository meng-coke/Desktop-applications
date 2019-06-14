<template>
  <div>
    <div class="items">
      <div class="item">
        <div class="name">配置管理</div>
      </div>
      <div class="item">
        <div class="name">权限管理</div>
      </div>
      <div class="item">
        <div class="name">人员管理</div>
      </div>
      <div class="item">
        <div class="name">数据统计</div>
      </div>
      <div class="item">
        <div class="name">数据分析</div>
      </div>
      <div class="item">
        <div class="name">通知权限</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        electron: process.versions.electron,
        name: this.$route.name,
        node: process.versions.node,
        path: this.$route.path,
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    }
  }
</script>

<style scoped>
  .title {
    color: #888;
    font-size: 18px;
    font-weight: initial;
    letter-spacing: .25px;
    margin-top: 10px;
  }

  .items { 
    margin-top: 8px; 

  }

  .item {
    display: flex;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 100px;
  }

  .item .name {
    width: 100px;
    color: #6a6a6a;
    text-align: center;
  }

  .item .value {
    color: #35495e;
    font-weight: bold;
  }
</style>
