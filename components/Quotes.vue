<template>
<div class="quotes">
  <span class="quotes-title">{{ title }}</span>
  <div class="quotes-content d-flex align-items-center justify-content-center">
    <h2 v-for="(item, index) in titles" :key="index">"{{ item }}"</h2>
  </div>
</div>
</template>

<script>
export default {
  props: ["titles", "title"],
  methods: {
    shiftTitles() {
      let current = 0;
      let slides = document.querySelectorAll("h2");
      
      setInterval(function () {
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.opacity = 0;
        }
        current = (current != slides.length - 1) ? current + 1 : 0;
        slides[current].style.opacity = 1;
      }, 2000);
    }
  },
  mounted() {
    !!this.titles.length && this.shiftTitles();
  }
}
</script>

<style lang="scss" scoped>
.quotes{
  margin-top: 2.75rem;
  text-align: center;
  &-title{
    font-size: 1.3rem;
  }
  
  &-content {
    font-family: 'Cormorant', serif;
    min-height: calc(2.75rem * 2);
    margin-top: .75rem;
    margin-bottom: 2.75rem;
    position: relative;
  
    h2 {
      font-size: 2.75rem;
      color: var(--primaryDark);
      text-align: center;
      position: absolute;
      transition: var(--slow);
      opacity: 0;
    }
  }
}
</style>