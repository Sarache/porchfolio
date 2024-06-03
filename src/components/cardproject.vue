<template>
	<div class="project">
		<router-link :to="{ name: 'portfolioitem', params: { label: project.label } }">
			{{ project.label }}
		</router-link>
		<div class="project-overlay">
			<h6>{{ project.title }}</h6>
			<div class="description">{{ project.description }}</div>
			<div class="tag-container">
				<div class="tags" v-for="tag in project.tags">
					<div class="tag">{{ tag }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.template {
	gap: 2rem;
}
.project {
	min-width: 34rem;
	justify-content: space-between;
	align-items: flex-start;
	align-self: stretch;
	gap: 1rem;
	backdrop-filter: blur(10px);

	display: flex;
	flex-direction: column;
	border-radius: 1.5rem;
	border: 1px solid #22303f;
	overflow: hidden;
	z-index: 4;
	background: rgba($color: $off-black, $alpha: 0.5);

	h6 {
		color: $blue-200;
	}

	.project-overlay {
		background: url("/img/Axel_UI.png"), lightgray 50% / cover no-repeat 10% 10%;

		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		padding: 2rem 2rem 1rem 2rem;

		.description {
		}
	}

	flex: 50;

	.tag-container {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		.tag {
			display: flex;
			padding: 0.4rem 1rem 0.5rem 1rem;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			border-radius: 4.375rem;
			background: var(--Blue-sky, #5146cf);
			color: var(--off-white, #9fc8d9);
			font-family: Besley;
			font-size: 1rem;
			font-style: italic;
			font-weight: 400;
			line-height: 0.5rem; /* 66.667% */
			letter-spacing: -0.015rem;
		}
	}
}
</style>

<script>
export default {
	props: ["project"],
}
</script>
