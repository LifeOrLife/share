<script setup lang="ts">

const emits = defineEmits(['click'])
const clickBtn = () => {
  emits('click')
}
</script>
<template>
  <button class="my-btn" @click="clickBtn">
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
.my-btn {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
}
</style>