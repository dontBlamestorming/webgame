<template>
  <div>
    <mine-form></mine-form>
    <div>{{ timer }}</div>
    <table-component></table-component>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from "./store"
import TableComponent from './TableComponent'
import MineForm from './MineForm'

export default {
  components: {
    TableComponent,
    MineForm,
  },
  store,
  computed: {
    ...mapState(['timer', 'result'])
  },
  methods: {},
}

</script>

<style scoped>

</style>