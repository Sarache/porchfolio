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
				<template v-slot:content
					><p>
						Imagine a curious teenager, fascinated by the endless possibilities of the internet. That was me, diving deep into the digital
						world, soaking up every trend and innovation like a sponge. Fast forward to today, and that same passion for
						<strong>understanding users and crafting innovative design solutions</strong> still drives me. <br />
						Challenges? Venid aquí! Each one's just another chance to push boundaries and make experiences even better.
					</p>
					<div class="img-flex">
						<img src="/img/Fanzie_Splash.png" alt="" />
						<img src="/img/Sarache_Design_1.png" alt="" />
					</div>
					<p>
						I'm all about spreading the word on how UX can be a game-changer. It's not just about making things look bonitas; it's about
						<strong>making them work seamlessly, making people's lives easier.</strong> And guess what? I've got a knack for showing just
						how powerful UX can be. From <strong>building prototypes in small teams to mapping out killer product roadmaps</strong>, I'm in
						my element when I'm making magic happen. <br />
					</p>
					<p>
						So yes, call me the internet kid turned UX brujita. I'm here to turn ideas into reality and make sure every user gets exactly
						what they need. Let's craft some magic together!
					</p>
				</template>
			</cardwindow>

			<cardwindow>
				<template v-slot:subtitle> {{ cardJourney.title }} </template>
				<template v-slot:titlecontent> {{ cardJourney.titlecontent }} </template>
				<template v-slot:content>
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
						<div class="arrow3d"><img src=" /arrow-down.svg" alt="↓" /></div>
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
								title: "Iterate",
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

</style>
