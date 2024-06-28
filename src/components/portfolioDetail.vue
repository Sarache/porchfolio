<template>
	<main v-if="detailData">
		<h1 class="hero">{{ detailData.title }}</h1>
		<video class="video" width="1200px" controls>
			<source :src="detailData.video" type="video/mp4" />
		</video>
		<div class="portfolioitem-content">
			<div class="portfolioitem-section">
				<div class="portfoliosection-content" v-for="section in detailData.primarySections" :key="section.title">
					<h4>{{ section.title }}</h4>
					<div class="portfoliosection-description" v-html="section.description"></div>
				</div>
			</div>

			<div class="portfolioitem-section" v-for="section in detailData.sections" :key="section.title">
				<portfolioSection
					:title="section.title"
					:description="section.description"
					:image="section.image"
					:figma="section.figma"
				></portfolioSection>
			</div>
		</div>
	</main>
</template>

<script setup>
import portfolioSection from "../components/portfolioSection.vue"

const props = defineProps(["detailData"])
</script>

<style lang="scss" scoped>
main {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4rem;

	.portfolioitem-content {
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		align-self: center;

		.portfolioitem-section {
			display: flex;
			margin: 0;
			gap: 2rem;

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

			.portfoliosection-content {
				display: flex;
				flex-direction: column;
				width: 100%;
				gap: 4rem;
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
