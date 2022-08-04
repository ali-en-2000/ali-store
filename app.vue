<template>
  <div>
    <p>hi</p>
    <button class="button button-primary" @click="sinUp">sin UP</button>
    <button class="button button-primary" @click="sinIn">sin in</button>
    <button class="button button-primary" @click="sinOut">sin out</button>
    <div>
      {{credantial}}
    </div>
  </div>
</template>

<script setup>
const credantial = ref()
const sinUp = async () => {
  const email = "aldi@gmail.com";
  const password = "123456";
  credantial.value = await createUser(email, password)
}
const sinIn = async () => {
  const email = "ali@gmail.com";
  const password = "123456";
  credantial.value = await signInUser(email, password)
}
const sinOut = async () => {
  credantial.value = await signOutUser()
}
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>