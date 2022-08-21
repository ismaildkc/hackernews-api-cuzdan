<template>
  <div class="quotes d-flex align-items-center justify-content-center">
    <h2 v-for="(item, index) in titles" :key="index">"{{ item }}"</h2>
  </div>
</template>

<script>
export default {
  props: ["titles"],
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
      }, 3000);
    }
  },
  mounted() {
    this.shiftTitles();
  }
}
</script>

<style lang="scss" scoped>
.quotes {
  font-family: 'Cormorant', serif;
  min-height: calc(2.75rem * 2);
  margin-top: 2.75rem;
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
</style>