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
import common from '../../kits/common.js';
import {Toast} from 'mint-ui';
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
          var url = common.apidomain + '/goods/goodsDesc/'+this.id;
          this.$http.get(url).then(resp=>{
              var result = resp.body;
              if(result.code == '0'){
                  this.goodsDesc = result.data;
              }else{
                  Toast(result.code+':'+result.msg);
                  return;
              }
          },err=>{
              Toast('接口调用异常！');
              return;
          });
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
