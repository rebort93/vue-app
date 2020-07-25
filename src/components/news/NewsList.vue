<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h4>{{ item.title }}</h4>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.add_time }}</span>
              <span>点击：{{ item.click }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      newslist: [
        {
          id: 1,
          img_url: require("../../img/news/1.jpg"),
          title: "支付宝上线大尺度照片 回应：删除违规内容",
          add_time: "2019-07-21 16:56",
          click: 236
        },
        {
          id: 2,
          img_url: require("../../img/news/2.jpg"),
          title: "中国电子第一街从暴富神话到一夜空城",
          add_time: "2019-07-20 17:15",
          click: 98
        },
        {
          id: 3,
          img_url: require("../../img/news/3.jpg"),
          title: "广州武汉长沙同日齐出地王 为下次暴涨囤地？",
          add_time: "2019-07-17 16:19",
          click: 125
        },
        {
          id: 4,
          img_url: require("../../img/news/4.jpg"),
          title: "统计局：10月一二线城市房地产市场明显降温",
          add_time: "2019-07-16 15:38",
          click: 489
        },
        {
          id: 5,
          img_url: require("../../img/news/5.jpg"),
          title: "楼市调控第二波：杭州、武汉、深圳升级政策",
          add_time: "2019-07-15 17:45",
          click: 326
        },
        {
          id: 6,
          img_url: require("../../img/news/6.jpg"),
          title: "人民币中间价大涨217点 升幅为逾一个月最大",
          add_time: "2019-07-15 17:15",
          click: 66
        },
        {
          id: 7,
          img_url: require("../../img/news/7.jpg"),
          title: "韩寒名下餐厅”很高兴遇见你”宁波店欠债关门",
          add_time: "2019-07-14 16:42",
          click: 28
        },
        {
          id: 8,
          img_url: require("../../img/news/8.jpg"),
          title: "百度地图撕逼高德地图：谁是手机地图行业第一？",
          add_time: "2019-07-14 15:36",
          click: 136
        },
        {
          id: 9,
          img_url: require("../../img/news/9.jpg"),
          title: "苏州22家违规房企被责令整改 每平米房价4天跌9千",
          add_time: "2019-07-13 17:56",
          click: 39
        },
        {
          id: 10,
          img_url: require("../../img/news/10.jpg"),
          title: "乐视919乐迷节44.8亿创历史记录 超级汽车融资10",
          add_time: "2019-07-12 15:35",
          click: 302
        },
        {
          id: 11,
          img_url: require("../../img/news/11.jpg"),
          title: "中秋后成品油调价窗口将开 汽柴油价或小幅下调",
          add_time: "2019-07-11 17:19",
          click: 86
        },
        {
          id: 12,
          img_url: require("../../img/news/12.jpg"),
          title: "厦门等五城楼市限贷限购 或引发二线楼市调控",
          add_time: "2019-07-11 16:28",
          click: 101
        }
      ]
    };
  }

  // created() {
  // 	this.getNewsList();
  // },
  // methods: {
  // 	getNewsList() {
  // 		this.$http.get('api/getnewslist').then(result => {
  // 			if (result.body.status === 0) {
  // 				this.newslist = result.body.message;
  // 			} else {
  // 				Toast('获取新闻列表失败')
  // 			}
  // 		})
  // 	}
  // },
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h4 {
      font-size: 14px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>