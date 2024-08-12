<template>
	<div class="infinite-slider">
	  <div class="slider-wrapper">
		<div
		  class="slider-track"
		  :style="{ width: `calc(100% * ${cardRatings.length})` }"
		>
		  <div
			v-for="(item, index) in cardRatings"
			:key="index"
			class="slider-item"
		  >
			<cardrating
			  :imgSrc="item.imgSrc"
			  :titlecontent="item.titlecontent"
			  :content="item.content"
			></cardrating>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  import cardrating from '@/components/cardrating.vue'
  
  const cardRatings = [
	{ imgSrc: 'path/to/image1.jpg', titlecontent: 'Title 1', content: 'Content 1' },
	{ imgSrc: 'path/to/image2.jpg', titlecontent: 'Title 2', content: 'Content 2' },
	{ imgSrc: 'path/to/image3.jpg', titlecontent: 'Title 3', content: 'Content 3' },
	// Add more items as needed
  ]
  </script>
  
  <style lang="scss" scoped>
  .infinite-slider {
	/* Slider container styling */
	position: fixed;
	bottom: 4rem;
	gap: 2rem;
  }
  
  .slider-wrapper {
	overflow: hidden;
	position: relative;
  }
  
  .slider-track {
	display: flex;
	/* The width is set dynamically via inline style binding */
	animation: slide 200s linear infinite;
  }
  
  .slider-item {
	flex: 0 0 10%;
	/* Additional styling for slider items */
  }
  
  @keyframes slide {
	0% {
	  transform: translateX(0%);
	}
	100% {
	  transform: translateX(-100%);
	}
  }
  </style>
  