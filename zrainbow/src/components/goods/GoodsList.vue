<!--  -->
<template>
  <div id="tmpl">
     <div id="mui-content" class="mui-content" style="background-color:#fff">
        <ul class="mui-table-view mui-grid-view">
            <li v-for="(item,index) in list" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link v-bind="{to:'/goods/goodsInfo/'+item.id}">
                    <img class="mui-media-object" :src="item.coverImg">
                    <div class="mui-media-body" v-text="item.description"></div>
                    <div class="desc">
                        <p>
                            <span>￥{{item.sellPrice}}</span>
                            <s v-text="item.marketPrice"></s>
                        </p>
                        <p>
                            <h6 class="left" v-text="item.tag"></h6>
                            <h6 class="right">剩余{{item.stockQuantity}}件</h6>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>    
    </div>
  </div>
</template>
<!--  -->
<script>
import common from '../../kits/common.js';
import {Toast} from 'mint-ui';
export default {
  data(){
      return {
          list:[]
      }
  },
  created(){
      this.getGoodsList();
  },
  methods:{
      getGoodsList(){
          var url = common.apidomain +'/goods/list';
          this.$http.get(url).then(resp=>{
              var result = resp.body;
              if(result.code == '0'){
                  this.list = result.data;
              }else{
                  Toast(result.code+":"+result.msg);
                  return;
              }
          },err=>{
              Toast('接口调用异常！');
          });
      }
  }
}
</script>
<!--  -->
<style scoped>
#mui-content li{
    border: 1px solid rgba(0, 0, 0, 0.4);
    margin-left: 4px;
    padding:0;
    -webkit-box-shadow: 0 0 1px #000;
    -moz-box-shadow:0 0 1px #000;
    box-shadow:0 0 1px #000;
}
#mui-content .mui-media-body{
    color: #0094ff;
}

#mui-content .desc{
    padding: 5px;
    margin-top: 10px;
    height:50px;
    background-color: rgba(0, 0, 0, 0.1);
    text-align: left;
}

#mui-content .desc span:nth-child(1){
    margin-right: 15px;
    padding-left:15px;
    color: red;
}

#mui-content .desc .right{
    position: absolute;
    right:10px;
    bottom: 0px;
}

#mui-content .desc .left{
    position: absolute;
    left:20px;
    bottom: 0px;
}
</style>
