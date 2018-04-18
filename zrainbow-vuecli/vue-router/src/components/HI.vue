<template>
    <div>
        <h1>{{msg}}</h1>
        <br>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "Hi",
  data() {
    return {
      msg: "Welcome to Hi Page"
    };
  }
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>



