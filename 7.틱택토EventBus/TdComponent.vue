<template>
  <td @click="onClickTd(cellData)">{{cellData}}</td>
</template>

<script>
import EventBus from "./EventBus"

export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd(cellData) {
      EventBus.$emit('clickTd', this.rowIndex, this.cellIndex, cellData)
    }
  }
}
</script>