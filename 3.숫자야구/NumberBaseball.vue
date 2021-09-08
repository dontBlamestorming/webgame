<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit="onSubmitForm">
      <input type="number" maxlength="4" ref="answer" v-model="value">
      <button type="submit">입력</button>
    </form>
    <div>시도 : {{}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      result: ''
    }
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault()
    }
  }
}
</script>

<style></style>