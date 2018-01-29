<!--  -->
<template>
  <div id="tmpl">
      <h3 class="title" v-text="goodsDesc.title"></h3>
      <p class="line"></p>
      <div class="content" v-html="goodsDesc.content"></div>
  </div>
</template>
<!--  -->
<script>
import goodsDescData from '../../../statics/data/goods/GoodsDesc.json';
export default {
  data(){
      return {
          id:0,
          goodsDesc:{}
      }
  },
  created(){
      this.id = this.$route.params.id;
      this.getGoodsDesc();
  },
  methods:{
      getGoodsDesc(){
          this.goodsDesc = goodsDescData.data;
      }
  }
}
</script>
<!--  -->
<style scoped>
.line{
    background-color:rgba(0, 0, 0, 0.4);
    width:100%;
    height: 1px;
}
.title{
    color:#0094ff;
}
.content{
    padding:5px;
}
</style>
