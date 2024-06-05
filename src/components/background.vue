<template>
    <div class="background" @mousemove="handleMouseMove" :style="backgroundStyle">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lFollowX: 0,
        lFollowY: 0,
        x: 0,
        y: 0,
        friction: 1 / 30
      };
    },
    computed: {
      backgroundStyle() {
        return {
          transform: `translate(${this.x}px, ${this.y}px) scale(1.1)`
        };
      }
    },
    methods: {
      handleMouseMove(event) {
        const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - event.clientX));
        const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - event.clientY));
        this.lFollowX = (20 * lMouseX) / 100;
        this.lFollowY = (10 * lMouseY) / 100;
      },
      moveBackground() {
        this.x += (this.lFollowX - this.x) * this.friction;
        this.y += (this.lFollowY - this.y) * this.friction;
        requestAnimationFrame(this.moveBackground);
      }
    },
    mounted() {
      window.addEventListener('mousemove', this.handleMouseMove);
      this.moveBackground();
    },
    beforeDestroy() {
      window.removeEventListener('mousemove', this.handleMouseMove);
    }
  };
  </script>
  
  
  <style scoped>
  .background {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: -10;
    background-color: rgba(16, 20, 25, 0.7843137255);
		background: url("../../../public/img/bg-general.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    transition: background-position 0.3s ease-in;
    transform: scale(1.4)
  }
  </style>