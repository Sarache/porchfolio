<template>
	<div class="content">
		<subtitle><slot name="step-subtitle"></slot></subtitle>
		<ul class="step-content">
			<div class="separator"></div>
			<li><slot name="step-content"></slot></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
div {
	margin: 1rem 0;
}

.content {
	width: 100%;
	text-align: left;
	display: flex;
	flex-direction: column;

	.step-content {
		display: flex;
		width: 100%;
		gap: 1rem;
		text-align: left;
		padding: 0;

		.separator {
			width: 2px;
			background-color: $gray-600;
			margin: 0;
			margin: 0.3rem 0.5rem;
		}

		slot {
			margin: -4px 0;
			list-style-type: none;
		}
	}
}
</style>

<script scoped></script>
