<script setup>
import { useHead } from "@unhead/vue"
import cardwindow from "@/components/cardwindow.vue"
import cardprocess from "@/components/cardprocess.vue"
import stepProcess from "@/components/stepProcess.vue"

useHead({
	title: "About",
})
</script>

<template>
	<main>
		<h1>About</h1>
		<div class="aboutcontent">
			<cardwindow>
				<template v-slot:subtitle>The human</template>
				<template v-slot:titlecontent>Engaged artist</template>
				<template v-slot:content>
					Since I was a kid, I have been very close to instruments and painting tools, which made me extremely curious about different forms
					of art creation.
					<br />
					<p>
						I discovered very in a very early age digital art, graphic and website design, and fell in love with Adobe Photoshop.
						<strong> I was able to create any visual I could imagine,</strong> in every color, with my computer. I learned on my own thanks
						to the internet, and that gave me the chance to be a teacher and a coordinator of a successful photo & video editing course.
					</p>
					<p>
						Then, I got my mom's digital camera, and brought it everywhere I went. From my own bathroom, experimenting with lighting, kind
						of ashamed of my own baby steps in photography, to the most exotic places I had the chance to go. These pictures were not going
						to see the light very soon, but then I discovered the <strong>internet</strong> and its potential to share digital content
						without any remorse (back then).
					</p>

					<p>
						I began making music as a hobbie, where
						<strong>I directed and crafted every visual piece to be in total comfort with what was transmitted everytime. </strong><br />
						I also rocked some looks when I started Uni and met more creative mavericks.
					</p>

					<div class="img-flex">
						<img src="/img/Sarache_About_1.jpeg" alt="" />
						<img src="/img/Sarache_About_2.jpeg" alt="" />
						<img src="/img/Sarache_About_3.jpeg" alt="" />
						<img src="/img/Sarache_About_4.jpeg" alt="" />
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
<!-- [] {}  ""  :  \ /  -->
<style lang="scss" scoped>
h1 {
	margin-bottom: 2rem;
}

.stepProcess {
	display: flex;
	gap: 1rem;
	padding: 0 0.25rem;
}

.journeycontent {
	text-align: center;
	display: flex;
	flex-direction: column;
	text-align: center;
}
</style>
