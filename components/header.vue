<template>
  <div class="header">
    <NuxtLink to="/">
      <img
          class="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
      />
    </NuxtLink>

    <div class="header__search">
      <input class="header__searchInput" type="text" />
      <IconSearch class="header__searchIcon" />
    </div>

    <div class="header__nav">
      <NuxtLink :to="!user &&'/login'">
      <div onClick={handleAuthenticaton} class="header__option">
        <span class="header__optionLineOne">Hello {{ !user ? 'Guest' : user.email }}</span>
        <span class="header__optionLineTwo">{{ user ? 'Sign Out' : 'Sign In' }}</span>
      </div>
      </NuxtLink>

      <NuxtLink to='/orders'>
        <div class="header__option">
          <span class="header__optionLineOne">Returns</span>
          <span class="header__optionLineTwo">& Orders</span>
        </div>
      </NuxtLink>


      <div class="header__option">
        <span class="header__optionLineOne">Your</span>
        <span class="header__optionLineTwo">Prime</span>
      </div>

      <NuxtLink to="/checkout">
        <div class="header__optionBasket">
          <IconShop  class="icon__shop"/>
          <span class="header__optionLineTwo header__basketCount">
              {{ basket?.length }}
            </span>
        </div>
      </NuxtLink>
    </div>
  </div>

</template>

<script setup>
// const [{ basket, user }, dispatch] = useStateValue();

import IconSearch from "./IconSearch";
import IconShop from "./IconShop";

const handleAuthenticaton = () => {
  if (user) {
    auth.signOut();
  }
}

</script>

<style scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__logo {
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
}

.header__search {
  display: flex;
  flex: 1;
  align-items: center;
  height: 100%;
}

.header__searchInput {
  height: 50%;
  padding: 10px;
  border: none;
  width: 100%;
}

.header__searchIcon {
  padding: 5px;
  height: 50% !important;
  background-color: #cd9042;
}

.header__optionLineOne {
  font-size: 10px;
}

.header__optionLineTwo {
  font-size: 13px;
  font-weight: 800;
}

.header__optionBasket {
  display: flex;
  align-items: center;
  color: white;
}

.header__basketCount {
  margin-left: 10px;
  margin-right: 10px;
}
.icon__shop{
  color: white;
  width: 20px ;
  height: 20px ;

  /*background-color: red;*/
}
.header__nav {
  display: flex;
  justify-content: space-evenly;
}

.header__option {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
}


</style>
