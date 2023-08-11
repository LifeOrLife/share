<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getEmoji } from '../gtEmoji'

const init = String.fromCodePoint(0x1f600)
const emoji = ref<string>(init)

const changeEmoji = () => {
	emoji.value = getEmoji()
}

let interval: ReturnType<typeof setInterval>

onMounted(() => {
	interval = setInterval(changeEmoji, 1000)
})
onBeforeUnmount(() => {
	clearInterval(interval)
})
</script>
<template>
  <div class="emoji" style="font-size: 30px;">{{ emoji }}</div>
</template>