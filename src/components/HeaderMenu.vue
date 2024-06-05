<template>
	<div class="headerbg">
		<ul class="menuheader">
			<li>
				<menuitem><router-link to="/"><img class="logo" src="../assets/LogoSarache.png"
						alt="Home" /></router-link></menuitem>
			</li>
			<li class="has-submenu">
				<menuitem><router-link to="/about">About me</router-link></menuitem>

				<ul class="submenu">
					<li><router-link to="/about/thehuman">The human</router-link></li>
					<li><router-link to="/about/thedesigner">The designer</router-link></li>
					<li><router-link to="/about/themusician">The musician</router-link></li>
				</ul>

			</li>

			<li>
				<menuitem><router-link to="/designportfolio">Design Portfolio</router-link></menuitem>
			</li>
			<li>
				<menuitem><router-link to="/creativeportfolio">Creative Porfolio</router-link></menuitem>
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
	width: 20rem;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 5;

	@media (max-width: 1200px) {
		width: 100%;
		height: 6rem;

	}


}

ul {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: auto;

	justify-content: center;


	@media (max-width: 1200px) {

		flex-direction: row;
		top: 0;
		padding: 0;
		margin: 2rem;
		justify-content: space-between;
		padding: 0 4rem;






	}

	@media (max-width: 1000px) {
		width: 100%;
	}

	li {
		display: inline;



		.menuitem {


		}

		&:hover {}

		&.has-submenu {
			position: relative;

			.submenu {
				max-height: 0;
				overflow: hidden;
				transition: max-height 0.5s ease;
				padding-bottom: 2rem;
				list-style: none;
				display: flex;
				gap: .5rem;


				@media (max-width: 1200px) {
					max-height: auto;
					max-width: 0;
				}

				li {
					margin: 0;
					font-family: Be Vietnam Pro;
					display: flex;




					a {

						font-size: 1rem;
						font-style: normal;
						font-weight: 200;
						line-height: 1rem;
						/* 114.286% */
						text-transform: uppercase;
						color: $off-white;



					}


				}
			}

			&:hover .submenu {
				display: block;
				display: flex;
				max-height: 300px;
			}
		}

		.logo {
			height: 3rem;
			display: flex;
			align-self: center;

			@media (max-width: 1200px) {
				width: 3rem;
			}

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
