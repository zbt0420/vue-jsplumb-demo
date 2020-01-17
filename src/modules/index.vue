<template>
  <div class="main">
    <div class="title" ref="title">
      <div class="title-text" ref="titleText" style="left:0px;top:0px;">一个基于jsPlumb实现流程图的教学试demo</div>
    </div>
    <div class="tabs">
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo2" class="tabs-item">demo2</router-link>
      <router-link to="/index/demo3" class="tabs-item">demo3</router-link>
      <!-- <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>
      <router-link to="/index/demo1" class="tabs-item">demo1</router-link>-->
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      left: 0,
      top: 0
    }
  },
  computed: {},
  methods: {
    // 获取随机位置
    getRandomPosition() {
      let titleTextDom = this.$refs.titleText
      let titleDom = this.$refs.title
      let clineH = titleDom.offsetHeight - titleTextDom.offsetHeight
      let clineW = titleDom.offsetWidth - titleTextDom.offsetWidth
      setInterval(() => {
        let randomLeft = Math.floor(Math.random() * (0 - clineW) + clineW)
        let randomTop = Math.floor(Math.random() * (0 - clineH) + clineH)
        titleTextDom.style.left = randomLeft + 'px'
        titleTextDom.style.top = randomTop + 'px'
      }, 1000)
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.getRandomPosition()
    })
  }
}
</script>
<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    width: 100%;
    height: 100px;
    position: relative;
  }
  .title-text {
    cursor: pointer;
    position: absolute;
    width: 350px;
    height: 30px;
    line-height: 30px;
    transition: all 2s;
  }
  .tabs {
    width: 100%;
    height: 60px;
    display: flex;
    overflow: auto;
    .tabs-item {
      transition: all 1s;
      display: inline-block;
      margin: 10px;
      min-width: 100px;
      background: #179bff;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 6px;
      color: #fff;
      text-decoration: none;
    }
    :hover {
      background: #6ebffd;
    }
  }
  .tabs::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  .tabs::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  .tabs:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
  }
  .tabs::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
  }
  .tabs::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    background-color: white;
  }
  .tabs::-webkit-scrollbar-track:hover {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.01);
  }
  .content {
    flex: 1;
    padding: 20px;
  }
}
</style>
