<template>
  <transition name="rota-magica" mode="out-in">
    <router-view />
  </transition>
</template>

<style>
.rota-magica-enter-active,
.rota-magica-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}

.rota-magica-enter-from,
.rota-magica-leave-to {
  opacity: 0;
  transform: scale(1.02) translateY(40px);
  filter: blur(4px);
}

.rota-magica-enter-to,
.rota-magica-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
  filter: blur(0);
}
</style>
