<template>
    <div>
    <h1>{{msg}} - {{$route.params.username}}</h1>
    </div>
</template>

<script>
export default {
  name: "Hi1",
  data() {
    return {
      msg: "Welcome to Hi1 Page"
    };
  }
};
</script>

<style scoped>

</style>



