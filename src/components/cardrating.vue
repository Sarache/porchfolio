<template>
    <div class="card minicard">
      <div class="cardcontent">
        <img :src="imgSrc" alt="Image" />
        <div class="minicardcontent">
          <h5><slot name="titlecontent">{{ titlecontent }}</slot></h5>
          <p><slot name="content">{{ content }}</slot></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imgSrc: {
        type: String,
        required: true,
      },
      titlecontent: {
        type: String,
        default: 'Titlecontent example',
      },
      content: {
        type: String,
        default: 'Content example',
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .cardcontent {
    padding: 1rem;
    display: flex;
    align-items: center;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 2rem;
      background-size: cover;
      margin-right: 1rem;
    }
    .minicardcontent {
      h5 {
        margin: 0;
        font-size: 1.2rem;
      }
      p {
        margin: 0;
        font-size: 1rem;
      }
    }
  }
  </style>
  