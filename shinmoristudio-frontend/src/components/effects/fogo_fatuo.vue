<template>
  <div class="absolute inset-0 pointer-events-none z-10 overflow-hidden">
    <span v-for="i in quantidade" :key="i" class="absolute w-2 h-2 rounded-full blur-sm opacity-70 animate-orbe"
      :style="orbeStyle(i)" />
  </div>
</template>

<script setup>
const quantidade = 14

const random = (min, max) => Math.random() * (max - min) + min

const orbeStyle = (i) => {
  const top = `${random(0, 100)}%`
  const left = `${random(0, 100)}%`
  const delay = `${random(0, 5)}s`
  const duration = `${random(4, 10)}s`
  const size = `${random(6, 14)}px`
  const cor = `hsl(${random(250, 280)}, 100%, ${random(75, 90)}%)`
  const blur = `${random(2, 5)}px`

  return {
    top,
    left,
    width: size,
    height: size,
    backgroundColor: cor,
    filter: `blur(${blur})`,
    animationDelay: delay,
    animationDuration: duration,
  }
}
</script>

<style scoped>
@keyframes orbe {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.3;
  }

  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 1;
  }

  100% {
    transform: translateY(-40px) scale(1);
    opacity: 0.2;
  }
}

.animate-orbe {
  animation-name: orbe;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
