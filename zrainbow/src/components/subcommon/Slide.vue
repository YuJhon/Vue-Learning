<!--  -->
<template>
  <div id="tmpl">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgs" :key="item.id">
            <img :src="item.image">
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<!--  -->
<script>
export default {
  props:["imgs"],
  data(){
      return {
      }
  },
  created(){
    console.info('组件获取值：'+this.imgs);
  }
}
</script>
<!--  -->
<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  width: 100%;
  height: 200px;
  background-color: rgb(74, 75, 75);
}
.mint-swipe-item img{
  width: 100%;
  height:200px;
}
</style>
