<template>
  <div class="end">
    <div class="text">谢谢观看</div>
  </div>
</template>
<style scoped lang="scss">

.end {
  background: url('/bg.png');
  background-size: cover;
	position: relative;
	.text {
		position: absolute;
		inset: 0;
		z-index: 10;
		font-size: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 20px;
		color: #fff;
		backdrop-filter: blur(10px);
		text-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
	}
}
</style>