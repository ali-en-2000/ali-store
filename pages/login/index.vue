<template>
  <div class='login'>
    <NuxtLink to="/">
      <img
          class="login__logo"
          alt=""
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
      />
      </NuxtLink>
      <div class='login__container'>
      <h1 v-if="showRegisterForm">Sign-in</h1>
      <h1 v-if="!showRegisterForm">Sign-UP</h1>
        <VForm
            @submit="showRegisterForm?signIn:signUp"
            class="form">
          <h5>E-mail</h5>
          <VField class="field" type='text' placeholder="email" :rules="isRequired" name="email" v-model="form.email"/>
          <VErrorMessage name="email" class="help is-danger"/>

          <h5>Password</h5>
          <VField class="field" type='password' placeholder="password" :rules="isRequired" name="password" v-model="form.password"/>
          <VErrorMessage name="password" class="help is-danger"/>

          <h5 v-if="!showRegisterForm">confirm Password</h5>
          <VField class="field" v-if="!showRegisterForm" type='password' placeholder="confirm password" :rules="isRequired" name="confirmation" v-model="form.confirmPass"/>
          <VErrorMessage name="confirmation" class="help is-danger"/>

        <button v-if="showRegisterForm" @click="signIn" class='login__signInButton'>Sign In</button>
        <button v-if="!showRegisterForm" @click="signUp" class='login__signInButton'>Sign up</button>
        </VForm>
      <p>
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>

      <button @click="showRegisterForm=!showRegisterForm" class='login__registerButton'>
        <span v-if="showRegisterForm">Create your Amazon Account</span>
        <span v-else>sign in to your account</span>
      </button>
      <button @click="signOut">out</button>
    </div>
    <div>
      {{credantial}}
    </div>
  </div>
</template>

<script setup>

const form = {email: "", password: "", confirmPass: ""};

const showRegisterForm = ref(true);

const credantial = ref()


///////

const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return "This is required right now!";
};
//////
const signUp = async () => {
  console.log(form.email)
  credantial.value = await createUser(form.email, form.password)
}
const signIn = async () => {

  credantial.value = await signInUser(form.email, form.password)

  // credantial.value = await signInUser(form.email, form.password)
  // alert(credantial)
  //
  // form.email = ""
  // form.password = ""
}
const signOut = async () => {
  credantial.value = await signOutUser()
}

</script>
<style scoped>
.login {
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login__logo {
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
}

.login__container {
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
}

.login__container > h1 {
  font-weight: 500;
  margin-bottom: 20px;
}

.login__container > .form > h5 {
  margin-bottom: 5px;
}

.login__container > .form > .field {
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
}

.login__container > p {
  margin-top: 15px;
  font-size: 12px;
}

.login__signInButton {
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
}

.login__registerButton {
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
}


</style>
