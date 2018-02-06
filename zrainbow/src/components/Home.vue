<!--  -->
<template>
  <div id="tmpl">
    <!-- 使用Mint-UI中的Swipe实现图片轮播 -->  
    <!-- <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.url">
            <img :src="item.image">
        </mt-swipe-item>
    </mt-swipe> -->
    <slide :imgs="imgs"></slide>
    <!-- 使用MUI中的9宫格实现导航区域 -->
    <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">首页</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newslist">
                        <span class="mui-icon mui-icon-email"></span><!-- <span class="mui-badge">5</span> -->
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodsList">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">商品列表</div>
                    </router-link>
                </li>
                <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/search">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">Search</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/phone">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">Phone</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/setting">
                        <span class="mui-icon mui-icon-gear"></span>
                        <div class="mui-media-body">Setting</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/info">
                        <span class="mui-icon mui-icon-info"></span>
                        <div class="mui-media-body">about</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/more">
                        <span class="mui-icon mui-icon-more"></span>
                        <div class="mui-media-body">more</div>
                    </router-link>
                </li> -->
            </ul> 
		</div>
  </div>
</template>
<!-- 脚本编写 -->
<script>
import { Toast } from 'mint-ui';
/* 获取静态数据 */
//import picDatas from '../../statics/data/home/pictureInfo.json';
/* 公共组件的导入 */
import common from '../kits/common.js';
/** 轮播组件的导入 */
import slide from './subcommon/Slide.vue';
export default {
  data() {
    return {
      imgs: []
    };
  },
  components:{
      slide
  },
  created(){
    this.getimgs();
  },
  methods:{
      getimgs(){
          // 1.确定url
          var url = common.apidomain+'/coverPic/list';
          // 2.调用$http.get()
          this.$http.get(url).then(resp=>{
              var tempData = resp.body;
              console.info(tempData);
              if(tempData.code == '0'){
                  this.imgs = tempData.data;
              }else{
                  Toast(tempData.code+':'+tempData.msg);
                  return;
              }
          },errResp=>{
              Toast("调用接口异常，请稍后再试！");
              return;
          });
          
          /*
          // 接口还未实现，后期再实现
          this.imgs = picDatas.data;
          */
      }
  }
};
</script>
<!--  -->
<style scoped>
/* 重写样式 */
.mui-content,.mui-grid-view.mui-grid-9{
    background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-right: 0px;
    border-bottom: 0px;
}
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-chatbubble:before,
.mui-icon-phone:before,
.mui-icon-gear:before,
.mui-icon-info:before,
.mui-icon-more:before
{
    content:'';
    display:inline-block;
    width:50px;
    height:50px;
    background-repeat: round;
}

.mui-icon-home:before{
    background-image:url("../../statics/imgs/1.png");
}
.mui-icon-email:before{
    background-image:url("../../statics/imgs/2.png");
}
.mui-icon-location:before{
    background-image:url("../../statics/imgs/3.png");
}
.mui-icon-search:before{
    background-image:url("../../statics/imgs/4.png");
}
.mui-icon-chatbubble:before{
    background-image:url("../../statics/imgs/1.png");
}
.mui-icon-phone:before{
    background-image:url("../../statics/imgs/2.png");
}
.mui-icon-gear:before{
    background-image:url("../../statics/imgs/3.png");
}
.mui-icon-info:before{
    background-image:url("../../statics/imgs/4.png");
}
.mui-icon-more:before{
    background-image:url("../../statics/imgs/1.png");
}
</style>