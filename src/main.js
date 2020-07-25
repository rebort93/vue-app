// 入口文件
import Vue from 'vue';

// 导入路由的包
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入 vue-resource 
import VueResource from 'vue-resource';
Vue.use(VueResource);

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css';



// 按需导入 Mint-UI 中的组件 
import { Header, Swipe, SwipeItem, Button, Lazyload, Switch, Search } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.component(Search.name, Search);
Vue.use(Lazyload);


import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// 注册 vuex
import Vuex from 'vuex'
Vue.use(Vuex);

var car = JSON.parse(localStorage.getItem('car') || '[]');
// localStorage.clear();
var store = new Vuex.Store({
	state: {
		// this.$store.state.**
		car: car, // 购物车中商品的数据
	},
	mutations: {
		// this.$store.commit()
		addToCar(state, goodsinfo) {
			// 假设购物车中没有找到对应的商品
			var flag = false;
			state.car.some(item => {
				if (item.id == goodsinfo.id) {
					item.count += parseInt(goodsinfo.count);
					flag = true;
					return true;
				}
			})

			if (!flag) {
				state.car.push(goodsinfo);
			}

			// 更新car后 存储到本地的 localStorage 中
			localStorage.setItem('car', JSON.stringify(state.car));
		},
		updateGoodsInfo(state, goodsinfo) {

			// 修改更新购物车商品的数量
			state.car.some(item => {
				if (item.id == goodsinfo.id) {
					item.count = parseInt(goodsinfo.count);
					return true;
				}
			})
			// 更新商品数量后，重新保存到本地存储
			localStorage.setItem('car', JSON.stringify(state.car));

		},
		removeFromCar(state, id) {
			// 根据id 从 store 中的购物车中删除对应的那条商品数据
			state.car.some((item, i) => {
				if (item.id == id) {
					state.car.splice(i, 1);
					return true;
				}
			})

			// 将删除完毕后 最新的购物车数据 同步到本地存储中
			localStorage.setItem('car', JSON.stringify(state.car));

		},
		updateGoodsSelected(state, info) {
			state.car.some(item => {
				if (item.id == info.id) {
					item.selected = info.selected
				}
			})
			// 把最新的所有购物车数据，同步到本地存储中
			localStorage.setItem('car', JSON.stringify(state.car));
		}
	},
	getters: {
		// this.$store.getters.**
		getAllCount(state) {
			var c = 0;
			state.car.forEach(item => {
				c += item.count;
			})
			return c;		
		},
		getGoodsCount(state) {
				var o = {};
				state.car.forEach(item => {
					o[item.id] = item.count;
				})
				return o;
		},
		getGoodsSelected(state) {
			var o = {};
			state.car.forEach(item => {
				o[item.id] = item.selected
			})
			return o;
		},
		getGoodsCountAndAmount(state) {
			var o = {
				count: 0,  // 勾选的数量
				amount: 0   // 勾选的总价
			};
			state.car.forEach(item => {
				if (item.selected) {
					o.count += item.count;
					o.amount += item.price * item.count;
				}
			})
			return o;
		}
	}
})

// 导入 router.js 路由模块
import router from './router.js'



import app from './App.vue';

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router, // 挂载路由对象到VM 实例上
	store,  // 挂载 vuex
});