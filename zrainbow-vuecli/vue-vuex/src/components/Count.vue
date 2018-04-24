<template>
  <div>
      <h2>{{msg}}</h2>
      <h3>{{$store.state.count}}</h3>
      <p>
          <button @click="$store.commit('add',10)" >+10</button>
          <button @click="$store.commit('reduce')">-1</button>
          <button @click="reduce">-1</button>
      </p>
      <p>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
      </p>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations,mapGetters,mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  store,
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapGetters(["count"]),
    ...mapActions(["addAction", "reduceAction"])
  }
};
</script>
