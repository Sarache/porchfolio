<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import portfolioData from "../components/portfolioSection.vue"

const route = useRoute()
const project = ref(null)

onMounted(() => {
	const projectLabel = route.params.label
	project.value = portfolioData.portfolioMap.find((p) => p.label === projectLabel)
})
</script>

<template>
	<main v-if="project">
		<h1 class="hero">{{ project.title }}</h1>
		<video class="video" width="1200px" controls>
			<source :src="project.video" type="video/mp4" />
		</video>
		<div class="portfolioitem-content">
			<div class="portfolioitem-section">
				<div class="portfoliosection-content" v-for="section in project.primarySections" :key="section.title">
					<h4>{{ section.title }}</h4>
					<div class="portfoliosection-description" v-html="section.description"></div>
				</div>
			</div>

			<div class="portfolioitem-section" v-for="section in project.sections" :key="section.title">
				<div class="portfoliosection-content">
					<h3>{{ section.title }}</h3>
					<p>{{ section.description }}</p>
					<img v-if="section.imageUrl" :src="section.imageUrl" alt="Section Image" />
					<iframe
						v-if="section.figmaEmbedUrl"
						style="border: 1px solid rgba(0, 0, 0, 0.1)"
						width="100%"
						height="900px"
						:src="section.figmaEmbedUrl"
						allowfullscreen
					>
					</iframe>
				</div>
			</div>
		</div>
	</main>
</template>

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
