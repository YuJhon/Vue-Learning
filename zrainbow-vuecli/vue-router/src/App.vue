<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">HI页面</router-link>|
      <router-link :to="{name:'hi1',params:{username:'Jhonrain'}}">HI页面1</router-link>|
      <router-link to="/hi/hi2">HI页面2</router-link>|
      <router-link to="/params/199/jhonrain">Vue路由参数</router-link>|
      <router-link to="/goHome">Go Home</router-link>|
      <router-link to="/goParams/177/YuJhon">Go Params</router-link>|
      <router-link to="/alias">Alias</router-link>|
      <router-link to="/jhonrain">Alias For Jhon</router-link>|
      <router-link to="/abcde">404</router-link>|
    </div>
    <p>{{$route.name}}</p>
    <!-- 单页面多路由区域操作 -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view name="left" class="left"></router-view>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view name="right" class="right"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.left{
  float: left;
  width: 50%;
  height: 300px;
  background-color: aqua;
}

.right{
  float: left;
  width: 50%;
  height: 300px;
  background-color:coral;
}

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
