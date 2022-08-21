<template>
  <header class="header d-flex align-items-center">
    <nav class="container header-nav">
      <NuxtLink class="header-nav-link" to="/">NEWEST 25 STORIES</NuxtLink>
      <NuxtLink class="header-nav-link" to="/topstories">TOP RATED WRITERS</NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss">
.header{
  width: 100vw;
  height: 120px;
  background-color: #fff;
  border-bottom: 1px solid #76604817;
  z-index: 1;
  

  &-nav{

    &-link{
      padding: 5px 15px;
      font-size: 0.85rem;
      font-weight: 600;
      transition: var(--slow);
      &:hover{
        color: #00c58e;
      }

      &.nuxt-link-exact-active{
        color: #00c58e;      
      }
    }
  }

}
</style>