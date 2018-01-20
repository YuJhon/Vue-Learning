<!-- 模板定义 -->
<template>
  <div>
      <!-- Section one Header Define :Use Mint-UI中的Header组件-->
      <mt-header fixed title="RainBow"></mt-header>

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
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">1</span></span>
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
    export default {
    
    }
</script>

<!-- 组件样式定义 -->
<style scoped>

</style>


