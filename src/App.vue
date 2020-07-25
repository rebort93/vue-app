<template>
  <div class="app-container">
    <!-- 顶部 header 区域 -->
    <mt-header fixed title="vue-app">
      <div slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!-- 中间的路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-gai" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-gai" to="/member">
        <span class="mui-icon mui-icon-person"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-gai" to="/shopcar">
        <span class="mui-icon car-img">
          <span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span>
          <img src="./img/car1.png" alt="" v-show="isShow">
          <img src="./img/car.png" alt="" v-show="!isShow">
        </span>
        <span class="mui-tab-label car">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-gai" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      isShow: false
    }
  },
  created() {
    this.flag = this.$route.path === '/home' ? false : true;
    this.isShow = this.$route.path === '/shopcar' ? true : false;
    
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // showCar() {
    //   if (this.$route.path === '/shopcar') {
    //     this.isShow = true
    //   }
    // }
  },
  watch: {
    '$route.path': function(newval) {
      if (newval === '/home') {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
    '$route.path': function(newval) {
      if (newval === '/shopcar') {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

// 改类名，解决 tabbar 点击无法切换的问题
.mui-bar-tab .mui-tab-item-gai.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-gai {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-gai .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-gai .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
#badge {
  z-index: 99;
}
.car-img {
  img {
    width: 28px;
    position: absolute;
    top: 2px;
    left: -4px;
  }
  
}
</style>