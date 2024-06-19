<template>
	<div class="card" :class="{ 'card-minimized': windowState == 'isMinimize', 'card-maximized': windowState == 'isMaximize' }">
		<div class="toolbar" :class="{ 'card-minimized': windowState == 'isMinimize' }">
			<div class="toolkit">
				<div class="close"><b>✕</b></div>
				<button class="minimize" @click="minimize"></button>
				<button class="maximize" @click="maximize"></button>
			</div>
			<subtitle class="subtitle"><slot name="subtitle">Subtitle example</slot></subtitle>
		</div>

		<div class="cardcontent" :class="{ 'cardcontent-minimized': windowState == 'isMinimize' }">
			<h4><slot name="titlecontent">Titlecontent example</slot></h4>
			<slot name="content">Content example</slot>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			windowState: "isDefault",
		}
	},
	methods: {
		minimize() {
			if (this.windowState === "isMinimize") {
				this.windowState = "isDefault"
			} else {
				this.windowState = "isMinimize"
			}
		},
		maximize() {
			if (this.windowState === "isMaximize") {
				this.windowState = "isDefault"
			} else {
				this.windowState = "isMaximize"
			}
		},
	},
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";



@media (max-width: 1000px) {
	.imgarea {
		max-height: 300px;
	}
}
</style>
