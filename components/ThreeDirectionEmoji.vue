<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getEmoji } from '../gtEmoji'

const emojiBox = ref()
let timer: ReturnType<typeof setInterval>
const props = defineProps<{
	random?: boolean
}>()
const genEmoji = () => {
	emojiBox.value.style = `--emoji: " ${getEmoji()} "`
}


onMounted(() => {
	if (props.random) {
		timer = setInterval(genEmoji, 3000)
	}
})

onBeforeUnmount(() => {
	clearInterval(timer)
})
</script>
<template>
  <div class="three-direction-emoji">
		<div class="emoji-box" ref="emojiBox">
			<div class="aa"></div>
			<div class="bb"></div>
			<div class="cc"></div>
			<div class="dd"></div>
			<div class="ee"></div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.three-direction-emoji {
	height: 100%;
	position: relative;
	background: conic-gradient(#fff, #fff 90deg, #ddd 90deg, #ddd 180deg, #fff 180deg, #fff 270deg, #ddd 270deg);
	background-size: 50px 50px;
	.emoji-box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 200px;
		height: 200px;
		transform-origin: 50% 50%;
		transform-style: preserve-3d;
		perspective: 2000px;
		animation: emojiRotate 1.5s  alternate infinite ease-in-out;
	}
	.aa, .bb, .cc, .dd, .ee {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		font-size: 200px;
		transform: translate(0, -50%) rotateY(0deg);
		transform-style: preserve-3d;
		// transform-origin: 50% 50%;
		&::before, &::after {
			content: var(--emoji, '\1f600');
			position: absolute;
			top: 0;
			left: 0;
			border: none;
		}
	}
	.aa::before {
		transform: translateZ(0);
	}
	.bb::before {
		transform: translateZ(-4px);
	}
	.cc::before {
		transform: translateZ(-8px);
	}
	.dd::before {
		transform: translateZ(-12px);
	}
	.ee::before {
		transform: translateZ(-16px);
	}
	.aa::after {
		transform: translateZ(4px);
	}
	@keyframes emojiRotate {
		0% {
			transform: translate(-50%, -50%) rotateY(45deg);
		}
		100% {
			transform: translate(-50%, -50%) rotateY(-45deg);
		}
	}
}
</style>