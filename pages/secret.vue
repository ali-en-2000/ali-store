<template>
  <div>
    secret

    <div v-if="firebaseUser">

      <client-only>
    <pre>
      {{ firebaseUser }}
    </pre>
      </client-only>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const firebaseUser = useFirebaseUser()

</script>
