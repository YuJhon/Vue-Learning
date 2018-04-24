<template>
    <div class="left-nav">
        <ul>
            <li>
                <div>
                    <i class="icon iconfont icon-shouyintai"></i>
                    <div>
                        <router-link to="/">首页</router-link>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <i class="icon iconfont icon-shouyintai"></i>
                    <div>
                        <router-link to="/pos">收银</router-link>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <i class="icon iconfont icon-dianpu"></i>
                    <div>
                        <router-link to="/shop">店铺</router-link>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <i class="icon iconfont icon-shangpin-"></i>
                    <div>
                        <router-link to="/goods">商品</router-link>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <i class="icon iconfont icon-huiyuan"></i>
                    <div>
                        <router-link to="/member">会员</router-link>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <i class="icon iconfont icon-tongji"></i>
                    <div>
                        <router-link to="/statistics">统计</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {};
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
.iconfont {
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

.left-nav a {
  text-decoration: none;
  color: #fff;
}
</style>


