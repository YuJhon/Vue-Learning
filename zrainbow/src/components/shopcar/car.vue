<!--  -->
<template>
  <div id="tmpl">
      <div class="row" v-for="(item,index) in dataList" :key="index">
        <mt-switch class="switch" v-model="switchArr[index]"></mt-switch>
        <img :src="item.thumPath" alt="商品图片" class="img">
        <div class="right-info">
          <h4 v-text="item.title"></h4>
          <div class="bottom">
            <ul>
              <li>￥{{item.sellPrice}}</li>
              <li>购买数量组件</li>
              <li><a href="#">删除</a></li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>
<!--  -->
<script>
import {getGoodsObject} from '../../kits/localsg.js';
export default {
  data(){
    return {
      switchArr:[],
      dataList:[
        {
          "count":1,
          "id":1,
          "title":"Mac Pro 新年版",
          "sellPrice":2195,
          "thumPath":"http://vuelearn.oss-cn-shenzhen.aliyuncs.com/2018-01-25_224203.png"
        },
        {
          "count":3,
          "id":2,
          "title":"苹果 Apple iPhone 7 Plus 16G 4G手机(联通三网通)",
          "sellPrice":2195,
          "thumPath":"http://vuelearn.oss-cn-shenzhen.aliyuncs.com/2018-01-25_224203.png"
        }
      ]
    }
  },
  created(){
    this.getDateList();
  },
  methods:{
    getDataList(){
      // 从localstorage中获取购物车中的值
      var obj = getGoodsObject();
      // 将对应的商品数据拼接成商品Id，逗号分隔
      var idStr = '';
      for(var key in obj){
        idStr += key+',';
      }
      // 请求接口获取到相应的数据 
    }
  }
}
</script>
<!--  -->
<style scoped>
.row{
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 102px;
  background-color: #fff;
  display: flex;
}
.switch{
  flex: 0 0 52px;
}

.img{
      height: 80px;
    /* width: 75px; */
    flex: 0 0 75px;
    margin-top: 15px;
}
.right-info{
  flex:1;
}
.right-info ul{
  padding-left: 0px;
}
.right-info li{
  list-style: none;
  display: inline-block;
}
.bottom li:nth-child(1){
  color:red;
}
.bottom li:last-child{
  margin-left: 5px;
}
.right-info h4{
  color:#0094ff;
  font-size: 14px;
}
</style>
