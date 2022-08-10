<template>
  <div class="product">
    <div class="product__info">
      <p>{{ title }}</p>
      <p class="product__price">
        <small>$</small>
        <strong>{{ price }}</strong>
      </p>
      <div  class="product__rating" >
        <span v-for="rate in rating">🌟</span>

      </div>

    </div>

    <img :src="image" alt=""/>

    <button @click="addToBasket">Add to Basket</button>
  </div>
</template>
<script setup>
const props = defineProps({
  price: Number,
  image: String,
  title: String,
  rating: Number,
})
// const password=props.rating


// const [{ basket, user }, dispatch] = useStateValue();
//
// import Search from "./search";
//
// const handleAuthenticaton = () => {
// if (user) {
// auth.signOut();
// }
// }

</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
}

.product__rating {
  display: flex;
}
.product > img {
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
}

.product > button {
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  cursor: pointer;
}

.product__price {
  margin-top: 5px;
}

.product__info {
  height: 100px;
  margin-bottom: 15px;
}

</style>