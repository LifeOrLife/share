<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getEmoji } from '../gtEmoji'

const props = defineProps<{
	random?: boolean,
}>()

const emojiEl = ref()
let currentTranslate = 0;
let lastTranalste = 0;
let diff = 0;
let reqTimer: ReturnType<typeof requestAnimationFrame>

const bgClassName = ref('a')
const list = 'abcedf'
const aniFun = () => {
	const style = window.getComputedStyle(emojiEl.value, null)
	currentTranslate = parseInt(style.translate.split(' ')[1], 10)
	if (diff > 0 && (currentTranslate - lastTranalste) < 0) {
		emojiEl.value.style = `--emoji: " ${getEmoji()} "`
		if (props.random) {
			bgClassName.value = list[Math.floor(Math.random() * list.length)]
		}
	}
	reqTimer = window.requestAnimationFrame(aniFun)
	diff = currentTranslate - lastTranalste
	lastTranalste = currentTranslate
}

onMounted(() => {
	reqTimer = window.requestAnimationFrame(aniFun)
})

onBeforeUnmount(() => {
	window.cancelAnimationFrame(reqTimer)
})

</script>

<template>
  <div class="complete-emoji" :class="bgClassName">
		<div class="emoji-con" ref="emojiEl">
			<div class="fir"></div>
			<div class="two"></div>
			<div class="thr"></div>
		</div>
		<div class="shadow"></div>
  </div>
</template>
<style lang="scss" scoped>
.complete-emoji {
	height: 100%;
	position: relative;
	&.a {
		background: conic-gradient(#fff, #fff 90deg, #ddd 90deg, #ddd 180deg, #fff 180deg, #fff 270deg, #ddd 270deg);
		background-size: 50px 50px;
	}
	&.b {
    background-image: 
    linear-gradient(0deg, transparent 9%, 
            rgba(255, 255, 255, .2) 10%, rgba(255, 255, 255, .2) 12%, transparent 13%, transparent 29%, 
            rgba(255, 255, 255, .1) 30%, rgba(255, 255, 255, .1) 31%, transparent 32%, transparent 49%, 
            rgba(255, 255, 255, .1) 50%, rgba(255, 255, 255, .1) 51%, transparent 52%, transparent 69%, 
            rgba(255, 255, 255, .1) 70%, rgba(255, 255, 255, .1) 71%, transparent 72%, transparent 89%,
            rgba(255, 255, 255, .1) 90%, rgba(255, 255, 255, .1) 91%, transparent 92%, transparent),
    linear-gradient(90deg, transparent 9%, 
            rgba(255, 255, 255, .2) 10%, rgba(255, 255, 255, .2) 12%, transparent 13%, transparent 29%, 
            rgba(255, 255, 255, .1) 30%, rgba(255, 255, 255, .1) 31%, transparent 32%, transparent 49%, 
            rgba(255, 255, 255, .1) 50%, rgba(255, 255, 255, .1) 51%, transparent 52%, transparent 69%, 
            rgba(255, 255, 255, .1) 70%, rgba(255, 255, 255, .1) 71%, transparent 72%, transparent 89%,
            rgba(255, 255, 255, .1) 90%, rgba(255, 255, 255, .1) 91%, transparent 92%, transparent);
    background-size:50px 50px;
	}
	&.c {
    background-image: linear-gradient(rgba(0, 255, 0, .7) .1em, transparent .1em), linear-gradient(90deg, rgba(0, 255, 0, .7) .1em, transparent .1em);
    background-size: 3em 3em;
	}
	&.d {
			background: repeating-linear-gradient(45deg, #444 0 20px, #06b79f 0 40px);
	}
	&.e {
			background: repeating-radial-gradient(circle at 50% 50%, #fff, #9C27B0 20px, #FF5722 21px, #9C27B0 40px, #000000 41px, #256b8f 60px, #fff 61px);
	}
	&.f {
			background: conic-gradient(#333 0 45deg, #fff 0 360deg);
			background-position: -50% -50%;
			background-size: 30px 30px;
	}
	&.g {
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 3s ease infinite;
    }
	}
	&.h {
			background: linear-gradient(30deg, #000 0, #000 49.9%, #fff 50%);
	}
	&.i {
			background: #000;
			&::before,
			&::after {
					content: '';
					position: absolute;
					inset: 0 50% 0 0;
					background: linear-gradient(
							45deg,
							#00f376 10%,
							transparent 10%,
							transparent 50%,
							#00f376 50%,
							#00f376 60%,
							transparent 60%,
							transparent 100%
				);
				background-size: 40px 40px;
				animation: move 0.3s linear infinite;
			}
			&::after {
					inset: 0 0 0 50%;
					transform: rotateY(180deg);
			}
	}
	&.j {
			&::before {
					content: "";
					position: absolute;
					inset: 0;
					background: conic-gradient(#fff 0, transparent 30%, #fff);
					
			}
	}
	&.k {
			&::before {
					content: "";
					position: absolute;
					inset: -100vmax;
					background: conic-gradient(#fff 0, transparent 45%, #fff);
					animation: bgrotate 2s infinite linear;
			}
	}
	.shadow {
		position: absolute;
		left: 50%;
		top: 350px;
		width: 100px;
		height: 50px;
		margin-left: -25px;
		border-radius: 50%;
		background: rgba(0, 0, 0, .5);
		animation: shadow .6s alternate infinite ease-in-out;
	}
	.emoji-con {
		position: relative;
		// left: 50%;
		// margin-left: -100px;
		width: 200px;
		height: 200px;
		margin:  auto;
		perspective: 2000px;
		transform-style: preserve-3d;
		font-size: 200px;
		animation: rotate 2s alternate infinite ease-in-out, fall .6s alternate infinite cubic-bezier(.22, .16, .04, .99) forwards;
		&::before,&::after {
			content: var(--emoji, '\1f600');
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			width: 200px;
			height: 200px;
		}
		&::after {
			transform: translate(-50%,-50%) translateZ(4px);
		}
		.fir,.two,.thr {
			position: absolute;
			inset: 0;
			transform-style: preserve-3d;
		}
		.fir::before,
		.fir::after,
		.two::before,
		.two::after,
		.thr::before,
		.thr::after {
			content: var(--emoji, '\1f600');
			position: absolute;
			top: 50%;
			left: 50%;
			width: 200px;
			height: 200px;
		}
		.fir::before {
			transform: translate(-50%,-50%) translateZ(-8px);
			opacity: .95;
		}
		.fir::after {
			transform: translate(-50%,-50%) translateZ(-12px);
			opacity: .9;
		}
		.two::before {
			transform: translate(-50%,-50%) translateZ(-16px);
			opacity: .85;
		}
		.two::after {
			transform: translate(-50%,-50%) translateZ(-20px);
			opacity: .8;
		}
		.thr::before {
			transform: translate(-50%,-50%) translateZ(-24px);
			opacity: .75;
		}
		.thr::after {
			transform: translate(-50%,-50%) translateZ(-28px);
			opacity: .7;
		}
	}
	@keyframes rotate {
		0% {
			transform: rotateY(-45deg);
		}
		100% {
			transform: rotateY(45deg);
		}
	}
	@keyframes shadow {
		0% {
			scale: 1.2;
		}
		40% {
			opacity: .7;
		}
		100% {
			scale: .5;
			opacity: .4;
		}
	}
	@keyframes fall {
		0% {
			scale: 1.25 .0.75;
			translate: 0 150px;
		}
		25% {
			scale: 1 1;
		}
		100% {
			scale: 1 1;
			translate: 0 0;
		}
	}
}
</style>