<template>
	<div class="step-container">
		<div class="step-title">
			<img class="star16" src="/star-icon16.svg" />
			<h5><slot name="titlelabel">Title example</slot></h5>
		</div>
		<slot name="children"></slot>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
div {
	margin: 1rem 0;
}

.step-container {
	text-align: left;

	flex-direction: columns;
	align-self: center;

	.children {

		text-align: left;
	}
}
</style>

<script></script>
