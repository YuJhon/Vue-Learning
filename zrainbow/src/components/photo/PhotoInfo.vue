<!--  -->
<template>
  <div id="tmpl">
      <!-- 1.图片详情和缩略图 -->
      <div id="desc">
        <!-- 1.1 图片标题 -->
        <div class="title">
          <h4 v-text="photoInfo.title"></h4>
          <p>{{photoInfo.addTime | datefmt('YYYY-MM-DD HH:mm:ss')}} 浏览{{photoInfo.scan}}次</p>
          <p class="line"></p>
        </div>
        <!-- 1.2 缩略图 https://www.npmjs.com/package/vue-preview -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li v-for="(item, index) in list" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <img  class="preview-img"  :src="item.src" height="100" @click="$preview.open(index, list)">
                </li>
            </ul> 
		    </div>
        <!-- 图片摘要 -->
        <div class="layer-summary">
          <p class="summary" v-text="photoInfo.summary">图片摘要</p>
        </div>
      </div>
      <!-- 2.评论组件部分 -->
      <div id="comment">
        <comment :id="id" :category="category"></comment>
      </div>
  </div>
</template>
<!--  -->
<script>
import {PHOTO_COMMENT_CATEGORY} from '../../kits/vm.js';
import comment from '../subcommon/Comment.vue';
import {Toast} from 'mint-ui';
import common from '../../kits/common.js';
export default {
  /* 组件 */
  components:{
    comment
  },
  data(){
    return {
      id:'',
      category:'',
      photoInfo:{},
      list: []
    }
  },
  created(){
    this.id = this.$route.params.id;
    this.category = PHOTO_COMMENT_CATEGORY;
    this.getDetailInfo();
    this.getPhotoList();
  },
  methods:{
    getDetailInfo(){
      var url = common.apidomain +'/photoInfo/detail/'+this.id;
      this.$http.get(url).then(resp=>{
        var result = resp.body;
        if(result.code == '0'){
          this.photoInfo = result.data;
        }else{
          Toast(result.code+':'+result.msg);
          return;
        }
      }).then(resp=>{
        Toast('调用接口异常！'+resp);
        return;
      });
    },
    getPhotoList(){
      var url = common.apidomain +'/pictureThum/list/'+this.id;
      this.$http.get(url).then(resp=>{
        var result = resp.body;
        if(result.code == '0'){
          result.data.forEach(item =>{
            item.w = 400;
            item.h = 300;
          });
          this.list = result.data;
        }else{
          Toast(result.code+':'+result.msg);
          return;
        }
      }).then(resp=>{
        Toast('调用接口异常！'+resp);
        return;
      });
    }
  }
}
</script>
<!-- 样式只是对当前组件生效 -->
<style scoped>
  #tmpl{
    background-color:#fff;
  }
  #desc{
    padding:10px;
  }

  #desc .title h4{
    color:#0094ff;
  }

  #desc .title p{
    color:rgba(0, 0, 0, 0.4);
    margin-top: 10px;
  }

  #desc .title .line{
    margin-top:15px;
    border:1px solid rgba(0, 0, 0, 0.4);
    width:100%;
  }

  .layer-summary{
    margin-top:20px;
    width:100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .summary{
    color:#fa7908; 
    padding: 10px 0px 10px 0px;
  }

  .mui-content,.mui-grid-view.mui-grid-9{
    background-color: #fff;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-right: 0px;
    border-bottom: 0px;
  }
  .mui-content img{
    width: 100px;
    height: 100px;
  }


</style>
