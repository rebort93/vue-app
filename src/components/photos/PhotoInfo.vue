<template>
  <div class="photoinfo-container">
    <h3>{{ this.photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ this.photoinfo.add_time }}</span>
      <span>点击：{{ this.photoinfo.click }}次</span>
    </p>
    <hr />
    <!-- 缩略图 -->
    <div class="thumbs">
      <vue-preview :slides="list" class="imgPrev"></vue-preview>
    </div>

    <div class="content" v-html="this.photoinfo.content"></div>

    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {
        title: "",
        add_time: "",
        click: 0,
        content: ""
      },
      list: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      switch (parseInt(this.id)) {
        case 1:
          this.photoinfo.title = "戈蔓婷女装丨即刻选购女装时尚女装";
          this.photoinfo.add_time = "2019-07-21 16:56";
          this.photoinfo.click = 326;
          this.photoinfo.content =
            '<p style="text-indent: 2em">时尚需要缪斯女神的青睐，需要独立设计师对生活的深邃解读，方能带给人们非凡独特时尚感受。因此，在公司成立之初，就确立了“自主设计、标准化生产、品质供货”的发展方向，公司派出多名专业人员远赴欧洲、美国、日本、韩国等地进行时尚采风，并与迪奥、香奈儿、爱马仕、范思哲等奢侈品大牌有合作的独立设计工作室建立了专项设计业务，从而在设计上保证了“让品牌更亲民，让奢华更亲近”的前沿理念，专注并致力于女性美丽事业，弘扬美的理念，传递美之精神，力求让每位女性通过着装提高内心的强大能量，开启不一样的精彩人生。</p>';
          break;
        case 2:
          this.photoinfo.title = "戈十八淑女坊丨为爱美丽，爱自信";
          this.photoinfo.add_time = "2019-07-20 17:15";
          this.photoinfo.click = 95;
          this.photoinfo.content =
            '<p style="text-indent: 2em">十八淑女坊致力于为性格开朗、阳光勤奋，有梦想的女孩打造不同场合的服饰需求，将淑女服饰的个性呈现出“十八变”的丰富多彩，以打造“中国知名淑女装品牌”为宗旨，延续了东方女性的甜美精致，将时尚潮流融入生活，缔造新淑女文化，演绎新时代经典。</p>';
          break;
        case 3:
          this.photoinfo.title = "GMXY古木夕羊女装品牌";
          this.photoinfo.add_time = "2019-07-20 17:15";
          this.photoinfo.click = 648;
          this.photoinfo.content =
            '<p style="text-indent: 2em">这是一个关于友情和承诺的故事。很多年前，在一个夏天的黄昏，有四个儿时玩伴相约长大后要记得彼此间这份珍贵的情谊，还能相互牵挂，于是他们各取了自己名字中的一个字作为未来的约定，这个约定叫做古、木、夕、羊。</p>';
          break;
        case 4:
          this.photoinfo.title =
            "HOPESHOW女装品牌";
          this.photoinfo.add_time = "2019-07-16 15:38";
          this.photoinfo.click = 253;
          this.photoinfo.content =
            '<p style="text-indent: 2em">HOPESHOW以25-40岁的都市女性为依托，设计符合她们生活方式且风格浪漫的全线产品，用丰富趣致的时装语言呈现新女性主义“知性、优雅、美而不张扬”的生活态度。</p>';
          break;
        case 5:
          this.photoinfo.title = "FIONA CHEN斐娜晨玩味女装";
          this.photoinfo.add_time = "2019-07-15 17:45";
          this.photoinfo.click = 126;
          this.photoinfo.content =
            '<p style="text-indent: 2em">FIONA CHEN斐娜晨，她热爱时尚，追求内心智慧与外在时尚表达完美统一，平时的她，纯真、活力、富有创造力；出席正式场合的她，优雅、知性，但细节给人惊喜</p>';
          break;
        case 6:
          this.photoinfo.title = "J03|充满艺术解构与轻摇滚态度的设计师品牌";
          this.photoinfo.add_time = "2019-07-15 17:15";
          this.photoinfo.click = 125;
          this.photoinfo.content =
            '<p style="text-indent: 2em">J03女装品牌真正做到回归本源。把玩不同面料的拼接，将实用性与概念感无间结合，追求无龄化，把随性的设计打造成独特的中国设计师品牌。J03女装跨越年龄界限、超越衣橱概念、追求无龄化的中国设计师品牌。</p>';
          break;
        case 7:
          this.photoinfo.title = "宜家中国|家居十大品牌";
          this.photoinfo.add_time = "2019-07-14 16:42";
          this.photoinfo.click = 253;
          this.photoinfo.content =
            '<p style="text-indent: 2em">宜家历史始于1943年瑞典，宜家创始人英格瓦•坎普拉德当时只有17岁。自那时起宜家集团已发展成为一个在全世界40个国家/地区拥有127,800个员工，年销售额212亿欧元的大型零售企业。</p>';
          break;
        case 8:
          this.photoinfo.title = "居然之家|中国著名家居品牌";
          this.photoinfo.add_time = "2019-07-14 15:36";
          this.photoinfo.click = 452;
          this.photoinfo.content =
            '<p style="text-indent: 2em">北京居然之家投资控股集团有限公司是以家居为主业，以家庭大消费为平台，业务范围涵盖室内设计和装修、家具建材销售、智慧物流、商业会展、金融服务、跨境电商、院线餐饮、儿童娱乐、体育健身、数码智能、居家养老、城市综合体开发等领域的大型商业连锁集团公司。</p>';
          break;
        case 9:
          this.photoinfo.title = "集美家居|中国十大定制家居品牌";
          this.photoinfo.add_time = "2019-07-13 17:56";
          this.photoinfo.click = 289;
          this.photoinfo.content =
            '<p style="text-indent: 2em">集美控股集团拥有“以人为本”的企业文化和“亲民惠商”的经营理念，秉承“团魂成就你我”的核心价值观，形成了“以关爱为主线的集美企 业文化。</p>';
          break;
        case 10:
          this.photoinfo.title = "Dior迪奥全新升级Dior Backstage系列";
          this.photoinfo.add_time = "2019-07-12 15:35";
          this.photoinfo.click = 96;
          this.photoinfo.content =
            '<p style="text-indent: 2em">我想通过Dior Backstage系列，与每个人分享我的专业知识。我的团队总在T台紧张而又忙碌的工作氛围中游走。每个化妆箱不仅是彩妆大师不可或缺的工具，也更应该能够满足所有女性的彩妆诉求。</p>';
          break;
        case 11:
          this.photoinfo.title = "欧芭莎Eubazaar美妆超市品牌";
          this.photoinfo.add_time = "2019-07-12 15:35";
          this.photoinfo.click = 168;
          this.photoinfo.content =
            '<p style="text-indent: 2em">欧芭莎化妆品集合全球进口美妆300多个品牌，完全承包了消费者的关注度，陈列了上千种各式产品，每天吸引大量年轻人在其中淘货。而且欧芭莎化妆品超市还引入了体验专区，可以让消费者更舒适、更全面的得到护理和体验。</p>';
          break;
        case 12:
          this.photoinfo.title = "EsteeLauder雅诗兰黛";
          this.photoinfo.add_time = "2019-07-11 15:35";
          this.photoinfo.click = 76;
          this.photoinfo.content =
            '<p style="text-indent: 2em">雅诗兰黛公司是全球领先的大型生产商和销售商。雅诗兰黛旗下的护肤，彩妆以及香氛产品都成为了科学与艺术完美结合的最佳范例。</p>';
          break;
        case 13:
          this.photoinfo.title = "Semir森马服饰";
          this.photoinfo.add_time = "2019-07-12 15:35";
          this.photoinfo.click = 296;
          this.photoinfo.content =
            '<p style="text-indent: 2em">中国休闲服饰行业的领先品牌，在全国拥有3000多家销售网点，拥有活力、时尚两大产品线，近千种款式。森马服饰始终站在年轻人的潮流尖端，倾心打造年轻、活力、时尚的潮流品牌。</p>';
          break;
        case 14:
          this.photoinfo.title = "GXG|一个为爱而尚的信念";
          this.photoinfo.add_time = "2019-07-12 15:35";
          this.photoinfo.click = 185;
          this.photoinfo.content =
            '<p style="text-indent: 2em">GXG的logo是由英文单词:go-getter mix glitterati“即：志在必得混合时髦的人”中字母组合，时尚的弧度“G”及线条感伶俐的“X”象征它简练优雅的独特style。</p>';
          break;
        case 15:
          this.photoinfo.title = "JOEONE九牧王";
          this.photoinfo.add_time = "2019-07-10 16:35";
          this.photoinfo.click = 231;
          this.photoinfo.content =
            '<p style="text-indent: 2em">九牧王是中国领先的商务休闲男装品牌企业，公司核心产品九牧王男裤及茄克多年来深受消费者的喜爱和好评。</p>';
          break;
      }
    },

    getThumbs() {
      switch (parseInt(this.id)) {
        case 1:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/11.jpg"),
              msrc: require("../../img/thumbs/11m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/12.jpg"),
              msrc: require("../../img/thumbs/12m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/13.jpg"),
              msrc: require("../../img/thumbs/13m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/14.jpg"),
              msrc: require("../../img/thumbs/14m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/15.jpg"),
              msrc: require("../../img/thumbs/15m.jpg"),
              w: 600,
              h: 400
            }
          ];
          break;
        case 2:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/21.jpg"),
              msrc: require("../../img/thumbs/21m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/22.jpg"),
              msrc: require("../../img/thumbs/22m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/23.jpg"),
              msrc: require("../../img/thumbs/23m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/24.jpg"),
              msrc: require("../../img/thumbs/24m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/25.jpg"),
              msrc: require("../../img/thumbs/25m.jpg"),
              w: 600,
              h: 400
            }
          ];
          break;
        case 3:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/31.jpg"),
              msrc: require("../../img/thumbs/31m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/32.jpg"),
              msrc: require("../../img/thumbs/32m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/33.jpg"),
              msrc: require("../../img/thumbs/33m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/34.jpg"),
              msrc: require("../../img/thumbs/34m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/35.jpg"),
              msrc: require("../../img/thumbs/35m.jpg"),
              w: 600,
              h: 400
            }
          ];
          break;
        case 4:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/41.jpg"),
              msrc: require("../../img/thumbs/41m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/42.jpg"),
              msrc: require("../../img/thumbs/42m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/43.jpg"),
              msrc: require("../../img/thumbs/43m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/44.jpg"),
              msrc: require("../../img/thumbs/44m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/45.jpg"),
              msrc: require("../../img/thumbs/45m.jpg"),
              w: 600,
              h: 400
            }
          ];
          break;
        case 5:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/51.jpg"),
              msrc: require("../../img/thumbs/51m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/52.jpg"),
              msrc: require("../../img/thumbs/52m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/53.jpg"),
              msrc: require("../../img/thumbs/53m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/54.jpg"),
              msrc: require("../../img/thumbs/54m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/55.jpg"),
              msrc: require("../../img/thumbs/55m.jpg"),
              w: 600,
              h: 400
            }
          ];
          break;
        
				case 6:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/61.jpg"),
              msrc: require("../../img/thumbs/61m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/62.jpg"),
              msrc: require("../../img/thumbs/62m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/63.jpg"),
              msrc: require("../../img/thumbs/63m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/64.jpg"),
              msrc: require("../../img/thumbs/64m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/65.jpg"),
              msrc: require("../../img/thumbs/65m.jpg"),
              w: 600,
              h: 400
            }
          ];
				break;
				case 7:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/71.jpg"),
              msrc: require("../../img/thumbs/71m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/72.jpg"),
              msrc: require("../../img/thumbs/72m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/73.jpg"),
              msrc: require("../../img/thumbs/73m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/74.jpg"),
              msrc: require("../../img/thumbs/74m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/75.jpg"),
              msrc: require("../../img/thumbs/75m.jpg"),
              w: 600,
              h: 400
            }
          ];
				break;
				case 8:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/81.jpg"),
              msrc: require("../../img/thumbs/81m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/82.jpg"),
              msrc: require("../../img/thumbs/82m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/83.jpg"),
              msrc: require("../../img/thumbs/83m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/84.jpg"),
              msrc: require("../../img/thumbs/84m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/85.jpg"),
              msrc: require("../../img/thumbs/85m.jpg"),
              w: 600,
              h: 400
            }
          ];
				break;
				case 9:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/91.jpg"),
              msrc: require("../../img/thumbs/91m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/92.jpg"),
              msrc: require("../../img/thumbs/92m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/93.jpg"),
              msrc: require("../../img/thumbs/93m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/94.jpg"),
              msrc: require("../../img/thumbs/94m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/65.jpg"),
              msrc: require("../../img/thumbs/65m.jpg"),
              w: 600,
              h: 400
            }
          ];
				break;
				case 10:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/101.jpg"),
              msrc: require("../../img/thumbs/101m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/102.jpg"),
              msrc: require("../../img/thumbs/102m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/103.jpg"),
              msrc: require("../../img/thumbs/103m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/104.jpg"),
              msrc: require("../../img/thumbs/104m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/105.jpg"),
              msrc: require("../../img/thumbs/105m.jpg"),
              w: 600,
              h: 400
            }
          ];
				break;
				case 11:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/111.jpg"),
              msrc: require("../../img/thumbs/111m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/112.jpg"),
              msrc: require("../../img/thumbs/112m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/113.jpg"),
              msrc: require("../../img/thumbs/113m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/114.jpg"),
              msrc: require("../../img/thumbs/114m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/115.jpg"),
              msrc: require("../../img/thumbs/115m.jpg"),
              w: 600,
              h: 400
            }
          ];
				break;
				case 12:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/121.jpg"),
              msrc: require("../../img/thumbs/121m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/122.jpg"),
              msrc: require("../../img/thumbs/122m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/123.jpg"),
              msrc: require("../../img/thumbs/123m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/124.jpg"),
              msrc: require("../../img/thumbs/124m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/125.jpg"),
              msrc: require("../../img/thumbs/125m.jpg"),
              w: 600,
              h: 400
            }
          ];
				break;
				case 13:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/131.jpg"),
              msrc: require("../../img/thumbs/131m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/132.jpg"),
              msrc: require("../../img/thumbs/132m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/133.jpg"),
              msrc: require("../../img/thumbs/133m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/134.jpg"),
              msrc: require("../../img/thumbs/134m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/135.jpg"),
              msrc: require("../../img/thumbs/135m.jpg"),
              w: 600,
              h: 400
            }
          ];
				break;
				case 14:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/141.jpg"),
              msrc: require("../../img/thumbs/141m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/142.jpg"),
              msrc: require("../../img/thumbs/142m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/143.jpg"),
              msrc: require("../../img/thumbs/143m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/144.jpg"),
              msrc: require("../../img/thumbs/144m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/145.jpg"),
              msrc: require("../../img/thumbs/145m.jpg"),
              w: 600,
              h: 400
            }
          ];
				break;
				case 15:
          this.list = [
            {
              id: 1,
              src: require("../../img/thumbs/151.jpg"),
              msrc: require("../../img/thumbs/151m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 2,
              src: require("../../img/thumbs/152.jpg"),
              msrc: require("../../img/thumbs/152m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 3,
              src: require("../../img/thumbs/153.jpg"),
              msrc: require("../../img/thumbs/153m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 4,
              src: require("../../img/thumbs/154.jpg"),
              msrc: require("../../img/thumbs/154m.jpg"),
              w: 600,
              h: 400
            },
            {
              id: 5,
              src: require("../../img/thumbs/155.jpg"),
              msrc: require("../../img/thumbs/155m.jpg"),
              w: 600,
              h: 400
            }
          ];
        break;
      }
    }
  },
  components: {
    // 注册评论子组件
    "cmt-box": comment
  }
};
</script>

<style lang="scss">
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
  }

  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .content {
    font-size: 12px;
    line-height: 2em;
    padding: 0.2em;

    p {
      margin-top: 10px;
    }
  }
}

// .my-gallery {
// 	figure {
// 		width: 150px;
// 	}
// }

.imgPrev figure {
  float: left;
  width: 30%;
  height: calc(30vw - 40px);
  margin: 1.5%;
}
.content::before {
  content: "";
  clear: both;
  display: block;
  height: 0;
}

.imgPrev figure img {
  width: 100%;
}

// .preview figure {
//   float: left;
//   width: 30%;
//   height:calc(30vw - 0px);
//   margin: 1.5%;
// }

// .preview figure img {
//   width: 100%;
// }
</style>