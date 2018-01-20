<!-- 以后项目的根组件 -->
<template>
  <!-- 1.0 template 主要方html元素（html页面结构） -->
  <div>
      <span v-text="msg"></span>
      <br/>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>

      <!-- 内容显示 -->
      <router-view></router-view>
  </div>
</template>
<!-- -->
<script>
/* 负责导出 .vue这个组件对象（它本质上是一个Vue对象） */
export default {
  data(){ // 等价于es5 的data:function()
      return {
          msg:'Hello JhonRain'
      }
  }
}
</script>
<!-- -->
<style scoped>
/* 当前页面的css样式写到这里，其中的scoped表示这个页面写的css代码只是在当前组件页面生效，不会影响到其他组件页面 */
    .div-top{
        color:red;
    }
</style>


