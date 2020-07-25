<template>
  <div class="feedback">
    <p><span class="red">*</span>问题和意见</p>
    <textarea placeholder="请描述你的问题和意见..." v-model="msg" class="text opinion"></textarea>
    <p>图片（选填，提供问题截图，总大小10M以下）</p>
    <div class="photo">
      <img src="../../img/addpic.png" alt @click="visitPhoto" />
    </div>
    <p>QQ/邮箱</p>
    <input type="text" placeholder="请输入您的QQ或邮箱" class="text"/>
    <mt-button type="primary" size="large" @click="commit">提交反馈</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      msg: ''
    };
  },
  methods: {
    visitPhoto() {
      Toast("抱歉，无法访问您的相册");
    },
    commit() {
      if(this.msg.trim().length == 0) {
        Toast('内容不能为空');
      } else {
        Toast('提交成功');
        this.msg = '';
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.red {
  font-size: 16px;
  color: red;
  margin-left: -6px;
}
.feedback {
  background-color: rgb(241, 241, 241);
  height: 600px;
  overflow: hidden;
  p {
    margin: 10px 0 5px 16px;
    font-size: 14px;
  }
  .text {
    font-size: 14px;
  }
  .opinion {
    height: 80px;
  }
  .photo {
    padding: 4px;
    background-color: #fff;
    img {
      width: 60px;
      margin: 4px 0 0 6px;
    }
  }
}
</style>