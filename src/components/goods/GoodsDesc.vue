<template>
  <div class="goodsdesc-container">
    <h3>{{ info.title }}</h3>

    <!-- <hr /> -->

    <div class="content">
			<img :src="info.src" alt="">
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      info: {
        title: "",
        src: ""
      }
    };
	},
	created() {
		this.getGoodsDesc();
	},
  methods: {
    getGoodsDesc() {
      switch (parseInt(this.id)) {
        case 1:
					this.info.title = "华为 HUAWEI nova 7 5G 6400万后置四摄 5G";
					this.info.src = require('../../img/desc/1.jpg');
				break;
				case 2:
					this.info.title = "华为 HUAWEI nova 5i Pro 超级夜景4800万AI四摄";
					this.info.src = require('../../img/desc/2.jpg');
				break;
				case 3:
					this.info.title = "华为 HUAWEI P30 Pro 超感光徕卡四摄10倍混合变焦麒麟980芯片";
					this.info.src = require('../../img/desc/3.jpg');
				break;
				case 4:
					this.info.title = "华为 HUAWEI nova 7 SE 5G 麒麟820 5G SoC芯片 6400万高清AI四摄";
					this.info.src = require('../../img/desc/4.jpg');
				break;
				case 5:
					this.info.title = "华为 HUAWEI nova 5i 后置AI四摄 极点全面屏 前置2400万高清摄像头";
					this.info.src = require('../../img/desc/5.jpg');
				break;
				case 6:
					this.info.title = "荣耀20 4800万超广角AI四摄 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠";
					this.info.src = require('../../img/desc/6.jpg');
				break;
				case 7:
					this.info.title = "Apple iPhone 11 (A2223) 128GB 红色 移动联通电信4G手机 双卡双待";
					this.info.src = require('../../img/desc/7.jpg');
				break;
				case 8:
					this.info.title = "Apple iPhone XR (A2108) 128GB 珊瑚色 移动联通电信4G手机 双卡双待";
					this.info.src = require('../../img/desc/8.jpg');
				break;
				case 9:
					this.info.title = "Apple iPhone 11 (A2223) 64GB 黑色 移动联通电信4G手机 双卡双待";
					this.info.src = require('../../img/desc/9.jpg');
				break;
				case 10:
					this.info.title = "Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待";
					this.info.src = require('../../img/desc/10.jpg');
				break;
				case 11:
					this.info.title = "Apple iPhone XS Max (A2104) 64GB 银色 移动联通电信4G手机";
					this.info.src = require('../../img/desc/11.jpg');
				break;
				case 12:
					this.info.title = "Apple iPhone 8 Plus (A1864) 128GB 银色 移动联通电信4G手机 直播专享";
					this.info.src = require('../../img/desc/12.jpg');
				break;
				case 13:
					this.info.title = "OPPO K5 8GB+128GB 赛博金属 6400万超清四摄 VOOC闪充4.0";
					this.info.src = require('../../img/desc/13.jpg');
				break;
				case 14:
					this.info.title = "OPPO A11x 4800万四摄 5000mAh大电池 8GB+128GB 香草薄荷";
					this.info.src = require('../../img/desc/14.jpg');
				break;
				case 15:
					this.info.title = "OPPO Reno2 Z 8G+128G 深海夜光 4800万夜拍四摄 VOOC闪充 炫彩升降";
					this.info.src = require('../../img/desc/15.jpg');
				break;
				case 16:
					this.info.title = "OPPO A92s 120Hz畅感屏 前置双摄夜景自拍 侧边指纹 8GB+128GB  双模5G";
					this.info.src = require('../../img/desc/16.jpg');
				break;
				case 17:
					this.info.title = "OPPO A5 全面屏拍照手机 3GB+64GB 凝夜紫 全网通 移动联通电信4G";
					this.info.src = require('../../img/desc/17.jpg');
				break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.goodsdesc-container {
	padding: 4px;
	h3 {
		font-size: 16px;
		color: #226aff;
		text-align: center;
		margin: 15px 0;
	}
}
.content {
	img {
		width: 100%;
	}
	
}
</style>>