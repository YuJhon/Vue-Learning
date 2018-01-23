<!-- 模板定义  -->
<template>
  <div id="tmpl">
      <!-- 1.0提交评论的实现 -->
      <div id="postcomment">
        <h3>提交评论</h3>
        <p class="p"></p>
        <textarea v-model="comment" placeholder="请输入要评论的内容"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表</mt-button>
      </div>
      <!-- 2.评论列表的展示 -->
      <div id="commentList">
          <h3>评论列表</h3>
          <p class="p"></p>
          <div v-for="(item,index) in commentList" :key="index">
            <div class="title">
                <span>第{{index + 1}}楼</span>
                <span>用户:{{item.username}}</span>
                <span>发布时间:{{item.cTime | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
            </div>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell" v-text="item.content"></li>
            </ul>
          </div>
      </div>
      <!-- 3.记载更多 -->
      <div class="more-btn">
        <mt-button type="danger" size="large" plain @click="moreComments">更多</mt-button>
      </div>
  </div>
</template>
<!-- 脚本控制 -->
<script>
    /* 公共组件 */
    import common from '../../kits/common.js';
    /* 提示信息 */
    import {Toast} from 'mint-ui';
    /* 模拟的静态数据 */
    import postRes from '../../../statics/data/comment/post.json';
    import listRes from '../../../statics/data/comment/list.json';
    import moreRes from '../../../statics/data/comment/more.json';
    export default {
        data(){
            return {
                /* 分页参数 */
                pageIndex:1,
                /* 评论内容 */
                comment:'',
                /* 评论列表 */
                commentList:[]
            }
        },
        props:['id'],
        created(){
            this.getCommentList();
        },
        methods:{
            postComment(){
                if(this.comment.trim().length<=0){
                    Toast('评论内容不能为空！');
                    return;
                }
                var url = common.apidomain + '/api/postComment/'+this.id;
                console.info('请求地址：'+url);
                console.info('评论内容：'+this.comment);
                /*
                this.$http.post(url, {
                    comment: this.comment
                }, {
                    emulateJSON: false
                }).then(resp => {
                    console.info(resp.body);
                    this.comment = '';
                    if (resp.body.status == 0) {
                        Toast(resp.body.data);
                    } else {
                        console.info('出错了');
                    }
                }, resp => {
                    console.error('系统繁忙，请稍后再试！');
                });
                */
                /** 提示评论提交成 */
                Toast(postRes.data);
                this.commentList = [{
                    "username": "匿名用户",
                    "cTime": new Date(),
                    "content": this.comment
                }].concat(this.commentList);
                /**清空评论内容 */
                this.comment = '';
            },
            getCommentList(pageIndex){
                pageIndex = pageIndex || 1;
                // 接口待定 GET方法获取评论列表
                this.commentList = this.commentList.concat(listRes.data);
            },
            moreComments(){
                this.pageIndex++ ;
                //getCommentList(this.pageIndex);
                this.commentList = this.commentList.concat(moreRes.data);
            }
        }
    }
</script>
<!-- 样式 -->
<style scoped>
/*  */
#postcomment{
    padding:5px;
}
.p{
    height: 1px;
    width:100%;
    border-bottom: 1px solid rgba(0,0,0,0.3);
}
#commentList{
    padding:5px;
}
.title{
    padding: 5px;
    color: #6d6d72;
    font-size: 15px;
    background-color: rgba(0,0,0,0.1);
}
.more-btn{
    padding-bottom:5px;
}
</style>
