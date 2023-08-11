<script setup lang="ts">
import { ref, reactive } from 'vue'
import MyButton from './MyButton.vue'

const list =  reactive([
  { code: '1f600', emoji: String.fromCodePoint(0x1f600) },
  { code: '1f601', emoji: String.fromCodePoint(0x1f601) },
  { code: '1f602', emoji: String.fromCodePoint(0x1f602) },
  { code: '1f603', emoji: String.fromCodePoint(0x1f603) }
])
const code = ref('')
const addEmoji = () => {
  if (code.value) {
    list.push({
      code: code.value,
      emoji: String.fromCodePoint(parseInt(code.value, 16))
    })
    code.value = ''
  }
}
</script>
<template>
  <div class="emoji-code-list">
    <div class="emoji-code-item" v-for="item in list" :key="item.code">
      <span>{{ `${item.code}   =>    ${item.emoji}` }}</span>
    </div>
    <input type="text" v-model="code" class="code" />
    <MyButton @click="addEmoji">添加</MyButton>
  </div>
</template>
<style scoped lang="scss">
.emoji-code-list {
  padding: 15px;
  .emoji-code-item {
    margin-bottom: 10px;
  }
  .code {
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;
    margin-bottom: 10px;
  }
}
</style>