<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon icon-font icon-shouyintai"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon icon-font icon-dianpu"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon icon-font icon-shangpin-"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon icon-font icon-huiyuan"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="icon icon-font icon-tongji"></i>
                <div>统计</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'leftNav',
    data(){
        return {

        }
    }
};
</script>

<style scoped>
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: royalblue;
  float: left;
  width: 5%;
}
.icon-font {
  font-size: 24px;
}

.left-nav ul {
  padding: 0px;
  margin: 0px;
}
.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
</style>


