<template>
  <div>
    <div>{{turn}}님의 턴입니다.</div>
    <table-component></table-component>
    <div v-if="winner">{{winner}}님의 승리!</div>
  </div>
</template>

<script>
import TableComponent from './TableComponent'
import store from "./store";

export default {
  store,
  components: {
    TableComponent,
  },
  computed: {
    turn() {
      return this.$store.state.turn
    },
    winner() {
      return this.$store.state.winner
    }
  }
}
</script>

<style scoped>

</style>