<template>
  <div>
    <td-component
        v-for="(cellData, index) in rowData"
        :key="index"
        :row-index="rowIndex"
        :cell-index="index">
    </td-component>
  </div>
</template>

<script>
  import TdComponent from './TdComponent'

  export default {
    components: {
      TdComponent,
    },
    props: {
      // rowData: Array,
      rowIndex: Number,
    },
    data() {
      return {
        parent: 'TrComponent',
      }
    },
    computed: {
      rowData() {
        return this.$store.state.tableData[this.rowIndex]
      }
    }
  }
</script>

<style></style>