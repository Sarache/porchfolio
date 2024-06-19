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
					year: "2020",
					company: "Liquid Studios France",
					description:
						"Created and designed a conversational interface with the ability to analyze insurance policies, contracts and deliver a clear and concise output to the user. It is also capable of defining the most profitable condition when two or more contracts overlap, or even promote internal products based in the context of the conversation.",
					tags: ["Storyboard", "User Interface", "Gen AI", "Insurance", "Immersive Demo"],
					icons: ["Figma", "https://xxx", "Dovetail"],
					classification: "Confidential",
					imageUrl: "/img/Axel_UI.png",
					video: "/vid/Teaser_v2_EN.mp4",
					primarySections: [
						{
							title: "The Client",
							description:
								"The client is a <strong>national insurance company</strong> with different products such as Bank insurance, House Insurance and a service portfolio.",
						},
						{
							title: "The Challenge",
							description:
								"We have identified that the clients of the insurance are <strong>not really aware of their contract terms and specific conditions.</strong> Moreover, in situations of distress, they get really <strong>frustrated getting in touch with a human assistant</strong> to respond quickly to their queries and giving personalized assistance.",
						},
						{
							title: "The Solution",
							description:
								"We have Created and designed a <strong>conversational interface</strong> with the ability to <strong>analyze insurance policies, contracts and deliver a clear and concise output to the user thanks to Generative AI</strong>. It is also capable of defining the most profitable condition when two or more contracts overlap, or even promote internal products based in the context of the conversation.",
						},
					],
					sections: [
						{
							title: "First Value Proposition",
							description:
								"After numerous working sessions and touch points, we elaborated a value proposition canvas to showcase the most relevant features and how can it improve user experience and adoption.",
							image: "/img/Axel_ValueProp.svg",
							altText: "Value Proposition canvas",
						},
						{
							title: "First Wireframes",
							description:
								"We imagined how the experience can be to design a user journey and in which moments of life Axel could provide information and solutions to John. The user needs a very concise answer to a query.",
							image: "/img/Axel_Wireframe.png",
							altText: "",
						},

						{
							title: "First Chat GPT experiments",
							description:
								"Open AI is the to-go Gen AI tool, so we experimented with some questions and sentiment analysis. We will prompt-engineer the instructions and make a framework that can receive all kinds of text documents in order to analyze them and translate them into a more humanistic answer. <br /> We have provided as well a list of services with a label, description, image and link associated to each one, in order to recommend relevant services included or not in the user contract. <br /> Moreover, we have injected all partnerships to include relevant discounts in specific contexts. <br /> Everything has been added into a dev enviroment to test questions and answers.",
							image: "/img/Axel_Dev.png",
							altText: "",
						},

						{
							title: "Designing the storytelling",
							description:
								"To convey our solution and bring up all the advantages, we needed to create a coherent, realistic and relatable story. The story is set in France and Switzerland and we are following John, a freelance architect that loves winter sports and wants to prepare a ski holiday in Switzerland. The story tells 4 key moments in John's trip: the first interactions with Axel for basic insurance questions and early user adoption, the car rental website policies, a terrible accident happening outside of the European territory and after the accident recovery. <br /> Each moment represents a feature or a capability: <ul><br /><li> <strong>Step 1</strong>: It shows the first interactions with Axel after downloading the app and how to use it. John asks questions through speech-to-text and gets reliable and precise answers, he also gets the whole conversation transcript in his mailbox. </li> <br /> <li> <strong>Step 2</strong>: John needs to rent a car, but is unsure of the coverage of its own policy and asks Axel if he needs to get the website insurance, getting a comparison of his own contract and the one provided. After finding Axel very useful, he uploads his other contracts, such as Health and Home insurance. Now Axel can advise in other fields and with other contracts. </li> <br /> <li> <strong>Step 3</strong>: John causes a terrible accident while skiing and has broken someone's ski material. He is injured and has to be taken to the nearest hospital in Switzerland, being a private healthcare system. After providing Axel with this information, John can ask for refund from his public healthcare system and other services thanks to his insurance policy Snow and Mountain, covering every ski accident worldwide. </li> <br /> <li><strong>Step 4</strong>: John is victim of a theft while he was shopping. His car has broken glass and he lost his new pair of ski. Axel provided the nearest repair center and the actionnables to get the stolen objects refunded.</li></ul></body>",
							image: "/img/Axel_Metaverse.png",
							altText: "",
						},
					],
				},

				{
					title: "Liquid Studios France Design System",
					label: "lsfdesignsysystem",
					year: "2020",
					company: "Liquid Studios France",
					description:
						"Set up of a Figma environment for design tokens, principles and components. As well, we have established a unique branding for events and presentations and a design-to-dev process to create interfaces with low to no code.",
					tags: ["Design Systems", "Design Ops", "Branding", "Design Manifesto", "Component Library"],
					icons: ["Figma", "https://xxx", "Azure DevOps", "Photoshop"],
					classification: "Confidential",
					imageUrl: "/img/LSDS_Splash.png",
				},

				{
					title: "Best Recommendation - Salesforce",
					label: "bestrecommendation",
					year: "2020",
					company: "Liquid Studios France",
					description:
						"We have been asked to leverage one of Salesforce features: Next Best Action. Based in quantitative and qualitative research and diverse checkpoints with product advocates, we came up with a simple, effective, intuituve and consistent design thanks to the client library and design system.",
					tags: ["User Research", "Service Design", "User Interface", "Augmented Agent"],
					icons: ["Figma", "Dovetail"],
					classification: "Confidential",
					imageUrl: "/img/BWTSR_TrainingHub.png",
				},

				{
					title: "Sales Journey Mapping",
					label: "salesjourney",
					year: "2020",
					company: "Liquid Studios France",
					description:
						"We have conducted over 40+ interviews in different languages for sales representatives in USA, Spain, Netherlands, Brazil and UK hubs to align experiences and identify pain points throughout every process. ",
					tags: ["User Research", "Contextual Enquiring", "Shadowing", "Field study", "User Personae", "Service Blueprint"],
					icons: ["Miro", "Dovetail"],
					classification: "Confidential",
					imageUrl: "/img/BP_Contractors.jpg",
				},

				{
					title: "PolarPOD digital Twin",
					label: "ePOD",
					year: "2020",
					company: "Liquid Studios France",
					description:
						"Design and creation of a static website to raise awareness regarding the south sea exploration thanks to a multimedia blogging format and a Digital Twin 3D model of a neutral-carbon footprint vertical boat.",
					tags: ["3D Design", "Green IT", "Sustainable", "Sciences & Environment", "Responsive Design", "UI", "Accessibility"],
					icons: ["Miro", "Dovetail"],
					classification: "Confidential",
					imageUrl: "/img/ePod_Parcours.png",
				},

				{
					title: "In service Ops - Digital Twin",
					label: "ISODT",
					year: "2020",
					company: "Liquid Studio France",
					description:
						"A dynamic dashboard for airforce maintenance. It is developed under different roles & permissions, and projects live data into the dashboard, only showing relevant items to every user type",
					tags: ["UI Design", "Dashboard", "Bento Design", "Data-driven", "Digital Twin", "Smart Data"],
					icons: ["Miro", "Dovetail"],
					classification: "Confidential",
					imageUrl: "/img/ISODT_tablet_mockup.png",
				},

				{
					title: "LS In the Woods",
					label: "Lsinthewoods",
					year: "2020",
					company: "Nicecactus",
					description:
						"Preparation and facilitation of a team design thinking workshop to inspire young talents and think together new paradigms for the 2023 fiscal year. Session starts with an ice breaker (sending a GIF to express feelings about last year), then a disruptive thinking exercise for creating new convergences between technologies and industries.",
					tags: ["Ideation", "Facilitation", "Design Thinking", "Workshop", "Technology", "Problem-solving", "Disruptive thinking"],
					icons: ["Figma", "Power Point", "Menti"],
					classification: "Confidential",
					imageUrl: "/img/LSWoods_Title.png",
				},

				{
					title: "Jo - The customer support chatbot",
					label: "jochatbot",
					year: "2020",
					company: "Liquid Studio France",
					description:
						"Thanks to NLP and multi-API fetching, Jo has been one of the most impactful projects we have been doing for our partner. The agent is able to look for a product or its replacement, fetch the price and availability, track orders, and switch between requests thanks to our intent and cross intent approach.",
					tags: ["User Research", "Problem-solving", "Service Blueprint", "Conversational Flows", "Augmented Support Channel"],
					icons: ["Miro", "Dovetail"],
					classification: "Confidential",
					imageUrl: "/img/Chatbot_5.png",
				},

				{
					title: "Nicecactus.gg Design System - Blue Agave",
					label: "nicecactusds",
					year: "2020",
					company: "Nicecactus",
					description:
						"Contribution to nicecactus’ design system, especially with card components and modules. A versatile yet recognizable design system based in Frost’s atomic principles to cover all nicecactus’ areas and provide solutions for scaling-up.",
					tags: ["Design Systems", "Atomic Design", "Tokens", "Components", "Design Ops"],
					icons: ["Figma", "Atlassian"],
					classification: "Confidential",
					imageUrl: "/img/Nicecactus_DS_Thumbnail.png",
				},

				{
					title: "B2B Tournament Service for Nicecactus.gg",
					label: "nicecactuscorner",
					year: "2020",
					company: "Nicecactus",
					description:
						"Optimization of landing page delivery process and design for nicecactus' brand partners such as McDonalds, Danone, Nike. Brands are able to organize tournaments thanks to nicecactus’ technology and promote eSports in their communities.",
					tags: ["Component Library", "Customizable design", "Effective delivery", "Design Ops"],
					icons: ["Miro", "Dovetail"],
					classification: "Confidential",
					imageUrl: "/img/Nicecactus_B2B_Thumbnail.png",
				},

				{
					title: "Nicecactus - Tournament Flow",
					label: "nicecactusTNT",
					year: "2020",
					company: "Nicecactus",
					description:
						"We have merged G4G's technology into our framework and adapted every aspect of the process into an intuituve, consistent and visually appealing dynamic page. However, this was a challenge if we look at the diversity of the games catalog nicecactus had, and how we can present in a standarized way all the tournament modes for every title.",
					tags: ["Usability Testing", "Heatmap", "Behavioral Design", "Evaluative Design", "Technology", "Dynamic design"],
					icons: ["Figma", "Lookback", "Hotjar"],
					classification: "Confidential",
					imageUrl: "/img/Nicecactus_TNT_Thumbnail.png",
				},
			],
		}
	},
}
</script>
<style lang="scss" scoped>
main {
	gap: 2rem;
	.portfolio-content {
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		margin-top: 4rem;
	}
}
</style>
