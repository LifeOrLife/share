<script setup lang="ts">
import { ref, computed } from 'vue'
import MyButton from './MyButton.vue'

const bookBox = ref()
const basePerspective = ref(1000)
const addAnimation = ref(false)

const perspectiveValue = computed(() => {
	return `${basePerspective.value}px`
})
const changePerspective = (type: 'add' | 'reduce') => {
	if (type === 'add') {
		basePerspective.value += 100
	} else {
		basePerspective.value -= 100
	}
}

const switchAnimation = (s: 'running' | 'paused') => {
	Array.from<HTMLElement>(bookBox.value.children).forEach((item) => {
		item.style.animationPlayState = s
	})
}

const startOrStop = () => {
	if (!addAnimation.value) {
		addAnimation.value = true
		switchAnimation('running')
	} else {
		addAnimation.value = false
		switchAnimation('paused')
	}
}

</script>

<template>
	<div class="three-direction">
		<div class="p">
			<div class="e" ref="bookBox">
				<div class="bg one"></div>
				<div class="bg two"></div>
				<div class="bg three"></div>
				<div class="bg four"></div>
				<div class="bg five"></div>
			</div>
		</div>
		<div class="ope-text">
			<div class="ope">
				<MyButton @click="startOrStop">{{ addAnimation ? '停止' : '开始' }}</MyButton>
				<MyButton @click="changePerspective('add')">perspective+100</MyButton>
				<MyButton @click="changePerspective('reduce')">perspective-100</MyButton>
				<div>当前perspective值： {{ perspectiveValue }} </div>
			</div>
			<p class="bg-c">
				<b>Perspective:</b> CSS 属性 perspective 指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。z>0 的三维元素比正常大，而 z &gt; 0 时则比正常小，大小程度由该属性的值决定。
			</p>
			<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective" target="_blank">Perspective属性说明</a>
		</div>
	</div>
</template>
<style scoped lang="scss">
.three-direction {
	display: flex;
	.p,.ope-text {
		flex: 1;
	}
	.ope-text {
		padding: 10px;
		.my-btn {
			margin-right: 10px;
		}
		.bg-c {
			background: #e7e6e6;
			padding: 10px;
		}
	}
	.p {
		background: rgba(0, 255, 255, .1);
	}
	.e {
		position: relative;
		transform-style: preserve-3d;
		perspective-origin: 50% 50%;
		perspective: v-bind(perspectiveValue);
		height: 400px;
		// transform: v-bind(transformValue);
		.bg {
			width: 50%;
			transform: rotateY(180deg) translateZ(100px);
			height: 400px;
			background: rgba(0, 255, 255, .2);
			position: absolute;
			left: 0;
			top: 0;
			transform-origin: 100% 50%;
			animation: rotate 2s linear infinite;
			animation-play-state: paused;
			// &.animation {
			// }
		}
		.one {
			transform: translateZ(0);
			animation-delay: -1600ms;
		}
		.two {
			transform: translateZ(-4px);
			animation-delay: -1200ms;
		}
		.three {
			transform: translateZ(-8px);
			animation-delay: -800ms;
		}
		.four {
			transform: translateZ(-12px);
			animation-delay: -400ms;
		}
		.five {
			transform: translateZ(-16px);
			animation-delay: 0ms;
		}
	}
	@keyframes rotate {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(180deg);
		}
	}
}
</style>