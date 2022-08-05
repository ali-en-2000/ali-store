<template>
  <div>
    <div>
      <nuxt-link to="/secret">go to secret page</nuxt-link>
    </div>
    <button class="button button-primary" @click="sinIn" v-if="!firebaseUser">sin in</button>
    <button class="button button-primary" @click="sinOut" v-if="firebaseUser">sin out</button>
    <div v-if="firebaseUser">

      <client-only>
    <pre>
      {{ firebaseUser }}
    </pre>
      </client-only>
    </div>
    <div v-if="!firebaseUser">
      user is sign out
    </div>

  </div>
</template>

<script setup>


const firebaseUser = useFirebaseUser()

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
</style>