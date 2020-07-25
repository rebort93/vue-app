<template>
  <div>
		<!-- 谁用这个轮播图组件 谁为这里传递 lunbotuList -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.src" alt="" :class="{'full': isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbotuList", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
		text-align: center;
    // &:nth-child(1) {
    //   background-color: red;
    // }
    // &:nth-child(2) {
    //   background-color: blue;
    // }
    // &:nth-child(3) {
    //   background-color: orange;
    // }

    img {
      // width: 100%;
      height: 100%;
    }
  }
}

.full {
	width: 100%;
}
</style>>