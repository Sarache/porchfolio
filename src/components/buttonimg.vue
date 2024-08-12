<template>
	<div class="buttonimgcontainer">
		
		<img :src="imgSrc" alt="" /><slot name="button-container" class="button-container">
			<h5><slot name="label"></slot></h5>
		</slot>
	</div>
</template>

<script>
export default {
	props: {
		imgSrc: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/base.scss";
</style>
