<template>
	<div class="step-container">
		<div class="step-title">
			<img class="star16" src="/star-icon16.svg" />
			<h4><slot name="titlelabel">Title example</slot></h4>
		</div>
		<div class="children">
			<slot name="children"></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.step-container {
	text-align: left;
	display: flex;
	gap: 2rem;
	flex-direction: column; /* Arrange elements in a column by default */
	align-self: center;
	border-radius: 1rem;
	border: 1px solid rgba($color: $blue-200, $alpha: 0.5);

	.step-title {
		display: flex;
		width: 100%;
		align-items: center;
		overflow: visible;
	}

	.children {
		display: flex;
		width: 100%;
		flex-wrap: nowrap; /* Allow wrapping for children */
		gap: 2rem; /* Space between children items */
	}
}
</style>

<script></script>
