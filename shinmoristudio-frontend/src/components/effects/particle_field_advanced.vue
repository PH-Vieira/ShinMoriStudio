<template>
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <span v-for="i in particleCount" :key="i" :class="['absolute', randomAnimation(i)]" :style="wrapperStyle(i)">
            <span class="text-white text-xs select-none font-light inline-block animate-rotate blur-xs mix-blend-screen"
                :style="innerStyle(i)">
                {{ shapeSymbol(i) }}
            </span>
        </span>
    </div>
</template>

<script setup>
const particleCount = 29

const symbols = [
    '•', '◦', '⋆', '⁂', '✶', '✷', '✸',
    '⟁', '⧉', '𖤐', '𓂀', '☽', '☾', '⚝', '⛧',
    '⟡', '❂'
]

const random = (min, max) => Math.random() * (max - min) + min

const shapeSymbol = (i) => symbols[i % symbols.length]

const randomAnimation = () =>
    Math.random() < 0.3 ? 'animate-float-early' : 'animate-float'

const wrapperStyle = () => {
    const left = `${random(0, 100)}%`
    const delay = `${random(0, 8)}s`
    const duration = `${random(7, 16)}s`

    return {
        left,
        bottom: '-5%',
        animationDelay: delay,
        animationDuration: duration
    }
}

const innerStyle = () => {
    const size = `${random(10, 22)}px`
    const opacity = random(0.1, 0.4)
    const rotateDuration = `${random(10, 20)}s`
    const direction = Math.random() > 0.5 ? 'normal' : 'reverse'

    return {
        fontSize: size,
        opacity,
        animationDuration: rotateDuration,
        animationDirection: direction
    }
}
</script>

<style scoped>
@keyframes float {
    0% {
        transform: translateY(0);
        opacity: 0;
    }

    30% {
        opacity: 1;
    }

    100% {
        transform: translateY(-110vh);
        opacity: 0;
    }
}

@keyframes float-early {
    0% {
        transform: translateY(0);
        opacity: 0;
    }

    25% {
        opacity: 1;
    }

    70% {
        opacity: 0;
    }

    100% {
        transform: translateY(-110vh);
        opacity: 0;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.animate-float {
    animation-name: float;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

.animate-float-early {
    animation-name: float-early;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

.animate-rotate {
    animation-name: rotate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
</style>