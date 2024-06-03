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
	.step-content {
		width: 100%;
		display: flex;
		padding: 0;
		gap: 1rem;
		text-align: left;

		.separator {
			width: 1px;
			background-color: $blue-sky;
			margin: 0;
			min-height: 100%;
			margin: 0.3rem 0;
		}

		slot {
			margin: -4px 0;

			list-style-type: none;
		}
	}
}
</style>

<script scoped></script>
