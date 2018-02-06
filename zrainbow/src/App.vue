<!-- 模板定义 -->
<template>
  <div>
      <!-- Section one Header Define :Use Mint-UI中的Header组件-->
      <mt-header fixed title="RainBow"></mt-header>
	  <div v-if="isShow" id="back">
		  <a href="javascript:void(0);" @click="backto">返回</a>
	  </div>
      <!-- Section Two Router-view -->
      <router-view></router-view>

      <!-- Section Three Footer Define -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar/car">
				<span class="mui-icon mui-icon-contact">
					<span id="badge" class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<!-- 脚本定义 -->
<script>
/*  */
import {vm,COUNT_STR} from './kits/vm.js';
vm.$on(COUNT_STR,function(count){
	console.info(count);
	var badgeEle = document.getElementById('badge');
	badgeEle.innerHTML = parseInt(badgeEle.innerHTML)+count;
});
export default {
	data(){
		return{
			isShow:false
		}
	},
	watch:{
		'$route':function(newRoute,oldRoute){
			if(newRoute.path.toLowerCase() == '/home'){
				this.isShow = false;
			}else{
				this.isShow = true;
			}
		}
	},
	methods:{
		backto(){
			this.$router.go(-1); 
		}
	}
}
</script>

<!-- 组件样式定义 -->
<style scoped>
#back{
	width: 60px;
	position: absolute;
	top:15px;
	left:10px;
	z-index:1000;
}

#back a{
	color:#fff;
	font-size: 16px;
	font-weight: bold;
	
}
</style>


