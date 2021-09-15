<template>
  <td @click="onClickTd(cellData)">{{ cellData }}</td>
</template>

<script>
import { SET_WINNER, CLICK_CELL, CHANGE_TURN, RESET_GAME, NO_WINNER } from "./store";

export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd(cellData) {
      let win = false

      if (cellData) return

      this.$store.commit(CLICK_CELL, {
        row: this.rowIndex,
        cell: this.cellIndex
      })

      if (this.tableData[this.rowIndex][0] === this.turn
          && this.tableData[this.rowIndex][1] === this.turn
          && this.tableData[this.rowIndex][2] === this.turn) {
        win = true
      }

      if (this.tableData[0][this.cellIndex] === this.turn
          && this.tableData[1][this.cellIndex] === this.turn
          && this.tableData[2][this.cellIndex] === this.turn) {
        win = true
      }

      if (this.tableData[0][0] === this.turn
          && this.tableData[1][1] === this.turn
          && this.tableData[2][2] === this.turn) {
        win = true
      }

      if (this.tableData[0][2] === this.turn
          && this.tableData[1][1] === this.turn
          && this.tableData[2][0] === this.turn) {
        win = true
      }

      if (win) {
        this.$store.commit(SET_WINNER, this.turn)
        this.$store.commit(RESET_GAME)
      } else { // 무승부
        let all = true // all이 true면 무승부라는 뜻

        this.tableData.forEach((row) => { // 무승부 검사
          row.forEach((cell) => {
            if (!cell) {
              all = false
            }
          })
        })

        if (all) { // 무승부
          this.$store.commit(NO_WINNER)
          this.$store.commit(RESET_GAME)
        } else {
          this.$store.commit(CHANGE_TURN)
        }
      }
    }
  }
}
</script>