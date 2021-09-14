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
      this.$root.$data.turn = this.$root.$data.turn === 'O' ? 'X' : 'O'
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
