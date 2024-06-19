<script setup>
import { useHead } from "@unhead/vue"
import portfolioDetail from "../components/portfolioDetail.vue"
import portfolioView from "../views/02-PortfolioView.vue"

useHead({
	title: "{{portfolio.title}}",
})

import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const project = ref(route.params.project || null)

onMounted(() => {
	if (!project.value) {
		const stateProject = route.params.state.project
		project.value = stateProject
	}
})
</script>

<template>
	<portfolioDetail></portfolioDetail>
</template>

<style lang="scss" scoped>
main {
	.portfolioitem-content {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		width: 100%;

		.portfolioitem-section {
			display: flex;
			gap: 4rem;
			width: 100%;
			.portfoliosection-content {
			}
		}
	}
}
</style>
