<template>
	<div class="step-container">
		<div class="step-title">
			<img class="star16" src="../../public/star-icon16.svg" />
			<h5><slot name="titlelabel">Title example</slot></h5>
		</div>
		<div class="content-flex">
			<slot name="children"></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
div {
	margin: 1rem 0;
}
.step-container {
	align-self: center;
}
</style>

<script></script>
