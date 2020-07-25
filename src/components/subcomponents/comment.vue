<template>
  <div class="cmt-container">
    <h4>发表评论</h4>
    <hr />
    <textarea placeholder="请输入要评论的内容（最多150字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.id">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time }}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，没有发表任何内容' : item.content }}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, // 默认显示第一页数据
      comments: [
        {
          id: 1,
          user_name: "匿名用户",
          add_time: "2019-11-26 16:48:26",
          content: "哈哈哈哈哈"
        },
        {
          id: 2,
          user_name: "匿名用户",
          add_time: "2019-11-20 09:22:09",
          content: "小编又在胡说了"
        },
        {
          id: 3,
          user_name: "匿名用户",
          add_time: "2019-10-11 14:32:17",
          content: "undefined"
        },
        {
          id: 4,
          user_name: "匿名用户",
          add_time: "2019-9-26 20:07:32",
          content: "undefined"
        },
        {
          id: 5,
          user_name: "匿名用户",
          add_time: "2019-9-12 12:34:01",
          content: "undefined"
        },
        {
          id: 6,
          user_name: "匿名用户",
          add_time: "2019-8-14 18:08:26",
          content: "undefined"
        },
        {
          id: 7,
          user_name: "匿名用户",
          add_time: "2019-8-13 10:12:02",
          content: "undefined"
        },
        {
          id: 8,
          user_name: "匿名用户",
          add_time: "2019-7-08 15:32:28",
          content: "沙发"
        }
      ],
      comments1: [
        {
          id: 9,
          user_name: "匿名用户",
          add_time: "2019-11-26 16:48:26",
          content: "沙扬娜拉"
        },
        {
          id: 10,
          user_name: "匿名用户",
          add_time: "2019-11-20 09:22:09",
          content: "byebye"
        },
        {
          id: 11,
          user_name: "匿名用户",
          add_time: "2019-10-11 14:32:17",
          content: "undefined"
        },
        {
          id: 12,
          user_name: "匿名用户",
          add_time: "2019-9-26 20:07:32",
          content: "undefined"
        },
        {
          id: 13,
          user_name: "匿名用户",
          add_time: "2019-9-12 12:34:01",
          content: "undefined"
        },
        {
          id: 14,
          user_name: "匿名用户",
          add_time: "2019-8-14 18:08:26",
          content: "thanks"
        },
        {
          id: 15,
          user_name: "匿名用户",
          add_time: "2019-8-13 10:12:02",
          content: "undefined"
        },
        {
          id: 16,
          user_name: "匿名用户",
          add_time: "2019-7-08 15:32:28",
          content: "undefined"
        }
      ],
      comments2: [
        {
          id: 17,
          user_name: "匿名用户",
          add_time: "2019-11-26 16:48:26",
          content: "说的什么啊"
        },
        {
          id: 18,
          user_name: "匿名用户",
          add_time: "2019-11-20 09:22:09",
          content: "好吧"
        },
        {
          id: 19,
          user_name: "匿名用户",
          add_time: "2019-10-11 14:32:17",
          content: "不知道"
        },
        {
          id: 20,
          user_name: "匿名用户",
          add_time: "2019-9-26 20:07:32",
          content: "undefined"
        },
        {
          id: 21,
          user_name: "匿名用户",
          add_time: "2019-9-12 12:34:01",
          content: "undefined"
        },
        {
          id: 22,
          user_name: "匿名用户",
          add_time: "2019-8-14 18:08:26",
          content: "right"
        },
        {
          id: 23,
          user_name: "匿名用户",
          add_time: "2019-8-13 10:12:02",
          content: "undefined"
        },
        {
          id: 24,
          user_name: "匿名用户",
          add_time: "2019-7-08 15:32:28",
          content: "沙发"
        }
      ],
      msg: "" // 评论输入的内容
    };
  },
  methods: {
    getMore() {
      this.pageIndex++;
      if (this.pageIndex == 2) {
        this.comments = this.comments.concat(this.comments1);
      } else if (this.pageIndex == 3) {
        this.comments = this.comments.concat(this.comments2);
      }
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空");
      }
      var cmt = {
        user_name: "匿名用户",
        add_time: Date.now(),
        content: this.msg.trim()
      };
      this.comments.unshift(cmt);
      this.msg = "";
    }
  }
  // created() {
  // 	this.getComments();
  // },
  // methods: {
  // 	getComments() {
  // 		this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result => {
  // 			if (result.body.status === 0) {
  // 				this.comments = result.body.message;
  // 			} else {
  // 				Toast('获取评论失败');
  // 			}
  // 		})
  // 	}
  // },
  // props:["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 10px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        padding-left: 4px;
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>