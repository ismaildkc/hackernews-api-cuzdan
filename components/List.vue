<template>
  <div class="table d-flex flex-column">
    <p v-html="title"></p>
    <div class="table-row d-flex flex-row flex-wrap" v-for="(item, index) in _array" :key="index">
      <span>{{item.word}}</span>
      <span>{{item.density}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["_array", "title"]
}
</script>

<style lang="scss" scoped>
.table{
  padding-bottom: 3rem;

  &-row{
    span{
      padding: 1.5rem;
      border: 1px solid #dadada;
      margin-left: -1px;
      margin-bottom: -1px;
      min-width: 100px;
      display: flex;
      // align-items: center;
      justify-content: center;

      &:first-child{
        justify-content: start;
        min-width: 180px;
      }
    }
  }
}
</style>