<template>
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <span v-for="i in particleCount" :key="i"
            class="absolute w-[3px] h-[3px] bg-white rounded-full opacity-30 animate-float"
            :style="randomStyle(i)"></span>
    </div>
</template>

<script setup>
const particleCount = 40

// Gera um estilo aleatório para cada partícula
const randomStyle = (i) => {
    const random = (min, max) => Math.random() * (max - min) + min
    const left = `${random(0, 100)}%`
    const delay = `${random(0, 10)}s`
    const duration = `${random(10, 12)}s`
    const size = `${random(2, 5)}px`

    return {
        left,
        bottom: '-10px',
        width: size,
        height: size,
        animationDelay: delay,
        animationDuration: duration,
        opacity: Math.random() * 0.4 + 0.1,
    }
}
</script>

<style scoped>
@keyframes float {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0;
    }

    30% {
        opacity: 1;
    }

    100% {
        transform: translateY(-120vh) scale(0.8);
        opacity: 0;
    }
}

.animate-float {
    animation-name: float;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
}
</style>