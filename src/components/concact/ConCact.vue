<template>
    <div>
		
        <div class="mui-content">
			<div class="mui-content-padded">
				<div class="qrcode">
					<img id="qrcode" src="../../img/concact.jpg" width="100%" />
					<a id="shortcut" style="width: 60%;margin: 15px auto;padding: 5px;" class="mui-hidden mui-btn mui-btn-block mui-btn-red">创建桌面图标</a>
				</div>
				<!--<h4 style="margin-top:10px;">mui</h4>-->
				<div class="express">
					<strong>基于vue.js实现的app-demo</strong>
					<p>包含vue-router路由切换，vuex组件通信,部分vue-resource请求等系列操作以及webpack系列打包工具。</p>
					<strong>内容含括</strong>
					<p>利用部分UI组件达到迅速开发目的，部分布局框架手动实现；新闻资讯栏目及详情，大图文结合采用了懒加载技术，进入详情采用了vue-preview缩略图功能实现；购物商城商品添加、删除、价格计算、同步store和localstorage及部分动画演示；问题反馈及会员登录组件化，搜索功能提供搜索历史及搜索下拉框。</p>
				</div>
					
				
			</div>
		</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.mui-content {
	background-color: #fff;
}
.express {
	strong {
		font-size: 14px;
		color: #555555;
	}
	p {
		 word-break: break-all;
	}
}
</style>