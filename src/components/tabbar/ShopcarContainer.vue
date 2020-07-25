<template>
  <div class="shopcar-container">

    <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">

					<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>

					<img :src="item.img" alt="">
					<div class="info">
						<h1>{{ item.title }}</h1>
						<p>
							<span class="price">¥{{ item.price }}</span>
							<numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
							<a href="#" @click.prevent="remove(item.id, i)">删除</a>
						</p>
					</div>
				</div>
      </div>
    </div>

		<div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner Settlement">
					<div class="left">
						<p>总计(不含运费)</p>
						<p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件，总价 <span class="red">¥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
					</div>
					<mt-button type="danger">去结算</mt-button>
				</div>
      </div>
    </div>

  </div>
</template>

<script>
import numbox from '../subcomponents/numboxShopcar.vue'

export default {
	data() {
		return {
			goodslist: []
		}
	},
	created() {
		this.getGoodsList();
	},
	methods: {
		getGoodsList() {
			this.$store.state.car.forEach(item => {
				this.goodslist.push(item)
			})
			// this.goodslist.push(goods)			
			// console.log(this.goodslist)
		},
		remove(id, index) {
			// 点击删除 把商品从 store中根据传递的id删除，同时把当前组件中的 goodslist 中对应要删除的商品 使用 index 来删除
			this.goodslist.splice(index, 1);
			this.$store.commit('removeFromCar', id);

		},
		selectedChanged(id, val) {
			// 每当点击开关，把最新的开关状态 同步到 store 中
			this.$store.commit('updateGoodsSelected', {id, selected: val});
		}
	},

	components: {
		numbox
	},
}
</script>

<style lang="scss" scoped>
.shopcar-container {
	background-color: #eee;
	overflow: hidden;
}
.mui-card {
	.mui-card-content-inner {
		display: flex;
		align-items: center;
	}
	img {
		width: 60px;
		height: 60px;
	}
	h1 {
		font-size: 14px;
		line-height: 1.2em;
	}

	.info {

		.price {
			color: red;
			font-weight: bold;
			font-size: 1em;
		}

		a {
			margin-left: 2px;
		}
	}
}

.left {
	margin-top: 5px;
}
.Settlement {
	display: flex;
	justify-content: space-between;
	align-items: center;

	.red {
		color: red;
		font-size: 16px;
		font-weight: bold;
	}
}
</style>