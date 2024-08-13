<script setup>
import { useHead } from "@unhead/vue"
import cardprojectvideo from "../components/cardprojectvideo.vue"

useHead({
	title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Creative Portfolio",
})
</script>

<template>
	<main>
		<h1 class="hero">Creative Portfolio</h1>

		<div class="portfolio-content">
			<cardprojectvideo v-for="project in creafolioMap" :project="project"></cardprojectvideo>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			creafolioMap: [
				{
					title: "Pull Up Pull Up",
					label: "pullup",
					year: "2022",
					company: "Sarache Records",
					description: "Created and designed a visual identity to Sarache's self produced latest official single, Pull Up Pull Up. ",
					tags: ["Dancehall", "Pop", "Electronic", "Beach", "Animation"],
					icons: ["Photoshop", "Logic Pro", "After Effects"],
					classification: "Public",
					videoURL: "https://www.youtube.com/embed/bwqUY1fKBtw",
				},

				{
					title: "Si te Vuelvo a Ver",
					label: "STVAV",
					year: "2021",
					company: "Sarache Records",
					description:
						"Created and co-directed Si te Vuelvo a Ver music video alongside @elbuenchaval and designed 31 single covers for a daily challenge.",
					tags: ["Si te Vuelvo a Ver", "Music", "Music Video", "Sequence Shots", "Chroma Key", "Studio Shooting"],
					icons: ["Photoshop", "After Effects", "Premiere", "Photoshop"],
					classification: "Public",
					videoURL: "https://www.youtube.com/embed/qMSBnVje378",
				},

				{
					title: "Si Veo a tu Mamá - Bad Bunny cover",
					label: "SVATM",
					year: "2020",
					company: "Sarache Records",
					description:
						"Produced and performed a music cover originally by Bad Bunny called Si Veo a tu Mamá. I took the Girl From Ipanema Sample and sang it as a base.",
					tags: ["Cover", "Sampling", "NeoR&B", "Just for Fun"],
					icons: ["Logic Pro", "Dovetail"],
					classification: "Public",
					videoURL: "https://www.youtube.com/embed/QcobdkDaghs",
				},

				{
					title: "Hold Her Fall",
					label: "HHF",
					year: "2020 (originally from 2016)",
					company: "Sarache Records",
					description: "Production and creation of Hold Her Fall visual and sound universe. ",
					tags: ["Drum and Bass", "Electronic", "Emotional", "God", "Friendship", "Sailor Moon"],
					icons: ["Logic Pro", "Adobe Premiere"],
					classification: "Public",
					videoURL: "https://www.youtube.com/embed/JrW-7YBzuuk",
				},

				{
					title: "Lo-fi visualizer",
					label: "LOFI",
					year: "2019",
					company: "Sarache Records",
					description: "Created a relaxing visualizer over a lo-fi bossa nova beat I created to accompaign thr atmosphere.",
					tags: ["Thailand", "Boat", "Lo-fi", "Bossa Nova", "Zelda OST", "Trip", "Brother"],
					icons: ["After Effects", "Twixtor", "Logic Pro"],
					classification: "Confidential",
					videoURL: "https://www.youtube.com/embed/qtCRbcaT9YM",
				},

				{
					title: "No Necklace",
					label: "ISODT",
					year: "2020",
					company: "Sarache Records",
					description:
						"A dynamic dashboard for airforce maintenance. It is developed under different roles & permissions, and projects live data into the dashboard, only showing relevant items to every user type",
					tags: ["UI Design", "Dashboard", "Bento Design", "Data-driven", "Digital Twin", "Smart Data"],
					icons: ["Miro", "Dovetail"],
					classification: "Confidential",
					videoURL: "https://www.youtube.com/embed/poKWg5nh-wI",
				},

				{
					title: "Ocean Drive",
					label: "ISODT",
					year: "2018",
					company: "Sarache Records",
					description:
						"A dynamic dashboard for airforce maintenance. It is developed under different roles & permissions, and projects live data into the dashboard, only showing relevant items to every user type",
					tags: ["UI Design", "Dashboard", "Bento Design", "Data-driven", "Digital Twin", "Smart Data"],
					icons: ["Miro", "Dovetail"],
					classification: "Confidential",
					videoURL: "https://www.youtube.com/embed/hO2TW_S4Myc",
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
main {
	width:100%;
	gap: 2rem;
	.portfolio-content {
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		margin-top: 4rem;
	}
}
</style>
