<template>
    <div class="portfolioitem-section">
      <div class="portfoliosection-content">
        <h4 v-if="title">{{ title }}</h4>
        <div v-if="description" class="portfoliosection-description" v-html="description"></div>
        <img v-if="image" :src="image" :alt="altText" />
        <video v-if="video" class="video" width="1200px" controls>
          <source :src="video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <iframe v-if="iframe" :src="iframe" width="100%" height="900px" style="border: 1px solid rgba(0, 0, 0, 0.1)" allowfullscreen></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String,
      image: String,
      altText: String,
      video: String,
      iframe: String
    }
  }
  </script>
  
  <style scoped>
  .portfolioitem-section {
    display: flex;
    margin: 0;
    gap: 4rem;
  }
  .portfoliosection-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
  img {
    opacity: 60%;
    width: 100%;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: linear;
    &:hover {
      opacity: 100%;
    }
  }
  video {
    width: 100%;
  }
  </style>
  