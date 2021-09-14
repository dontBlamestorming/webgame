<template>
  <div>
    <div>{{turn}}님의 턴입니다.</div>
    <table-component :table-data="tableData"></table-component>
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
    }
  }
}
</script>

<style scoped>

</style>