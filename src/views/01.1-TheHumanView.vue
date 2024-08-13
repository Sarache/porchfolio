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
				<template v-slot:subtitle>Early Years</template>
				<template v-slot:titlecontent>Little artist</template>
				<template v-slot:content>
					Since I was a kid, I have been very close to instruments and painting tools, which made me extremely curious about different forms
					of art creation.
					<br />
					<p>
						From a young age, I fell in love with digital art and Adobe Photoshop, creating any visual I could imagine.
						<strong>Self-taught through the internet</strong>, I became a teacher and coordinator for a successful photo & video
						editing course.
					</p>
					<div class="img-flex">
						<img src="../../public/img/Sarache_About_1.png" alt="" />
						<img src="../../public/img/Sarache_About_2.png" alt="" />
					</div>

					<p>
						With my mom's digital camera, I captured everything—from bathroom experiments with lighting to exotic locations. Though those
						early photos stayed hidden, <strong>discovering the internet's potential for sharing content changed everything</strong>. Groups
						MSN became my playground, where I honed my coding skills to make my designs stand out.
					</p>

					<p>
						Music became a hobby, and I crafted every visual piece to perfectly align with the emotions in each track. Starting Uni, I
						embraced bold looks and met <a href="https://www.youtube.com/@elbuenchaval" target="_blank">creative mavericks</a>.
					</p>

				</template>
			</cardwindow>
			<cardwindow>
				<template v-slot:subtitle>Once adult</template>
				<template v-slot:titlecontent>Digital Crafter</template>
				<template v-slot:content>
					<p>
						Once uni finished, I already wanted a <strong>creative professional career</strong>, but it was very challenging to find a
						creative first job in the audiovisual industry. That is why I was making side, personal projects to keep my creative vision
						alive, while having more technical jobs.
					</p>
					<div class="img-flex">
						<img src="./img/Sarache_About_3.png" alt="" />
						<img src="./img/Sarache_About_5.jpg" alt="" />
					</div>
					<p>
						I have always been doing this. Since it was a possibility, I would create something on the internet in parallel to perfect my
						technique and show it to the world. Such a pity that the former spanish social network "Tuenti" wasn't working as today's
						LinkedIn to promote my crafts.
					</p>

					<ul>
						My sources of inspiration are:
						<li>✦ my experiences and close friends's</li>
						<li>✦ travelling for fun</li>
						<li>✦ packing all up to change countries</li>
						<li>✦ retrospective moments such as stuck memories</li>
					</ul>
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
