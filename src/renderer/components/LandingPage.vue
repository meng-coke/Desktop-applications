<template>
  <div id="wrapper">
    <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue"> -->
    <div class="topStyle">
      <img src="~@/assets/head.png" alt="" class="headImg">
      <div class="top_item">系统设置</div>
      <div class="top_item">人员分配</div>
      <div class="top_item">职务划分</div>
      <div class="top_item">临时通知</div>
      <div class="top_item">个人中心</div>
    </div>
    <main>
      <div class="left-side">
        <system-information></system-information>
      </div>

      <div class="right-side">
        
        <router-view></router-view>

      </div>
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      openBd () {
        console.log('dfsa')
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  .topStyle {
    width: 100%;
    height: 50px;
    border: 1px solid seagreen;
    display: flex;
    flex-direction: row;
    background-color: rgba(77, 80, 218, 0.9)
  }
  .headImg{
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .top_item{
    width: 70px;
    height: 50px;
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    margin-left: 10px;
    margin-right: 15px;
  }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    /* padding: 60px 80px; */
    width: 100%;
  }

  

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  

  .left-side {
    width: 130px;
    display: flex;
    flex-direction: column;
    border:1px solid seagreen;
  }

  .right-side{
    width: 100%;
    height: 100%;
    border:1px solid salmon;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
