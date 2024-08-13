<script setup>
import { useHead } from "@unhead/vue"
import cardwindow from "@/components/cardwindow.vue"
import buttonimg from "@/components/buttonimg.vue"

useHead({
	title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ The Capitol",
})
</script>

<template>
	<main>
		<h1>About Planet Sara</h1>
		<div class="aboutcontent">
			<cardwindow>
				<template v-slot:subtitle> The Capitol</template>
				<template v-slot:titlecontent>Select your path:</template>
				<template v-slot:content>
					Please click on an ecosystem to assess you more precisely:
					<div class="img-flex">
						<router-link to="/about/thehuman"
							><buttonimg imgSrc="./img/Sarache_Human_1.jpg">
								<template v-slot:label>The human</template>
							</buttonimg></router-link
						>
						<router-link to="/about/thedesigner">
							<buttonimg imgSrc="./img/About_Photography4.jpg">
								<template v-slot:label>The designer</template>
							</buttonimg></router-link
						>
					</div>
				</template>
			</cardwindow>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			cardJourney: {
				title: "Design process",
				titlecontent: "My typical design journey",
				contenttitle: "Customcard title",
				designJourneyMap: [
					{
						title: "Discover",
						child: [
							{
								title: "Stakeholder Side",
								content: ["Kick-off session", "Requirement definition", "Research Roadmap"],
							},
							{
								title: "User Side",
								content: ["Survey to target users", "Contextual enquires", "Behavioral analysis"],
							},
						],
					},
					{
						title: "Identify",
						child: [
							{
								title: "Design Challenge",
								content: ["Working session", "DC definition", "How Might We?"],
							},
							{
								title: "Who?",
								content: ["User Persona", "Empathy Map", "Service Blueprint"],
							},
						],
					},

					{
						title: "Ideate",
						child: [
							{
								title: "Design Challenge",
								content: ["Affinity Mapping", "Behavioral Analysis"],
							},
							{
								title: " ",
								content: ["Design Workshop", "Sitemap", "Card sorting"],
							},
						],
					},

					{
						title: "Produce",
						child: [
							{
								title: "Interface",
								content: ["Branding", "Wireframing", "Design System ops", "Prototyping", "Visual Assets", "Designworkflow"],
							},
							{
								title: "Dev Handoff",
								content: ["Library check-in", "Agile rituals", "Retrospective", "Prototyping", "Daily stand-ups", "Sprint"],
							},
						],
					},

					{
						title: "Share & Promote",
						child: [
							{
								title: "Share",
								content: ["Executive/ Usability Deck", "Documentation", "Design deliverables"],
							},
							{
								title: "Promote",
								content: ["Motion graphics", "Mock-ups", "Demo videos"],
							},
						],
					},

					{
						title: "Evaluate",
						child: [
							{
								title: "Testing",
								content: ["Usability Testing", "Heatmap", "Feedback gathering"],
							},
							{
								title: "Promote",
								content: ["Agile board management", "Functionality workshops", "Design review sessions"],
							},
						],
					},
				],
			},
		}
	},
	methods: {},
}
</script>
<style lang="scss" scoped>
h1 {
	margin-bottom: 2rem;
}
</style>
