<script setup>
import hero from "@/components/hero.vue"
import clipart from "@/components/clipart.vue"
import { useHead } from "@unhead/vue"

useHead({
	title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Welcome abroad!",
})
</script>

<template>
	<main>
		<hero />
		<clipart />
	</main>

	<div class="cardproject"></div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/grid.scss";

main {
	display: flex;
	flex-direction: row;

	@media (max-width: 1000px) {
		display: flex;
		flex-direction: column;
	}


}

.glowing {
	position: relative;
	min-width: 700px;
	height: 550px;
	margin: -150px;
	transform-origin: right;
	animation: colorChange 5s linear infinite;
	z-index: -5;
}

.glowing:nth-child(even) {
	transform-origin: left;
}

@keyframes colorChange {
	0% {
		filter: hue-rotate(0deg);
		transform: rotate(0deg);
	}

	100% {
		filter: hue-rotate(360deg);
		transform: rotate(360deg);
	}
}

.glowing span {
	position: absolute;
	top: calc(80px * var(--i));
	left: calc(80px * var(--i));
	bottom: calc(80px * var(--i));
	right: calc(80px * var(--i));
}

.glowing span::before {
	content: "";
	position: absolute;
	top: 50%;
	left: -8px;
	width: 15px;
	height: 15px;
	background: #f00;
	border-radius: 50%;
}

.glowing span:nth-child(3n + 1)::before {
	background: $yellow-400;
	box-shadow: 0 0 20px $yellow-400, 0 0 40px $yellow-400, 0 0 60px $yellow-400, 0 0 80px $yellow-400, 0 0 0 8px rgba(195, 255, 0, 0.1);
}

.glowing span:nth-child(3n + 2)::before {
	background: $coral;
	box-shadow: 0 0 20px $coral, 0 0 40px $coral, 0 0 60px $coral, 0 0 80px $coral, 0 0 0 8px $coral;
}

.glowing span:nth-child(3n + 3)::before {
	background: $blue-sky;
	box-shadow: 0 0 20px $blue-sky, 0 0 40px $blue-sky, 0 0 60px $blue-sky, 0 0 80px $blue-sky, 0 0 0 8px rgba(0, 157, 255, 0.1);
}

.glowing span:nth-child(3n + 1) {
	animation: animate 10s alternate infinite;
}

.glowing span:nth-child(3n + 2) {
	animation: animate-reverse 3s alternate infinite;
}

.glowing span:nth-child(3n + 3) {
	animation: animate 8s alternate infinite;
}

@keyframes animate {
	0% {
		transform: rotate(180deg);
	}

	50% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes animate-reverse {
	0% {
		transform: rotate(360deg);
	}

	50% {
		transform: rotate(180deg);
	}

	100% {
		transform: rotate(0deg);
	}
}

.particle {
	position: absolute;
	top: 0px;
	border-radius: 50%;
}

@for $i from 1 through 30 {
	@keyframes particle-animation-#{$i} {
		100% {
			transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		}
	}

	.particle:nth-child(#{$i}) {
		animation: particle-animation-#{$i} 60s infinite;
		$size: random(5) + 5 + px;
		opacity: calc(random(100) / 100);
		height: $size;
		width: $size;
		animation-delay: -$i * 0.2s;
		transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		background: hsl(random(360), 70%, 50%);
	}
}

hero {
	max-width: 580px;
}
</style>
