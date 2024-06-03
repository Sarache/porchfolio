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
				<template v-slot:subtitle> about me</template>
				<template v-slot:titlecontent>Where did it all began?</template>
				<template v-slot:content>
					Since I was a kid, I have been very close to instruments and painting tools, which made me extremely curious about different forms
					of art creation.
					<br />
					<p>
						I discovered very in a very early age digital art, graphic and website design, and fell in love with Adobe Photoshop.
						<strong> I was able to create any visual I could imagine,</strong> in every color, with my computer. I learned on my own thanks
						to the internet, and that gave me the chance to be a teacher and a coordinator of a successful photo & video editing course.
						Back then, the app icon looked like this:
					</p>
					<p>
						I had the chance to have a first taste of product design thanks to my degree internship where I discovered the role design has
						in the world and how can positively impact users’ life. Then, I studied Interactive Design masters degree to deeply learn all
						the implications in this domain, such as
						<strong>ethnography, extended reality, UI design, Design process & thinking, UX writing, and internet culture,</strong> among
						others.
					</p>
					<p>
						Then, my professional experiences have made me dive in <strong>different and constantly changing industries</strong> from gaming
						and retail start-ups to insurance and space and defense corporate leaders, which makes me extremely versatile.
					</p>
				</template>
			</cardwindow>

			<cardwindow>
				<template v-slot:subtitle> {{ cardJourney.title }} </template>
				<template v-slot:titlecontent> {{ cardJourney.titlecontent }} </template>
				<template v-slot:content>
					{{ cardJourney.contenttitle }}
					<div class="journeycontent" v-for="item in cardJourney.designJourneyMap">
						<cardprocess>
							<template v-slot:titlelabel> {{ item.title }} </template>
							<template v-slot:children>
								<stepProcess v-for="baby in item.child">
									<template v-slot:step-subtitle> {{ baby.title }} </template>
									<template v-slot:step-content>
										<template v-for="feotus in baby.content"> {{ feotus }} <br /> </template>
									</template>
								</stepProcess>
							</template>
						</cardprocess>
						<div class="arrow3d"><img src="/public/arrow-down.svg" alt="↓" /></div>
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
.aboutcontent {
	display: flex;
	flex-direction: row;
	gap: 2rem;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
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
