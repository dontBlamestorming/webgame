<template>
  <div>
    <div>당첨 숫자</div>
    <div class="ball" v-for="(number, index) in numbers" :key="index">{{ number }}</div>
    <div id="결과창">
      <lotto-ball v-for="(number, index) in numbers" :key="index">{{ number }}</lotto-ball>
    </div>
    <div>보너스!</div>
    <lotto-ball v-if="bonusNumber"></lotto-ball>
    <button v-if="redo">한 번 더!</button>
  </div>
</template>

<script>
let interval = null

export default {
  data() {
    return {
      redo: false,
      bonusNumber: false,
      numbers: [],
    }
  },
  methods: {
    genNumbers() {
      const randomNumber = Math.floor(Math.random() * 45) + 1
      this.numbers.push(randomNumber)
    }
  },
  mounted() {
    interval = setInterval(() => {
      if (this.numbers.length < 6) {
        this.genNumbers()
      } else {
        clearInterval(interval)
      }
    }, 1500)
  },
  beforeDestroy() {

  },
  watch: {},
}

</script>

<style scoped>
.ball {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>
