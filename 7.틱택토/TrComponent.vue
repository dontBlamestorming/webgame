<template>
  <div>
    <td-component
        v-for="(cellData, index) in rowData"
        :key="index"
        :row-data="rowData"
        :row-index="rowIndex"
        :cell-data="cellData"
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
      rowData: Array,
      rowIndex: Number,
    },
    data() {
      return {
        parent: 'TrComponent',
      }
    }
  }
</script>

<style></style>