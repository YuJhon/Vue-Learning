<template>
    <div>
        <h2>{{msg}}</h2>
        <p>newsId:{{ $route.params.newsId }}</p>
        <p>newsTitle:{{ $route.params.newsTitle }}</p>
        <p>{{newsId}}</p>
        <p>{{newsTitle}}</p>
        <button @click="goback">后退</button>
        <button @click="goHome">回到首页</button>
    </div>
</template>

<script>
export default {
  name: "Params",
  data() {
    return {
      msg: "I am Params",
      newsId:'',
      newsTitle:''
    };
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  },
  mounted(){
      this.newsId = this.$route.params.newsId;
      this.newsTitle = this.$route.params.newsTitle;
  },
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>

</style>
