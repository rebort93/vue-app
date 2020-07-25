<template>
  <div class="search-container">
    <div class="search">
			<!-- 监听聚焦和失焦的方法 -->
			<!-- 在 input 里 绑定属性 @focus="judgeFocus('focus')"  @blur = "judgeFocus('blur')" 参数作为 type 类型传入 methods 的函数中 -->
      <input type="text" placeholder="华为手机" ref="text" @click="showDrop"/>
      <img src="../../img/search.png" alt />

			<!-- 下拉框 -->
			<div class="drop" v-if="flag" >
				<ul class="drop-card">
					<li  v-for="item in searchlist" :key="item.id" @click="addToInput(item.id)" >{{ item.name }}</li>
				</ul>
			</div>
    </div>

		

    <div class="search-history">
      <p>搜索历史</p>
      <ul class="search-card">
        <li  v-for="item in searchlist" :key="item.id" @click="addToInput(item.id)" >{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			flag: false,
			// isFocus: false,
      searchlist: [
        { id: 1, name: "华为手机"},
        { id: 2, name: "苹果"},
        { id: 3, name: "OPPO"},
        { id: 4, name: "iphone11"},
        { id: 5, name: "华为nova"},
        { id: 6, name: "格子衬衫"},
        { id: 7, name: "双肩包"},
      ],
    };
	},
	created() {
		this.addToInput();
		// this.judgeFocus();
		// this.getFocus();
		// this.showDrop()
	},
	
	methods: {
		addToInput(id) {
			// console.log(id)
			// this.$refs.text.value = this.searchlist[id - 1].name
			this.searchlist.some(item => {
				if (item.id == id) {
					this.$refs.text.value = item.name
					return true
				}
			})
		},
		// judgeFocus(type) {
		// 	if (type == 'focus') {
		// 		this.flag = true;
		// 	} else if (type == 'blur') {
		// 		this.flag = false
		// 	}
		// },
		// getFocus() {
		// 	// console.log('haha')
		// 	this.isFocus = true
		// },
		showDrop() {
			this.flag = !this.flag
		}
	},

	// directives: {
	// 	focus: {
	// 		inserted(el) {
	// 			el.focus()
	// 		}
	// 	}
	// },
};
</script>>

<style lang="scss" scoped>
.search-container {
  background-color: rgb(241, 241, 241);
  height: 500px;
}
.search {
  position: relative;
  padding: 8px 6px 0 6px;
  input {
    padding-left: 40px;
    font-size: 14px;
    color: rgb(87, 87, 87);
    outline: none;
		border: none;
		
  }
  img {
    position: absolute;
    top: 16px;
    left: 12px;
    width: 24px;
    opacity: 0.4;
  }
}

.search-history {
  p {
    font-size: 16px;
    font-weight: bold;
    margin: 16px 0 0 16px;
  }
  .search-card {
    width: 260px;
		height: 80px;
    list-style: none;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin: 20px auto;
		padding: 0;
		
    li {
      background-color: rgb(243, 243, 243);
      height: 32px;
      border-radius: 0.2em;
      padding: 6px 6px 6px 6px;
      text-align: center;
      line-height: 20px;
      font-size: 14px;
      color: rgb(170, 170, 170);
    }
  }
}

.drop {
	position: absolute;
	top: 50px;
	width: 363px;
	background-color: #fff;
	box-shadow: 0 4px 6px #ccc;
	.drop-card {
		padding: 0;
		margin-top: 8px;
		li {
			list-style: none;
			height: 40px;
			line-height: 40px;
			padding-bottom: 18px;
			padding-left: 38px;
			font-size: 16px;
			transition: all .5s ease;
		}
		li:hover {
			background-color: #62bbff;
			color: #fff;
		}
		
	}
	
}

.mui-focusin {
	display: none;
}
</style>