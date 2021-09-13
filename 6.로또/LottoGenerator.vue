<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
    </div>
    <div>보너스!</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo">한 번 더!</button>
  </div>
</template>

<script>
import LottoBall from "./LottoBall";

function getWinNumbers() {
  const shuffle = []
  const candidate = Array(45).fill().map((value, index) => index + 1)

  while (candidate.length > 0) {
    // 1 ~ 45까지 임의의 수를 index로 활용하여 candidate에서 slice 이후 shuffle에 push
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0])
  }

  const bonusNumber = shuffle[shuffle.length - 1]
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c) // ascending sort

  return [...winNumbers, bonusNumber]
}

export default {
  components: {
    LottoBall,
  },
  data() {
    return {
      winNumbers: getWinNumbers(),
      winBalls: [],
      redo: false,
      bonus: false,
    }
  },
  methods: {
  },
  mounted() {
    for (let i = 0; i < this.winNumbers.length - 1; i++) {
      setTimeout(() => {
        this.winBalls.push(this.winNumbers[i])
      }, (i + 1) * 1000)
    }

    setTimeout(() => {
      this.bonus = this.winNumbers[6]
      this.redo = true
    }, 7000)
  },
  beforeDestroy() {

  },
  watch: {},
}

</script>

<style scoped>

</style>
