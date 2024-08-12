<template>
	<div class="imgarea">
		<img class="stars" src="../assets/clip1.svg" alt="" />
		<carouselhome />

	</div>
</template>



<script>
import carouselhome from '/src/components/carouselhome.vue';

export default {
  components: {
    carouselhome
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";



.imgarea {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.stars {
		margin: 8rem;
		width: 105%;
opacity: .2;
		padding-left: 10rem;

		filter: drop-shadow(5px 5px 10px ($plum));

		animation: bounce 100s linear 0s 0.5 normal both;

		@keyframes bounce {
			0%,
			100% {
				transform: translateX(0%);
				transform-origin: 50% 50%;
				filter: drop-shadow(5px 5px 10px ($yellowglow));
			}

			15% {
				transform: translateX(-30px) rotate(-6deg);
				filter: drop-shadow(-5px 10px 20px ($plum));
			}

			30% {
				transform: translateX(15px) rotate(6deg);
				filter: drop-shadow(5px 0px 15px ($blue-sky));
			}

			45% {
				transform: translateX(-15px) rotate(-3.6deg);
				filter: drop-shadow(2px -2px 5px ($plum));
			}

			60% {
				transform: translateX(9px) rotate(2.4deg);
				filter: drop-shadow(0px -8px 20px ($blue-800));
			}

			75% {
				transform: translateX(-6px) rotate(-1.2deg);
				filter: drop-shadow(5px 5px 10px ($yellowglow));
			}
		}
	}

	.avatar {
		position: absolute;
		width: 140%;
	}
}

img {
	width: 130%;
}

@media (max-width: 1000px) {
	.imgarea {
		max-height: 300px;
	}
}
</style>
