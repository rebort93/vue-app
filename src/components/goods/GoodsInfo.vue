<template>
  <div class="goodsinfo-container">

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    

    <!-- 轮播 -->

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swipe :lunbotuList="lunbotu" :isfull="false"></swipe>
        </div>
      </div>
    </div>

    <!-- 购买 -->
    <div class="mui-card">
      <div class="mui-card-header" v-for="item in msg" :key="item.id">{{ item.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price" v-for="item in msg" :key="item.id">
            市场价:
            <del>¥{{ item.op }}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">¥{{ item.np }}</span>
          </p>
          <p class="count">购买数量:</p>

          <!-- 输入框 -->
          <p v-for="item in msg" :key="item.id">
            <numbox @getcount="getSelectedCount" :max="item.stock"></numbox>
          </p>

          <p class="buy-button">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 参数 -->

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" v-for="item in msg" :key="item.id">
          <p>商品货号：{{ item.num }}</p>
          <p>库存情况：{{ item.stock }}件</p>
          <p>上架时间：{{ item.add_time }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swipe from "../subcomponents/swipe.vue";
import numbox from "../subcomponents/numbox.vue"
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      msg: [],
      ballFlag: false, // 控制小球
      selectedCount: 1, // 默认买1个
    };
  },
  components: {
    swipe,
    numbox,
  },
  created() {
    this.getMsg();
  },
  methods: {
    getMsg() {
      switch (parseInt(this.id)) {
        case 1:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/1_1.jpg"), img: require("../../img/goods/1.jpg") },
            { id: 2, src: require("../../img/goods/1_2.jpg") },
            { id: 3, src: require("../../img/goods/1_3.jpg") },
          ];
          this.msg = [
            {
              title: "华为 HUAWEI nova 7 5G 6400万后置四摄 5G",
              num: "100012749268",
              stock: "1060",
              add_time: "2019年11月",
              np: "2999",
              op: "3299",
            },
          ];
          break;
        case 2:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/2_1.jpg"), img: require("../../img/goods/2.jpg") },
            { id: 2, src: require("../../img/goods/2_2.jpg") },
            { id: 3, src: require("../../img/goods/2_3.jpg") },
          ];
          this.msg = [
            {
              title: "华为 HUAWEI nova 5i Pro 超级夜景4800万AI四摄",
              num: "100007001634",
              stock: "898",
              add_time: "2019年7月",
              np: "1799",
              op: "2099",
            },
          ];
          break;
        case 3:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/3_1.jpg"), img: require("../../img/goods/3.jpg") },
            { id: 2, src: require("../../img/goods/3_2.jpg") },
            { id: 3, src: require("../../img/goods/3_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "华为 HUAWEI P30 Pro 超感光徕卡四摄10倍混合变焦麒麟980芯片",
              num: "100004404944",
              stock: "679",
              add_time: "2019年4月",
              np: "3588",
              op: "3988",
            },
          ];
          break;
        case 4:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/4_1.jpg"), img: require("../../img/goods/4.jpg") },
            { id: 2, src: require("../../img/goods/4_2.jpg") },
            { id: 3, src: require("../../img/goods/4_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "华为 HUAWEI nova 7 SE 5G 麒麟820 5G SoC芯片 6400万高清AI四摄",
              num: "100012749280",
              stock: "1262",
              add_time: "2019年4月",
              np: "2399",
              op: "2699",
            },
          ];
          break;
        case 5:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/5_1.jpg"), img: require("../../img/goods/5.jpg") },
            { id: 2, src: require("../../img/goods/5_2.jpg") },
            { id: 3, src: require("../../img/goods/5_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "华为 HUAWEI nova 5i 后置AI四摄 极点全面屏 前置2400万高清摄像头",
              num: "100006363052",
              stock: "668",
              add_time: "2019年6月",
              np: "1499",
              op: "1899",
            },
          ];
          break;
        case 6:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/6_1.jpg"), img: require("../../img/goods/6.jpg") },
            { id: 2, src: require("../../img/goods/6_2.jpg") },
            { id: 3, src: require("../../img/goods/6_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "荣耀20 4800万超广角AI四摄 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠",
              num: "100005603522",
              stock: "883",
              add_time: "2019年6月",
              np: "1999",
              op: "2599",
            },
          ];
          break;
        case 7:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/7_1.jpg"), img: require("../../img/goods/7.jpg") },
            { id: 2, src: require("../../img/goods/7_2.jpg") },
            { id: 3, src: require("../../img/goods/7_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "Apple iPhone 11 (A2223) 128GB 红色 移动联通电信4G手机 双卡双待",
              num: "100008348532",
              stock: "2688",
              add_time: "2019年9月",
              np: "5899",
              op: "6999",
            },
          ];
          break;
        case 8:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/8_1.jpg"), img: require("../../img/goods/8.jpg") },
            { id: 2, src: require("../../img/goods/8_2.jpg") },
            { id: 3, src: require("../../img/goods/8_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "Apple iPhone XR (A2108) 128GB 珊瑚色 移动联通电信4G手机 双卡双待",
              num: "100000177758",
              stock: "998",
              add_time: "2018年10月",
              np: "4699",
              op: "5099",
            },
          ];
          break;
        case 9:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/9_1.jpg"), img: require("../../img/goods/9.jpg") },
            { id: 2, src: require("../../img/goods/9_2.jpg") },
            { id: 3, src: require("../../img/goods/9_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "Apple iPhone 11 (A2223) 64GB 黑色 移动联通电信4G手机 双卡双待",
              num: "100008348542",
              stock: "3026",
              add_time: "2019年9月",
              np: "5499",
              op: "5899",
            },
          ];
          break;
        case 10:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/10_1.jpg"), img: require("../../img/goods/10.jpg") },
            { id: 2, src: require("../../img/goods/10_2.jpg") },
            { id: 3, src: require("../../img/goods/10_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待",
              num: "100008348536",
              stock: "586",
              add_time: "2019年9月",
              np: "9999",
              op: "10999",
            },
          ];
          break;
        case 11:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/11_1.jpg"), img: require("../../img/goods/11.jpg") },
            { id: 2, src: require("../../img/goods/11_2.jpg") },
            { id: 3, src: require("../../img/goods/11_3.jpg") },
          ];
          this.msg = [
            {
              title: "Apple iPhone XS Max (A2104) 64GB 银色 移动联通电信4G手机",
              num: "100000287117",
              stock: "996",
              add_time: "2018年9月",
              np: "5699",
              op: "6099",
            },
          ];
          break;
        case 12:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/12_1.jpg"), img: require("../../img/goods/12.jpg") },
            { id: 2, src: require("../../img/goods/12_2.jpg") },
            { id: 3, src: require("../../img/goods/12_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "Apple iPhone 8 Plus (A1864) 128GB 银色 移动联通电信4G手机 直播专享",
              num: "100008927194",
              stock: "686",
              add_time: "2019年9月",
              np: "4399",
              op: "4699",
            },
          ];
          break;
        case 13:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/13_1.jpg"), img: require("../../img/goods/13.jpg") },
            { id: 2, src: require("../../img/goods/13_2.jpg") },
            { id: 3, src: require("../../img/goods/13_3.jpg") },
          ];
          this.msg = [
            {
              title: "OPPO K5 8GB+128GB 赛博金属 6400万超清四摄 VOOC闪充4.0",
              num: "100004918013",
              stock: "1035",
              add_time: "2019年10月",
              np: "1599",
              op: "1899",
            },
          ];
          break;
        case 14:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/14_1.jpg"), img: require("../../img/goods/14.jpg") },
            { id: 2, src: require("../../img/goods/14_2.jpg") },
            { id: 3, src: require("../../img/goods/14_3.jpg") },
          ];
          this.msg = [
            {
              title: "OPPO A11x 4800万四摄 5000mAh大电池 8GB+128GB 香草薄荷",
              num: "100009122716",
              stock: "995",
              add_time: "2019年9月",
              np: "1599",
              op: "1899",
            },
          ];
          break;
        case 15:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/15_1.jpg"), img: require("../../img/goods/15.jpg") },
            { id: 2, src: require("../../img/goods/15_2.jpg") },
            { id: 3, src: require("../../img/goods/15_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "OPPO Reno2 Z 8G+128G 深海夜光 4800万夜拍四摄 VOOC闪充 炫彩升降",
              num: "100009289576",
              stock: "1256",
              add_time: "2019年10月",
              np: "1699",
              op: "2299",
            },
          ];
          break;
        case 16:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/16_1.jpg"), img: require("../../img/goods/16.jpg") },
            { id: 2, src: require("../../img/goods/16_2.jpg") },
            { id: 3, src: require("../../img/goods/16_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "OPPO A92s 120Hz畅感屏 前置双摄夜景自拍 侧边指纹 8GB+128GB  双模5G",
              num: "100012717834",
              stock: "786",
              add_time: "2019年9月",
              np: "2199",
              op: "2699",
            },
          ];
          break;
        case 17:
          this.lunbotu = [
            { id: 1, src: require("../../img/goods/17_1.jpg"), img: require("../../img/goods/17.jpg") },
            { id: 2, src: require("../../img/goods/17_2.jpg") },
            { id: 3, src: require("../../img/goods/17_3.jpg") },
          ];
          this.msg = [
            {
              title:
                "OPPO A5 全面屏拍照手机 3GB+64GB 凝夜紫 全网通 移动联通电信4G",
              num: "100004655005",
              stock: "568",
              add_time: "2018年7月",
              np: "799",
              op: "899",
            },
          ];
          break;
      }
    },
    goDesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    addToShopCar() {
      this.ballFlag = !this.ballFlag;
      // 要保存到 vuex store中的数据
      var goodsinfo = {
        id : this.id,
        title: this.msg[0].title,
        count: this.selectedCount,
        price: this.msg[0].np,
        img: this.lunbotu[0].img,
        selected: true,
      };

      this.$store.commit('addToCar', goodsinfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;

      // 获取小球在页面的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document.getElementById('badge').getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all .6s cubic-bezier(.12,-0.21,.87,.04)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count) {
      this.selectedCount = count;
      // console.log(this.selectedCount); 
    }
  },
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
}

// .buy {
// 	float: left;
// 	margin-right: 10px;
// }
.count {
  margin-top: 12px;
}
.mui-numbox {
  // height: 80%;
  position: absolute;
  top: 42px;
  left: 85px;
}
.buy-button {
  margin-top: 16px;
}
// .mt-button::before {
// 	content: '';
// 	display: block;
// 	height: 0;
// 	clear: both;
// }

.mui-card-footer {
  display: block;
  button {
    margin: 15px 0;
  }
}

.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 88;
  top: 402px;
  left: 146px;
}
</style>