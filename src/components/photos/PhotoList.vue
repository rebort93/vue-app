<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 1 ? 'mui-active' : '']"
            v-for="item in cates"
            :key="item.id"
            @click="getPhotos(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">
            {{ item.title }}
            <div class="info-body">{{ item.des }}</div>
          </h1>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      cates: [
        { id: 1, title: "全部" },
        { id: 2, title: "时尚女装" },
        { id: 3, title: "家居生活" },
        { id: 4, title: "美妆洗护" },
        { id: 5, title: "精品男装" }
      ],
      list: ""
    };
  },
  // created() {
  // 	this.getAllCategory();
  // },
  created() {
    this.getPhotos(1);
  },
  mounted() {
    // 如果要操作元素，最好在 mounted 里
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getPhotos(id) {
      // for (var key in this.cates) {
      // 	var items = this.cates[key];
      // 	var id = items.id;
      // 	console.log(id);
      // }
      switch (id) {
        case parseInt(this.cates[0].id):
          this.list = [
            {
              id: 1,
              img_url: require("../../img/photos/1.jpg"),
              title: "戈蔓婷女装丨即刻选购女装时尚女装",
              des:
                "戈蔓婷女装是集女装品牌的设计、生产、营销、策划、加盟、互联网020模式为一体的时尚女装公司，戈蔓婷是其旗下经营主导品牌。总部位于南中国时尚创意之都——广州，依托集团的强大实力, 现已发展成为女装品牌高中低端全系皆有的风尚潮牌。"
            },
            {
              id: 2,
              img_url: require("../../img/photos/2.jpg"),
              title: "十八淑女坊丨为爱美丽，爱自信",
              des:
                "十八淑女坊致力于为性格开朗、阳光勤奋，有梦想的女孩打造不同场合的服饰需求，将淑女服饰的个性呈现出“十八变”的丰富多彩，以打造“中国知名淑女装品牌”为宗旨，延续了东方女性的甜美精致，将时尚潮流融入生活，缔造新淑女文化，演绎新时代经典"
            },
            {
              id: 3,
              img_url: require("../../img/photos/3.jpg"),
              title: "GMXY古木夕羊女装品牌",
              des:
                "这是一个关于友情和承诺的故事。很多年前，在一个夏天的黄昏，有四个儿时玩伴相约长大后要记得彼此间这份珍贵的情谊，还能相互牵挂，于是他们各取了自己名字中的一个字作为未来的约定，这个约定叫做古、木、夕、羊。"
            },
            {
              id: 4,
              img_url: require("../../img/photos/4.jpg"),
              title: "HOPESHOW女装品牌|“A slice of journey in your daily life",
              des:
                "HOPESHOW以25-40岁的都市女性为依托，设计符合她们生活方式且风格浪漫的全线产品，用丰富趣致的时装语言呈现新女性主义“知性、优雅、美而不张扬”的生活态度。"
            },
            {
              id: 5,
              img_url: require("../../img/photos/5.jpg"),
              title: "FIONA CHEN斐娜晨玩味女装",
              des:
                "FIONA CHEN斐娜晨，她热爱时尚，追求内心智慧与外在时尚表达完美统一，平时的她，纯真、活力、富有创造力；出席正式场合的她，优雅、知性，但细节给人惊喜"
            },
            {
              id: 6,
              img_url: require("../../img/photos/6.jpg"),
              title: "J03|充满艺术解构与轻摇滚态度的设计师品牌",
              des:
                "J03女装品牌真正做到回归本源。把玩不同面料的拼接，将实用性与概念感无间结合，追求无龄化，把随性的设计打造成独特的中国设计师品牌。J03女装跨越年龄界限、超越衣橱概念、追求无龄化的中国设计师品牌。"
            },
            {
              id: 7,
              img_url: require("../../img/photos/7.jpg"),
              title: "宜家中国|家居十大品牌",
              des:
                "宜家历史始于1943年瑞典，宜家创始人英格瓦•坎普拉德当时只有17岁。自那时起宜家集团已发展成为一个在全世界40个国家/地区拥有127,800个员工，年销售额212亿欧元的大型零售企业。"
            },
            {
              id: 8,
              img_url: require("../../img/photos/8.jpg"),
              title: "居然之家|中国著名家居品牌",
              des:
                "北京居然之家投资控股集团有限公司是以家居为主业，以家庭大消费为平台，业务范围涵盖室内设计和装修、家具建材销售、智慧物流、商业会展、金融服务、跨境电商、院线餐饮、儿童娱乐、体育健身、数码智能、居家养老、城市综合体开发等领域的大型商业连锁集团公司。"
            },
            {
              id: 9,
              img_url: require("../../img/photos/9.jpg"),
              title: "集美家居|中国十大定制家居品牌",
              des:
                "集美控股集团拥有“以人为本”的企业文化和“亲民惠商”的经营理念，秉承“团魂成就你我”的核心价值观，形成了“以关爱为主线的集美企 业文化。"
            },
            {
              id: 10,
              img_url: require("../../img/photos/10.jpg"),
              title: "Dior迪奥全新升级Dior Backstage系列",
              des:
                "我想通过Dior Backstage系列，与每个人分享我的专业知识。我的团队总在T台紧张而又忙碌的工作氛围中游走。每个化妆箱不仅是彩妆大师不可或缺的工具，也更应该能够满足所有女性的彩妆诉求。"
            },
            {
              id: 11,
              img_url: require("../../img/photos/11.jpg"),
              title: "欧芭莎Eubazaar美妆超市品牌",
              des:
                "欧芭莎化妆品集合全球进口美妆300多个品牌，完全承包了消费者的关注度，陈列了上千种各式产品，每天吸引大量年轻人在其中淘货。而且欧芭莎化妆品超市还引入了体验专区，可以让消费者更舒适、更全面的得到护理和体验。"
            },
            {
              id: 12,
              img_url: require("../../img/photos/12.jpg"),
              title: "EsteeLauder雅诗兰黛",
              des:
                "雅诗兰黛公司是全球领先的大型生产商和销售商。雅诗兰黛旗下的护肤，彩妆以及香氛产品都成为了科学与艺术完美结合的最佳范例。"
            },
            {
              id: 13,
              img_url: require("../../img/photos/13.jpg"),
              title: "Semir森马服饰",
              des:
                "中国休闲服饰行业的领先品牌，在全国拥有3000多家销售网点，拥有活力、时尚两大产品线，近千种款式。森马服饰始终站在年轻人的潮流尖端，倾心打造年轻、活力、时尚的潮流品牌。"
            },
            {
              id: 14,
              img_url: require("../../img/photos/14.jpg"),
              title: "GXG|一个为爱而尚的信念",
              des:
                "GXG的logo是由英文单词:go-getter mix glitterati“即：志在必得混合时髦的人”中字母组合，时尚的弧度“G”及线条感伶俐的“X”象征它简练优雅的独特style。"
            },
            {
              id: 15,
              img_url: require("../../img/photos/15.jpg"),
              title: "JOEONE九牧王",
              des:
                "九牧王是中国领先的商务休闲男装品牌企业，公司核心产品九牧王男裤及茄克多年来深受消费者的喜爱和好评。"
            }
          ];
          break;
        case parseInt(this.cates[1].id):
          this.list = [
            {
              id: 4,
              img_url: require("../../img/photos/4.jpg"),
              title: "HOPESHOW女装品牌|“A slice of journey in your daily life",
              des:
                "HOPESHOW以25-40岁的都市女性为依托，设计符合她们生活方式且风格浪漫的全线产品，用丰富趣致的时装语言呈现新女性主义“知性、优雅、美而不张扬”的生活态度。"
            },
            {
              id: 5,
              img_url: require("../../img/photos/5.jpg"),
              title: "FIONA CHEN斐娜晨玩味女装",
              des:
                "FIONA CHEN斐娜晨，她热爱时尚，追求内心智慧与外在时尚表达完美统一，平时的她，纯真、活力、富有创造力；出席正式场合的她，优雅、知性，但细节给人惊喜"
            },
            {
              id: 6,
              img_url: require("../../img/photos/6.jpg"),
              title: "J03|充满艺术解构与轻摇滚态度的设计师品牌",
              des:
                "J03女装品牌真正做到回归本源。把玩不同面料的拼接，将实用性与概念感无间结合，追求无龄化，把随性的设计打造成独特的中国设计师品牌。J03女装跨越年龄界限、超越衣橱概念、追求无龄化的中国设计师品牌。"
            }
          ];
          break;
        case parseInt(this.cates[2].id):
          this.list = [
            {
              id: 7,
              img_url: require("../../img/photos/7.jpg"),
              title: "宜家中国|家居十大品牌",
              des:
                "宜家历史始于1943年瑞典，宜家创始人英格瓦•坎普拉德当时只有17岁。自那时起宜家集团已发展成为一个在全世界40个国家/地区拥有127,800个员工，年销售额212亿欧元的大型零售企业。"
            },
            {
              id: 8,
              img_url: require("../../img/photos/8.jpg"),
              title: "居然之家|中国著名家居品牌",
              des:
                "北京居然之家投资控股集团有限公司是以家居为主业，以家庭大消费为平台，业务范围涵盖室内设计和装修、家具建材销售、智慧物流、商业会展、金融服务、跨境电商、院线餐饮、儿童娱乐、体育健身、数码智能、居家养老、城市综合体开发等领域的大型商业连锁集团公司。"
            },
            {
              id: 9,
              img_url: require("../../img/photos/9.jpg"),
              title: "集美家居|中国十大定制家居品牌",
              des:
                "集美控股集团拥有“以人为本”的企业文化和“亲民惠商”的经营理念，秉承“团魂成就你我”的核心价值观，形成了“以关爱为主线的集美企 业文化。"
            }
          ];
          break;
        case parseInt(this.cates[3].id):
          this.list = [
            {
              id: 10,
              img_url: require("../../img/photos/10.jpg"),
              title: "Dior迪奥全新升级Dior Backstage系列",
              des:
                "我想通过Dior Backstage系列，与每个人分享我的专业知识。我的团队总在T台紧张而又忙碌的工作氛围中游走。每个化妆箱不仅是彩妆大师不可或缺的工具，也更应该能够满足所有女性的彩妆诉求。"
            },
            {
              id: 11,
              img_url: require("../../img/photos/11.jpg"),
              title: "欧芭莎Eubazaar美妆超市品牌",
              des:
                "欧芭莎化妆品集合全球进口美妆300多个品牌，完全承包了消费者的关注度，陈列了上千种各式产品，每天吸引大量年轻人在其中淘货。而且欧芭莎化妆品超市还引入了体验专区，可以让消费者更舒适、更全面的得到护理和体验。"
            },
            {
              id: 12,
              img_url: require("../../img/photos/12.jpg"),
              title: "EsteeLauder雅诗兰黛",
              des:
                "雅诗兰黛公司是全球领先的大型生产商和销售商。雅诗兰黛旗下的护肤，彩妆以及香氛产品都成为了科学与艺术完美结合的最佳范例。"
            }
          ];
          break;
        case parseInt(this.cates[4].id):
          this.list = [
            {
              id: 13,
              img_url: require("../../img/photos/13.jpg"),
              title: "Semir森马服饰",
              des:
                "中国休闲服饰行业的领先品牌，在全国拥有3000多家销售网点，拥有活力、时尚两大产品线，近千种款式。森马服饰始终站在年轻人的潮流尖端，倾心打造年轻、活力、时尚的潮流品牌。"
            },
            {
              id: 14,
              img_url: require("../../img/photos/14.jpg"),
              title: "GXG|一个为爱而尚的信念",
              des:
                "GXG的logo是由英文单词:go-getter mix glitterati“即：志在必得混合时髦的人”中字母组合，时尚的弧度“G”及线条感伶俐的“X”象征它简练优雅的独特style。"
            },
            {
              id: 15,
              img_url: require("../../img/photos/15.jpg"),
              title: "JOEONE九牧王",
              des:
                "九牧王是中国领先的商务休闲男装品牌企业，公司核心产品九牧王男裤及茄克多年来深受消费者的喜爱和好评。"
            }
          ];
          break;
      }
      // this.list = [
      //       { id: 1, img_url: require("../../img/photos/1.jpg"), title: '戈蔓婷女装丨即刻选购女装时尚女装', des: '戈蔓婷女装是集女装品牌的设计、生产、营销、策划、加盟、互联网020模式为一体的时尚女装公司，戈蔓婷是其旗下经营主导品牌。总部位于南中国时尚创意之都——广州，依托集团的强大实力, 现已发展成为女装品牌高中低端全系皆有的风尚潮牌。'},
      //       { id: 2, img_url: require("../../img/photos/1.jpg") },
      //       { id: 3, img_url: require("../../img/photos/1.jpg") }
      //     ];
    }
  }
  // methods: {
  // 	getAllCategory() {
  // 		this.$http.get("api/getimgcategory").then(result => {
  // 			if (result.body.status === 0) {
  // 				this.cates = result.body.message;
  // 			}
  // 		})
  // 	}
  // }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  // width: 375px;
  // overflow: hidden;
  // margin-left: -20px;
  // margin-top: 40px;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    height: 420px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      vertical-align: middle;
    }

    .info {
      height: 120px;
      padding: 0.2em;

      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);

      .info-title {
        font-size: 16px;
      }
      .info-body {
        font-size: 14px;
        font-weight: normal;
        margin-top: 0.8em;
        line-height: 1.5em;
      }
    }
  }
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>