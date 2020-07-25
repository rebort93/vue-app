<template>
  <div class="goods-list">

    <div class="goods-item" v-for="item in list" :key="item.id" @click="getDetails(item.id)">
      <img :src="item.src" alt />
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥{{ item.np }}</span>
          <span class="old">¥{{ item.op }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.sell }}件</span>
        </p>
      </div>
    </div>

		<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
			pageIndex: 1,
      list: [
        { 
					id: 1, 
					title: '华为 HUAWEI nova 7 5G 6400万后置四摄 5G',
					src: require("../../img/goods/1.jpg"),
					np: 2999,
					op: 3299,
					sell: 1060,
				},
				{ 
					id: 2, 
					title: '华为 HUAWEI nova 5i Pro 超级夜景4800万AI四摄',
					src: require("../../img/goods/2.jpg"),
					np: 1799,
					op: 2099,
					sell: 898,
				},
				{ 
					id: 3, 
					title: '华为 HUAWEI P30 Pro 超感光徕卡四摄10倍混合变焦麒麟980芯片',
					src: require("../../img/goods/3.jpg"),
					np: 3588,
					op: 3988,
					sell: 679,
				},
				{ 
					id: 4, 
					title: '华为 HUAWEI nova 7 SE 5G 麒麟820 5G SoC芯片 6400万高清AI四摄',
					src: require("../../img/goods/4.jpg"),
					np: 2399,
					op: 2699,
					sell: 1262,
				},
				
				{ 
					id: 5, 
					title: '华为 HUAWEI nova 5i 后置AI四摄 极点全面屏 前置2400万高清摄像头',
					src: require("../../img/goods/5.jpg"),
					np: 1499,
					op: 1899,
					sell: 668,
				},
				
				{ 
					id: 6, 
					title: '荣耀20 4800万超广角AI四摄 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠',
					src: require("../../img/goods/6.jpg"),
					np: 1999,
					op: 2599,
					sell: 883,
				},
        
        
			],
			list1: [
        { 
					id: 7, 
					title: 'Apple iPhone 11 (A2223) 128GB 红色 移动联通电信4G手机 双卡双待',
					src: require("../../img/goods/7.jpg"),
					np: 5899,
					op: 6999,
					sell: 2688,
				},
				{ 
					id: 8, 
					title: ' Apple iPhone XR (A2108) 128GB 珊瑚色 移动联通电信4G手机 双卡双待',
					src: require("../../img/goods/8.jpg"),
					np: 4699,
					op: 5099,
					sell: 998,
				},
				{ 
					id: 9, 
					title: 'Apple iPhone 11 (A2223) 64GB 黑色 移动联通电信4G手机 双卡双待',
					src: require("../../img/goods/9.jpg"),
					np: 5499,
					op: 5899,
					sell: 3026,
				},
				{ 
					id: 10, 
					title: 'Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待',
					src: require("../../img/goods/10.jpg"),
					np: 9999,
					op: 10999,
					sell: 586,
				},
				
				{ 
					id: 11, 
					title: ' Apple iPhone XS Max (A2104) 64GB 银色 移动联通电信4G手机',
					src: require("../../img/goods/11.jpg"),
					np: 5699,
					op: 6099,
					sell: 996,
				},
				
				{ 
					id: 12, 
					title: 'Apple iPhone 8 Plus (A1864) 128GB 银色 移动联通电信4G手机 直播专享',
					src: require("../../img/goods/12.jpg"),
					np: 4399,
					op: 4699,
					sell: 686,
				},
        
        
			],
			list2: [
        { 
					id: 13, 
					title: 'OPPO K5 8GB+128GB 赛博金属 6400万超清四摄 VOOC闪充4.0',
					src: require("../../img/goods/13.jpg"),
					np: 1599,
					op: 1899,
					sell: 1035,
				},
				{ 
					id: 14, 
					title: ' OPPO A11x 4800万四摄 5000mAh大电池 8GB+128GB 香草薄荷',
					src: require("../../img/goods/14.jpg"),
					np: 1599,
					op: 1899,
					sell: 995,
				},
				{ 
					id: 15, 
					title: 'OPPO Reno2 Z 8G+128G 深海夜光 4800万夜拍四摄 VOOC闪充 炫彩升降',
					src: require("../../img/goods/15.jpg"),
					np: 1699,
					op: 2299,
					sell: 1256,
				},
				{ 
					id: 16, 
					title: 'OPPO A92s 120Hz畅感屏 前置双摄夜景自拍 侧边指纹 8GB+128GB  双模5G',
					src: require("../../img/goods/16.jpg"),
					np: 2199,
					op: 2699,
					sell: 786,
				},
				
				{ 
					id: 17, 
					title: ' OPPO A5 全面屏拍照手机 3GB+64GB 凝夜紫 全网通 移动联通电信4G',
					src: require("../../img/goods/17.jpg"),
					np: 799,
					op: 899,
					sell: 568,
				},
      ]
    };
  },
	// created() {
	// 	this.getMore();
	// },
  methods: {
    getMore() {
      this.pageIndex++;
      if (this.pageIndex == 2) {
        this.list = this.list.concat(this.list1);
      } else if (this.pageIndex == 3) {
        this.list = this.list.concat(this.list2);
      } 
		},
		getDetails(id) {
			this.$router.push({ name: 'goodsinfo', params: { id: id }});
		},
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 6px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
}
</style>