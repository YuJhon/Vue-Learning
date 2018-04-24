<template>
  <div class="home">
      <img :src="backImg" alt="封面图片">
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
        backImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524548766139&di=0850282cbd9834b51d9254a70b07ffcb&imgtype=0&src=http%3A%2F%2Fblog.silucg.com%2Fuploads%2Fallimg%2F170221%2F11264T248-18.jpg'
    };
  }
};
</script>

<style scoped>
.home{
    width: 100%;
    height:100%;
    overflow: hidden;
}
.home img{
    padding:1%;
    width: 98%;
    height:96%;
}
</style>


