
<template>
  <div class="checkout">
    <div class="checkout__left">
      <img
          class="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
      />

      <div>
        <h3>Hello, {{ user?.email }}</h3>
        <h2 class="checkout__title">Your shopping Basket</h2>

        {basket.map(item => (
        <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
        />
        ))}

      </div>
    </div>

    <div class="checkout__right">
      <Subtotal />
    </div>
  </div></template>

<script>
export default {}
</script>

<style scoped>
.checkout {
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
}

.checkout__ad {
  width: 100%;
  margin-bottom: 10px;
}

.checkout__title {
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
}

</style>