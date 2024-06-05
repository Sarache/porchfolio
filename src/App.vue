<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue"
import { RouterView } from "vue-router"
import Background from "./components/background.vue";

</script>
<template>
	<HeaderMenu />
	<div class="pagecontent">
		<RouterView />
	</div> <Background>
	<div class="gradient-bg">
		<div class="gradient-container">
			<div class="g1"></div>
			<div class="g2"></div>
			<div class="g3"></div>
			<div class="g4"></div>
			<div class="g5"></div>
			<div class="interactive" ref="interBubble"></div>
		</div>
	</div>

</Background>
</template>

<script>
export default {
	data() {
		return {
			curX: 0,
			curY: 0,
			tgX: 0,
			tgY: 0,
		}
	},
	mounted() {
		this.interBubble = this.$refs.interBubble

		// Initial setup
		this.move()
		this.setupEventListeners()
	},
	methods: {
		move() {
			this.curX += (this.tgX - this.curX) / 20
			this.curY += (this.tgY - this.curY) / 20
			this.interBubble.style.transform = `translate(${Math.round(this.curX)}px, ${Math.round(this.curY)}px)`
			requestAnimationFrame(() => {
				this.move()
			})
		},
		setupEventListeners() {
			window.addEventListener("mousemove", (event) => {
				this.tgX = event.clientX
				this.tgY = event.clientY
			})
		},
	},
}
</script>
<style>
div {
}

.pagecontent {
	width: 100%;
	display: flex;
	gap: 4rem;
	margin: 10rem 0;
}

html, body {
		width: 100%;
		overflow-x: hidden
	}
</style>
