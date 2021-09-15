import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(vuex)

export const START_GAME = "START_GAME"
export const OPEN_CELL = "OPEN_CELL"
export const CLICK_MINE = "CLICK_MINE"
export const FLAG_CELL = 'FLAG_CELL'
export const QUESTION_CELL = 'QUESTION_CELL'
export const NORMALIZE_CELL = 'NORMALIZE_CELL'


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
    [START_GAME](state) {},
    [OPEN_CELL](state) {},
    [CLICK_MINE](state) {},
    [FLAG_CELL](state) {},
    [QUESTION_CELL](state) {},
    [NORMALIZE_CELL](state) {},
  },
  getters: {}
})