<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('rock')">바위</button>
      <button @click="onClickButton('scisoors')">가위</button>
      <button @click="onClickButton('paper')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}점</div>
  </div>
</template>

<script>
let interval = null
const rspCoords = {
  rock: '0',
  scisoors: '-142px',
  paper: '-284px',
}
const scores = {
  rock: 0,
  scisoors: 1,
  paper: -1
}
const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(v => v[1] === imgCoord)[0]
}

export default {
  data() {
    return {
      imgCoord: rspCoords.rock,
      result: '',
      score: 0,
    }
  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`
      }
    }
  },
  methods: {
    onClickButton(choice) {
      clearInterval(interval)

      const myScore = scores[choice]
      const cpuScore = scores[computerChoice(this.imgCoord)]
      const diff = myScore - cpuScore

      if (diff === 0) {
        this.result = '비겼습니다.'

      } else if ([-1, 2].includes(diff)) {
        this.result = '이겼습니다.'
        this.score += 1

      } else {
        this.result = '졌습니다.'
        this.score -= 1
      }

      setTimeout(() => {
        interval = setInterval(() => {
          if (this.imgCoord === rspCoords.rock) {
            this.imgCoord = rspCoords.scisoors
          } else if (this.imgCoord === rspCoords.scisoors) {
            this.imgCoord = rspCoords.paper
          } else if (this.imgCoord === rspCoords.paper) {
            this.imgCoord = rspCoords.rock
          }
        }, 100)
      }, 1000)
    }
  },
  mounted() {
    interval = setInterval(() => {
      if (this.imgCoord === rspCoords.rock) {
        this.imgCoord = rspCoords.scisoors
      } else if (this.imgCoord === rspCoords.scisoors) {
        this.imgCoord = rspCoords.paper
      } else if (this.imgCoord === rspCoords.paper) {
        this.imgCoord = rspCoords.rock
      }
    }, 100)
  },
  beforeDestroy() {
    clearTimeout(interval)
  }
}

</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
