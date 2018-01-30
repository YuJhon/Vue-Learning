<!--  -->
<template>
  <div id="tmpl">
      <!-- 图片轮播区域 -->
      <div class="slider">
        <slide :imgs="list"></slide>
      </div>
      <!-- 购买区域 -->
      <div id="buy">
          <h3 v-text="goodsInfo.title"></h3>
          <p class="line"></p>
          <ul>
              <li>
                  市场价：￥<S v-text="goodsInfo.marketPrice"></S> 销售价：<span>￥{{goodsInfo.sellPrice}}</span>
              </li>
              <li class="inputNumLi">
                  购买数量：
                  <inputNum v-on:dataObj="getCount" class="inputNum"></inputNum>
                  <transition name="show" 
                    @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                      <div v-show="isshow" class="ball"></div>
                  </transition>
              </li>
              <li>
                  <mt-button type="primary" size="small">立即购买</mt-button>
                  <mt-button type="danger" size="small" @click="toShopCar">加入购物车</mt-button>
              </li>
          </ul>
      </div>
      <!-- 商品参数 -->
      <div id="param">
          <h5>商品参数</h5>
          <p class="line"></p>
          <ul>
              <li>商品货号：{{goodsInfo.goodsNo}}</li>
              <li>库存情况：{{goodsInfo.stockQuantity}}</li>
              <li>上架时间：{{goodsInfo.addTime | datefmt('YYYY-MM-DD')}}</li>
          </ul>
      </div>
      <!-- 其他区域 -->
      <div id="other">
            <router-link v-bind="{to:'/goods/goodsDesc/'+this.id}">
                <mt-button class="imgs" type="primary" size="large">图文详情</mt-button>
            </router-link>
            <router-link v-bind="{to:'/goods/goodsComment/'+this.id}">
                <mt-button type="danger" size="large">商品评论</mt-button>
            </router-link>
      </div>    
  </div>
</template>
<!--  -->
<script>
import goodsDetail from '../../../statics/data/goods/goodsDetail.json';
import picDatas from '../../../statics/data/home/pictureInfo.json';
import slide from '../subcommon/Slide.vue';
import inputNum from '../subcommon/InputNum.vue';
import {vm,COUNT_STR} from '../../kits/vm.js';
import {setItem,itemObj} from '../../kits/localsg.js';
export default {
  data(){
      return {
          id:0,
          list:[],
          goodsInfo:{},
          inputCountNum:1,
          isshow:false
      }
  },
  components:{
      slide,inputNum
  },
  created(){
      this.id = this.$route.params.id;
      this.getImages();
      this.getGoodsInfo();
  },
  methods:{
      getImages(){
          this.list = picDatas.data;
      },
      getGoodsInfo(){
          this.goodsInfo = goodsDetail.data;
      },
      getCount(count){
          //console.info('获取到子组件传递的值：'+count);
          this.inputCountNum = count;
      },
      toShopCar(){
          /**1. */
          vm.$emit(COUNT_STR,this.inputCountNum);
          /**2.将数据设置到localstrage中 */
          itemObj.goodsId = this.id;
          itemObj.count = this.inputCountNum;
          setItem(itemObj);

          this.isshow = !this.isshow;
      },
      beforeEnter(el){
          /** 设定初始位置 */
          el.style.transform = "translate(0px,0px)";
      },
      enter(el,done){
          el.offsetWidth;
          el.style.transform = "translate(85px,380px)";
          done();
      },
      afterEnter(el){
          this.isshow = !this.isshow;
      }
  }
}
</script>
<!--  -->
<style scoped>
.slider{
    border:1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    margin: 5px;
}
#buy{
    border:1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    margin: 5px;
}
#buy h3{
    color: #0094ff;
    margin-left: 10px;
}
#buy .line{
    width:96%;
    background-color: rgba(0, 0, 0, 0.4);
    height: 1px;
    margin:10px 5px 10px 5px;
}
#buy ul{
    padding:0px;
}

#buy li{
    list-style: none;
    padding:8px;
}
#buy li s{
    margin-right:20px;
}
#buy li span{
    color:red;
}

#param{
    border:1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    margin: 5px;
}
#param ul{
    padding-left:25px;
    font-size:14px;
}
#param li{
    list-style: none;

}
#param h5{
    margin-left:5px;
    padding:5px 0px 0px 5px;
}
#param .line{
    width:96%;
    height: 1px;
    margin:10px 10px 10px 10px;
    background-color:rgba(0, 0, 0, 0.4);
}

#other{
    border:1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    margin: 5px 5px 100px 5px;
}
#other .imgs{
    margin-bottom: 10px;
}

.inputNumLi{
    position: relative;
}

.inputNum{
    position: absolute;
    left:100px;
    top:5px;
}
.ball{
    background-color: red;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 153px;
    top:7px;
    transition: all 0.8s ease-in-out ;
    z-index: 1000;
}
</style>
