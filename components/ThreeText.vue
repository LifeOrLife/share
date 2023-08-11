<template>
	<div class="three-text">
		<h1>绘制 3D 效果的文本</h1>
		<h4>凸起质感的阴影: </h4>
		<div class="buldge box">NVX</div>
		<h4>凹陷质感的阴影: </h4>
		<div class="depressed box">NVX</div>
	</div>
</template>
<style scoped lang="scss">
.three-text {
	font-size: 60px;
	padding: 0 10px;
	.box {
		width: 100%;
		padding: 20px 0;
		text-align: center;
		background: #999;
		color: #999;
		letter-spacing: 5px;
		margin-bottom: 10px;
	}
	h4 {
		margin-bottom: 10px;
	}
	.buldge {
		text-shadow: 1px 1px 1px #000, -1px -1px 1px #fff;
	}
	.depressed {
		text-shadow: 1px 1px 1px #fff, -1px -1px 1px #000;
	}
}
</style>