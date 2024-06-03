<template>
	<div>
		<h1 class="regular">Hey there! My name is</h1>
		<h1 class="hero">Sara Jover</h1>
		<h1 class="regular">and I am a passionate</h1>
		<h1 class="hero">Interaction Designer</h1>
	</div>
</template>
<script></script>
<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
div {
  
	margin: 25% 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-wrap: -2rem;
	min-width: 550px;
	max-width: 550px;
	margin-right: -2rem;
	@media (max-width: 1000px) {
		font-size: 2rem;
		margin: 1rem;
	}
  
}

.regular {
	-webkit-text-fill-color: $off-white;
	font-family: Be Vietnam Pro;
	font-size: 3rem;
	font-style: normal;
	font-weight: 200;
	letter-spacing: -0.03rem;
	width: 100%;
  @media (max-width: 600px) {
		font-size: 2.5rem;
		line-height: 3.5rem;
	}
}
</style>
