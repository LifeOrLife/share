<script setup lang="ts">
import { ref, reactive } from 'vue'

const isShowMask = ref(false)
const showMask = (state: boolean) => {
	isShowMask.value = state
}
</script>
<template>
	<div class="emoji-text-illustrate">
		<h1>emoji表情说明</h1>
		<p>Emoji 表情的编码范围通常是指 Unicode 字符集中专门用来表示 Emoji 图形的范围，常见的范围是从 U+1f600 到 U+1F64F。</p>
		<div class="code-emoji">
			<div class="table">
				<p>以下是部分 Unicode 字符编码对应的 Emoji 表情展示: </p>
				<img src="/emoji-table.png" @click="showMask(true)" />
			</div>
		</div>
		<div class="mask-box" @click="showMask(false)" v-show="isShowMask">
			<img src="/emoji-table.png" class="full" />
		</div>
	</div>
</template>
<style scoped lang="scss">
.emoji-text-illustrate {
	.code-emoji {
		width: 100%;
	}
	.table {
		cursor: pointer;
	}
	.mask-box {
		position: fixed;
		inset: 0;
		z-index: 10;
		background: rgba(0, 0, 0, .4);
		display: flex;
		align-items: center;
		justify-content: center;
		.full {
			margin: 0 auto;
			max-width: 80%;
		}
	}
}
</style>