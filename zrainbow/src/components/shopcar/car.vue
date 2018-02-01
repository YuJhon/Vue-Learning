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
              <li><CarInputNum :recount="item.count" :goodsId="item.id" v-on:initCount="initCount"></CarInputNum></li>
              <li><a href="#">删除</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="total">
        <div class="desc">
          <ul>
            <li>总计[不含运费]</li>
            <li>已勾选商品{{totalCount}}件，总价：￥{{totalAmount}}元</li>
          </ul>
        </div>
        <div id="button">
          <mt-button type="danger" size="small">去结算</mt-button>
        </div>
      </div>
  </div>
</template>
<!--  -->
<script>
import {getGoodsObject,setItem} from '../../kits/localsg.js';
import dataListJson from '../../../statics/data/car/car.json';
import CarInputNum from '../subcommon/CarInputNum.vue';
export default {
  components:{
    CarInputNum
  },
  computed:{
    totalCount(){
      var trueArr = this.switchArr.filter(function(item){
        return item;
      });
      var amount = 0;
      this.switchArr.forEach((item,index)=>{
        if(item){
          var count = this.dataList[index].count;
          var price = this.dataList[index].sellPrice;
          amount = parseFloat(amount)+parseFloat(count * price);
        }
      });
      this.totalAmount = amount;
      return trueArr.length;
    }
  },
  data(){
    return {
      totalAmount:0,
      switchArr:[],
      dataList:[]
    }
  },
  created(){
    this.getDataList();

    /** switch控件控制 */
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
      idStr = idStr.substring(0,idStr.length-1);
      console.info('idStr='+idStr);
      dataListJson.data.forEach(item=>{
        item.count = obj[item.id];
        this.switchArr.push(false);
      });
      /** 获取缓存中的数量 */
      this.dataList = dataListJson.data;

    },
    initCount(resObj){
      var realCount = 1;
      if(resObj.type === 'sub'){
        realCount = -1;
      }
      var iniObj = {
        goodsId:resObj.goodsId,
        count:realCount
      }
      setItem(iniObj);
      this.getDataList();
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
  padding-right:10px;
}
#total{
  margin-top:5px;
  height:90px;
  background-color: rgba(0, 0, 0, 0.2);
  display:flex;
}
.desc ul{
  padding-left:20px;
}
.desc li{
  list-style: none;
  font-size:15px;
}
.desc{
  flex:1;
}

#button{
  flex:0 0 60px;
  margin:30px 10px 0 0;

}
</style>
