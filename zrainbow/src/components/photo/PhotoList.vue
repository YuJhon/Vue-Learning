<!--  -->
<template>
  <div id="tmpl">
      <!-- 1.图片分类 -->
      <div id="cate">
        <ul v-bind="{style:'width:'+ulWidth+'px'}">
          <li @click="getPhotoListByCate(0)">全部</li>
          <li v-for="(item,index) in categories" :key="index" 
              @click="getPhotoListByCate(item.id)">{{item.name}}</li>
        </ul>
      </div>
      <!-- 2.图片列表 -->
      <div id="imgList">
        <ul>
          <li v-for="(photo,index) in photoList" :key="index">
            <router-link v-bind="{to:'/photo/photoInfo/'+photo.id}">
              <img v-lazy="photo.url">
              <div id="desc">
                <h5 v-text="photo.title"></h5>
                <p v-text="photo.desc"></p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>
<!--  -->
<script>
/* 获取静态模拟数据 */
import categoriesRes from '../../../statics/data/photo/categories.json';
import listRes from '../../../statics/data/photo/list.json';
import common from '../../kits/common.js';
import {Toast} from 'mint-ui';
export default {
  data(){
    return {
      ulWidth:414,
      /* 图片类目 */
      categories:[],
      /* 图片列表 */
      photoList:[]
    }
  },
  created(){
    /** 初始化类目 */
    this.getCategories();
    var all = 0;
    this.getPhotoListByCate(all);
  },
  methods:{
    getCategories(){
      var url = common.apidomain + '/api/getCategories'
      // TODO 
      this.categories = categoriesRes.data;

      /* 动态设置ul的宽度 */
      this.ulWidth = 73*(this.categories.length+1);
    },
    getPhotoListByCate(id){
      id = id || 0;
      var url = common.apidomain + '/api/getPhotos/'+id
      console.info('当前类目id='+id);
      this.photoList = listRes.data;
    }
  }
}
</script>
<!--  -->
<style scoped>
  #cate{
    width:414px;
    max-width: 414px;
    overflow-x: auto;
  }
  #cate ul{
    margin:0px;
    padding: 5px 10px 5px 10px;
  }
  #cate li{
    cursor: pointer;
    list-style-type: none;
    display: inline-block;
    color: dodgerblue;
    padding-left:5px;
  }

  #imgList ul{
    padding: 0 0 10px 0;
    margin-top:0;
  }

  #imgList li{
    list-style: none;
    position: relative;
  }

  #imgList img{
    width:100%;
  }

  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

  #desc{
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    bottom: 2px;
  }

  #desc h5{
    color:#fff;
    font-weight: bold;
    /* background: -webkit-linear-gradient(left,#da00f9, #cff404); */
  }
  #desc p{
    color:#fff;
  }
</style>
