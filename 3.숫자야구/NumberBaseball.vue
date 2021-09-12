<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onSubmitForm">
      <input type="number" minlength="4" maxlength="4" ref="answer" v-model="value">
      <button type="submit">입력</button>
    </form>
    <div>시도 : {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const array = []

  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen)
  }

  return array
}

export default {
  data() {
    return {
      answer: getNumbers(), // ex) [1, 3, 5, 2]
      tries: [],
      value: '',
      result: ''
    }
  },
  methods: {
    onSubmitForm() {
      if (this.value === this.answer.join("")) {
        this.tries.push({
          try: this.value,
          result: '홈런'
        })
        alert('게임을 다시 실행합니다.')
        this.result = '홈런'
        this.value = ''
        this.answer = getNumbers()
        this.tries = []
        this.$refs.answer.focus()
      } else {
        let strike = 0
        let ball = 0
        const answerArray = this.value.split('').map(v => parseInt(v))

        if (this.tries.length >= 9) {
          this.result = `10번 넘게 돌려서 실패! 답은 ${this.answer.join(',')}입니다.`
          alert('게임을 다시 시작합니다.')
          this.value = ''
          this.answer = getNumbers()
          this.tries = []
          this.$refs.answer.focus()
        }

        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.answer[i]) {
            // 정확한 답은 아니지만 개별 숫자와 그 자릿수 모두 정답인 경우
            strike++;
          } else if (this.answer.includes(-answerArray[i])) {
            // 숫자만 정답과 동일한 경우
            ball++;
          }
        }

        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크, ${ball} 볼 입니다.`
        })
        this.value = ''
        this.$refs.answer.focus()
      }
    }
  }
}
</script>

<style></style>