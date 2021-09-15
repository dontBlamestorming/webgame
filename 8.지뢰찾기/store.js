import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const START_GAME = "START_GAME"
export const OPEN_CELL = "OPEN_CELL"
export const CLICK_MINE = "CLICK_MINE"
export const FLAG_CELL = 'FLAG_CELL'
export const QUESTION_CELL = 'QUESTION_CELL'
export const NORMALIZE_CELL = 'NORMALIZE_CELL'

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0, // 0 이상이면 다 opened
}

const plantMine = (row, cell, mine) => {
  console.log(
    "Start!",
    "ROW : " + row,
    "CELL : " + cell,
    "COUNT OF MINES : " + mine
  )
  const shuffle = []
  const data = []

  const candidate = Array(row * cell).fill().map((arr, i) => i)

  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]

    shuffle.push(chosen)
  }

  for (let i = 0; i < row; i++) {
    const rowData = []
    data.push(rowData)
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL)
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell)
    const hor = shuffle[k] % cell
    data[ver][hor] = CODE.MINE
  }

  console.log("Mine Map", data)
  return data
}

export default new Vuex.Store({
  state: {
    tableData: [],
    data: {
      row: 0,
      cell: 0,
      mine: 0,
    },
    timer: 0,
    result: '',
  },
  mutations: {
    [START_GAME](state, { row, cell, mine }) {
      state.data = {
        row,
        cell,
        mine,
      }
      state.tableData = plantMine(row, cell, mine)
      state.timer = 0
    },
    [OPEN_CELL](state) {},
    [CLICK_MINE](state) {},
    [FLAG_CELL](state) {},
    [QUESTION_CELL](state) {},
    [NORMALIZE_CELL](state) {},
  },
  getters: {}
})