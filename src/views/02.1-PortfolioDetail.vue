<script setup>
import { useHead } from "@unhead/vue"
import cardproject from "../components/cardproject.vue"
useHead({
	title: "Portfolio item",
})
</script>

<template>
	<main>
		<h2>{{ $route.params.label }}</h2>
		<h2>{{ project }}</h2>
		<h1 class="hero">Portfolio item</h1>
		<div class="portfolioitem-content">
			<div class="portfolioitem-section">
				<div class="portfoliosection-content">
					<h4>The Client</h4>
					<div class="portfoliosection-description">Hola</div>
				</div>
				<div class="portfoliosection-content">
					<h4>The Challenge</h4>
					<div class="portfoliosection-description">Hola</div>
				</div>
				<div class="portfoliosection-content">
					<h4>The Solution</h4>
					<div class="portfoliosection-description">Hola</div>
				</div>
				<div class="portfolioitem-section"></div>
			</div>
		</div>
	</main>
</template>

<script>
import axios from "axios"

export default {
	data() {
		return {
			project: null,
		}
	},
	methods: {
		async getProject() {
			this.project = await axios.get("/api/projects/" + $route.params.label + ".json")
		},
	},
}
</script>

<style lang="scss" scoped>
main {
	.portfolioitem-content {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;

		.portfolioitem-section {
			display: flex;
			gap: 4rem;
			width: 100%;
			.portfoliosection-content {
				width: 100%;
			}
		}
	}
}
</style>
