<template>
  <div class="loader loader--style7" title="6">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;"
      xml:space="preserve">
      <rect x="0" y="0" width="4" height="20" fill="#333">
        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" dur="0.6s"
          repeatCount="indefinite" />
      </rect>
      <rect x="7" y="0" width="4" height="20" fill="#333">
        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s"
          repeatCount="indefinite" />
      </rect>
      <rect x="14" y="0" width="4" height="20" fill="#333">
        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" dur="0.6s"
          repeatCount="indefinite" />
      </rect>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.loader{
  margin: 0 0 2em;
  height: 100px;
  width: 100%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  svg path,
  svg rect{
    fill: var(--primaryDark)
  }
}
</style>