<template>
  <div>
    <div>{{turn}}님의 턴입니다.</div>
    <table-component :table-data="tableData"></table-component>
    <div v-if="winner">{{winner}}님의 승리!</div>
  </div>
</template>

<script>
import TableComponent from './TableComponent'

export default {
  components: {
    TableComponent,
  },
  data() {
    return {
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      turn: 'O',
      winner: '',
    }
  }
}
</script>

<style scoped>

</style>