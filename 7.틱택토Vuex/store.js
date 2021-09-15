import Vue from 'vue'
import Vuex from 'vuex'

export const SET_WINNER = 'SET_WINNER'
export const CLICK_CELL = 'CLICK_CELL'
export const CHANGE_TURN = 'CHANGE_TURN'
export const RESET_GAME = 'RESET_GAME'
export const NO_WINNER = 'NO_WINNER'

export default new Vuex.Store({
  state: {
    tableData: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    turn: 'O',
    winner: '',
  },
  mutations: {
    // 모두 onClickTd 안에 있었던 로직들
    [SET_WINNER](state, winner) {
      state.winner = winner
    },
    [CLICK_CELL](state, {row, cell}) {
      Vue.set(state.tableData[row], cell, state.turn)
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === 'O' ? 'X' : 'O'
    },
    [RESET_GAME](state) {
      state.turn = 'O'
      state.tableData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]
    },
    [NO_WINNER](state) {
      state.winner = ''
    }
  },
  getters: {},
  actions: {},
})