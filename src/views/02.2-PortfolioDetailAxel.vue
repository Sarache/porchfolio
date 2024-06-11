<script setup>
import { useHead } from "@unhead/vue"
import cardproject from "../components/cardproject.vue"
useHead({
	title: "Portfolio - Axel",
})
</script>

<template>
	<main>
		<h1 class="hero">Axel - Your insurance companion</h1>
		<div class="portfolioitem-content">
			<video class="video" width="1200px" controls>
				<source src="/vid/Teaser_v2_EN.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div class="portfolioitem-section">
				<div class="portfoliosection-content">
					<h4>The Client</h4>
					<div class="portfoliosection-description">
						The client is a <strong>national insurance company</strong> with different products such as Bank insurance, House Insurance and
						a service portfolio.
					</div>
				</div>
				<div class="portfoliosection-content">
					<h4>The Challenge</h4>
					<div class="portfoliosection-description">
						We have identified that the clients of the insurance are
						<strong>not really aware of their contract terms and specific conditions.</strong> Moreover, in situations of distress, they get
						really <strong>frustrated getting in touch with a human assistant</strong> to respond quickly to their queries and giving
						personalized assistance.
					</div>
				</div>
				<div class="portfoliosection-content">
					<h4>The Solution</h4>
					<div class="portfoliosection-description">
						We have Created and designed a <strong>conversational interface</strong> with the ability to
						<strong>analyze insurance policies, contracts and deliver a clear and concise output to the user thanks to Generative AI</strong
						>. It is also capable of defining the most profitable condition when two or more contracts overlap, or even promote internal
						products based in the context of the conversation.
					</div>
				</div>
			</div>

			<div class="portfolioitem-section">
				<div class="portfoliosection-content">
					<h3>First Value Proposition</h3>
					<body>
						After numerous working sessions and touch points, we elaborated a value proposition canvas to showcase the most relevant
						features and how can it improve user experience and adoption.
					</body>
					<img src=" /img/Axel_ValueProp.svg" alt="Value Proposition canvas" />
				</div>
			</div>

			<div class="portfolioitem-section">
				<div class="portfoliosection-content">
					<h3>First Wireframes</h3>
					<body>
						We imagined how the experience can be to design a user journey and in which moments of life Axel could provide information and
						solutions to John. The user needs a very concise answer to a query. <br />
					</body>
					<img class="side" src=" /img/Axel_Wireframe.png" alt="" />
				</div>
			</div>

			<div class="portfolioitem-section">
				<div class="portfoliosection-content">
					<h3>First Chat GPT experiments</h3>
					<img class="side" src=" /img/Axel_Dev.png" alt="" />

					<body>
						Open AI is the to-go Gen AI tool, so we experimented with some questions and sentiment analysis. We will prompt-engineer the
						instructions and make a framework that can receive all kinds of text documents in order to analyze them and translate them into
						a more humanistic answer. <br />
						We have provided as well a list of services with a label, description, image and link associated to each one, in order to
						recommend relevant services included or not in the user contract.
						<br />
						Moreover, we have injected all partnerships to include relevant discounts in specific contexts. <br />
						Everything has been added into a dev enviroment to test questions and answers.
					</body>
				</div>
			</div>

			<div class="portfolioitem-section">
				<div class="portfoliosection-content">
					<h3>Designing the storytelling</h3>
					<body>
						To convey our solution and bring up all the advantages, we needed to create a coherent, realistic and relatable story. The story
						is set in France and Switzerland and we are following John, a freelance architect that loves winter sports and wants to prepare
						a ski holiday in Switzerland. The story tells 4 key moments in John's trip: the first interactions with Axel for basic insurance
						questions and early user adoption, the car rental website policies, a terrible accident happening outside of the European
						territory and after the accident recovery. <br />
						Each moment represents a feature or a capability:
						<ul>
							<br />
							<li>
								<strong>Step 1</strong>: It shows the first interactions with Axel after downloading the app and how to use it. John asks
								questions through speech-to-text and gets reliable and precise answers, he also gets the whole conversation transcript in
								his mailbox.
							</li>
							<br />
							<li>
								<strong>Step 2</strong>: John needs to rent a car, but is unsure of the coverage of its own policy and asks Axel if he needs
								to get the website insurance, getting a comparison of his own contract and the one provided. After finding Axel very useful,
								he uploads his other contracts, such as Health and Home insurance. Now Axel can advise in other fields and with other
								contracts.
							</li>
							<br />
							<li>
								<strong>Step 3</strong>: John causes a terrible accident while skiing and has broken someone's ski material. He is injured
								and has to be taken to the nearest hospital in Switzerland, being a private healthcare system. After providing Axel with
								this information, John can ask for refund from his public healthcare system and other services thanks to his insurance
								policy "Snow and Mountain", covering every ski accident worldwide.
							</li>
							<br />
							<li>
								<strong>Step 4</strong>: John is victim of a theft while he was shopping. His car has broken glass and he lost his new pair
								of ski. Axel provided the nearest repair center and the actionnables to get the stolen objects refunded.
							</li>
						</ul>
					</body>
					<iframe
						style="border: 1px solid rgba(0, 0, 0, 0.1)"
						width="100%"
						height="900px"
						src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhdSf4iVYBgO4kO0bSwSH0C%2FCompanion%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D2146-6296%26viewport%3D40%252C390%252C0.04%26t%3Dw8lkfNOrdHFRxqYD-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D2146%253A6296%26show-proto-sidebar%3D1%26mode%3Ddesign"
						allowfullscreen
					></iframe>
				</div>
			</div>

			<div class="portfolioitem-section">
				<div class="portfoliosection-content">
					<h3>Creating the "Wow" effect</h3>
					<body>
						As a technology team focused on innovation, we built a 3D enviroment to showcase Axel capabilities. This scene has 3D animations
						to help the user know what is going on. We built several Axel animatiions, such as looking through the folders and documents,
						and animated the background when searching. <br />
						More than just a web enviroment for our assistant, we have made the scene compatible with presenter immersion and chroma key
						recording for remote demos.
					</body>
					<img src=" /img/Axel_Metaverse.png" alt="Value Proposition canvas" />
				</div>
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
	width: 100%;
	.portfolioitem-content {
		display: flex;
		flex-wrap: wrap;
		gap: 8em;
		align-self: center;

		.portfolioitem-section {
			display: flex;
			margin: 0;
			gap: 4rem;

			.portfoliosection-content {
				display: flex;
				flex-direction: column;
				width: 100%;
				gap: 1rem;
			}

			ul {
				padding-left: 0;
				display: flex;
				gap: 1rem;
				padding: 1rem 0;
				li {
					width: 100%;
				}
			}
		}
	}
}
img {
	opacity: 60%;
	width: 100%;
	transition-property: opacity;
	transition-duration: 0.5s;
	transition-timing-function: linear;
	&:hover {
		opacity: 100%;
	}
}

video {
	width: 100%;
}
.side {
	border-radius: 1rem;
	width: 100%;
}
</style>
