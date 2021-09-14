<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
export default {
  props: {
    rowData: Array,
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      const rootData = this.$root.$data

      this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn)
      rootData.turn = rootData.turn === 'O' ? 'X' : 'O'
    }
  }
}
</script>

<style scoped>
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
