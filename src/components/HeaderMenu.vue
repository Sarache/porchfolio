<template>
	<div class="headerbg">
		<ul class="menuheader">
			<li>
				<menuitem
					><router-link to="/"><img class="logo" src="../assets/LogoSarache.png" alt="Home" /></router-link
				></menuitem>
			</li>
			<li>
				<menuitem><router-link to="/about">About me</router-link></menuitem>
			</li>

			<li>
				<menuitem><router-link to="/portfolio">Portfolio</router-link></menuitem>
			</li>
			<li>
				<menuitem><router-link to="/manifesto">Manifesto</router-link></menuitem>
			</li>
			<li>
				<menuitem><router-link to="/contact">Contact</router-link></menuitem>
			</li>
		</ul>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
div {
	margin: 1rem 0;
}

.headerbg {
	background: rgba($color: $off-black, $alpha: 0.2);
	box-shadow: 8px 8px 77px 0px rgb(6, 9, 18);
	backdrop-filter: blur(10px);
	outline: 1px solid $gray-600;
	display: flex;
	margin: 0;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 5;
}

ul {
	display: flex;
	flex-direction: column;
gap: 2rem;
	padding: 4rem 4rem;


	@media (max-width: 1000px) {
		width: 100%;
	}

	li {
		display: inline;

		&:hover {
		}

		.logo {
			height: 3rem;
			display: flex;
			align-self: center;

			&:hover {
				animation: rotationlogo 2s ease 0s 1 normal forwards;
				@keyframes rotationlogo {
					0% {
						transform: rotate(0);
					}

					100% {
						transform: rotate(360deg);
					}
				}
			}
		}
	}
}
</style>

<script></script>
