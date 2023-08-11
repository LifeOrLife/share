<script setup lang="ts">
import { ref } from 'vue'
import MyButton from '../components/MyButton.vue'
import { getEmoji } from '../gtEmoji'

const code = ref('""')
const genEmoji = () => {
	code.value = getEmoji()
}
</script>
<template>
  <div class="gen-emoji">
		<div class="head">
			<slot name="head"></slot>
		</div>
		<div class="content-box">
			<div class="text-explain">
				<slot></slot>
			</div>
			<div class="code">
				<slot name="right"></slot>
				<div class="show-code">
					<MyButton @click="genEmoji">生成</MyButton>
					<span class="char">=></span>
					{{ code }}
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.gen-emoji {
	height: 100%;
	padding: 20px;
	background-image: linear-gradient(90deg, rgba(0, 255, 255, .2) 0, rgba(102, 204, 255, .1) 100%);
	.head {
		text-align: center;
		font-size: 2.25rem;
    line-height: 2.5rem;
		color: var(--slidev-theme-primary);
		margin-bottom: 15px;
	}
	.content-box {
		display: flex;
	}
	.code {
		width: 50%;
		.show-code {
			margin-top: 20px;
			display: flex;
			align-items: center;
			.char {
				margin: 0 30px;
			}
		}
	}
	.text-explain {
		width: 50%;
		padding: 15px;
		:deep(h1) {
			color: var(--slidev-theme-primary);
		}
		:deep(p) {
			background: #e7e6e6;
			padding: 10px;
		}
	}
}
</style>