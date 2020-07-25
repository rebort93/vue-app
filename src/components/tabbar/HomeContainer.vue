<template>
  <div>
    <swipe :lunbotuList="lunbotuList" :isfull="true"></swipe>

    <p class="notice">
      <img src="../../img/notice.png" alt />&nbsp;最新通知：
      <span>TikTok计划未来三年在中国增加约10000个......</span>
    </p>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../img/n1.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../img/n2.png" />
          <div class="mui-media-body">图文分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../img/n3.png" />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/feedback">
          <img src="../../img/n4.png" />
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/purse">
          <img src="../../img/n5.png" />
          <div class="mui-media-body">我的卡包</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/concact">
          <img src="../../img/menu6_1.png" />
          <div class="mui-media-body">联系作者</div>
        </router-link>
      </li>
    </ul>

    <hr class="solid" />

    <div class="recommend-goods"><h4 >推荐好物</h4><span class="more" @click="goList">更多&nbsp;></span></div>
    <hr class="solid">
    <div class="phone-img">
      <img src="../../img/goods/1.jpg" alt="" @click="goInfo(id = 1)">
      <img src="../../img/goods/2.jpg" alt="" @click="goInfo(id = 2)">
      <img src="../../img/goods/3.jpg" alt="" @click="goInfo(id = 3)">
    </div>
    <p class="bottom-line">--------------- 人家是有底线的 ---------------</p>
  </div>
</template>

<script>
// import { Toast } from 'mint-ui' ;
import swipe from "../subcomponents/swipe.vue";
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      id: this.$route.params.id,

      lunbotuList: [
        { id: 1, src: require("../../img/1.jpg") },
        { id: 2, src: require("../../img/2.jpg") },
        { id: 3, src: require("../../img/3.jpg") },
      ], // 保存轮播图的数组
    };
  },
  components: {
    swipe,
  },
  methods: {
    goInfo(id) {
      this.$router.push({ name: "goodsinfo", params: { id } });
    },
    goList() {
      this.$router.push({name: "goodslist"})
    }
  },
  // created() {
  // 	this.getSwipe();
  // },
  // methods: {
  // 	getSwipe() {
  // 		this.$http.get('http://localhost/demo/').then( result => {
  // 			// console.log(result.body);
  // 			if (result.body.status === 0) {
  // 				this.lunbotuList = result.body.message;
  // 			} else {
  // 				Toast('加载轮播图失败');
  // 			}
  // 		})
  // 	}
  // },
};
</script>>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 14px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.solid {
  opacity: 0.4;
}
.notice {
  display: flex;
  align-items: center;
  margin: 8px;
  font-size: 12px;
  color: rgb(86, 116, 252);
  img {
    width: 16px;
  }
  span {
    margin-left: 6px;
    color: rgb(48, 48, 48);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.recommend-goods {
  font-size: 14px;
  margin: 6px 0 6px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    // font-weight: normal;
    opacity: .9;
  }
}
.more {
  margin-right: 20px;
  opacity: .4;
}
.phone-img {
  display: flex;
  justify-content: space-around;
  img {
    width: 30%;
    
  }
}
.bottom-line {
  text-align: center;
  margin: 20px;
  opacity: .6;
}
</style>