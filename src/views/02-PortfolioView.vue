<script setup>
import { useHead } from "@unhead/vue"
import cardproject from "../components/cardproject.vue"

useHead({
	title: "Portfolio",
})
</script>

<template>
	<main>
		<h1 class="hero">Portfolio</h1>
		<div class="portfolio-content">
			<cardproject v-for="project in portfolioMap" :project="project"></cardproject>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			portfolioMap: [
				{
					title: "Axel - Your insurance companion",
					label: "axel",
					description:
						"Created and designed a conversational interface with the ability to analyze insurance policies, contracts and deliver a clear and concise output to the user. It is also capable of defining the most profitable condition when two or more contracts overlap, or even promote internal products based in the context of the conversation.",
					tags: ["Storyboard", "User Interface", "Gen AI"],
					icons: ["Figma", "https://xxx", "Dovetail"],
					classification: "Confidential",
				},

				{
					title: "Liquid Studios France Design System",
					label: "lsfdesignsysystem",
					description:
						"Set up of a Figma environment for design tokens, principles and components. As well, we have established a unique branding for events and presentations and a design-to-dev process to create interfaces with low to no code.",
					tags: ["Design Systems", "Design Ops", "Branding"],
					icons: ["Figma", "https://xxx", "Azure DevOps", "Photoshop"],
					classification: "Confidential",
				},

				{
					title: "Best Recommendation - Salesforce",
					label: "bestrecommendation",
					description:
						"We have been asked to leverage one of Salesforce features: Next Best Action. Based in quantitative and qualitative research and diverse checkpoints with product advocates, we came up with a simple, effective, intuituve and consistent design thanks to the client library and design system.",
					tags: ["User Research", "Service Design", "User Interface"],
					icons: ["Figma", "Dovetail"],
					classification: "Confidential",
				},

				{
					title: "Sales Journey Mapping",
					label: "salesjourney",
					description:
						"We have conducted over 40+ interviews in different languages for sales representatives in USA, Spain, Netherlands, Brazil and UK hubs in order to align experiences and identify pain points throughout every process. Based on that, we have provided an all-in-one centralized platform solution for reporting, client scouting, proactive communication, platforming, and identifying actors, among others.",
					tags: ["User Research", "Problem-solving", "Service Blueprint"],
					icons: ["Miro", "Dovetail"],
					classification: "Confidential",
				},
			],
		}
	},
}
</script>
<style lang="scss" scoped>
main {
	max-width: 1200px;
	.portfolio-content {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}
}
</style>
