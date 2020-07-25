import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import searchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import FeedBack from './components/feedback/FeedBack.vue'
import ConCact from './components/concact/ConCact.vue'
import Purse from './components/purse/Purse.vue'

// 创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: searchContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList, name: 'goodslist' },
        { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo'},
        { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc'},
        { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment'},
        { path: '/home/feedback', component: FeedBack },
        { path: '/home/concact', component: ConCact},
        { path: '/home/purse', component: Purse}
    ],
    linkActiveClass: 'mui-active' , // 覆盖默认的路由高亮的类，默认的类 router-link-active
});

// 对外暴露路由对象
export default router