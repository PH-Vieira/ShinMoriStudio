<template>
    <div class="w-full h-full perspective" :style="{ transitionDelay: delay + 'ms' }">
        <div class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
            :class="{ 'rotate-y-180': flipped }">
            <!-- Verso da carta -->
            <div class="absolute inset-0 bg-gray-800 flex items-center justify-center rounded-xl backface-hidden">
                <span class="text-white text-2xl tracking-widest opacity-50">𓆩 ☽ ☾ 𓆪</span>
            </div>

            <!-- Frente da carta -->
            <div
                class="absolute inset-0 bg-black rounded-xl p-4 flex flex-col justify-between items-center backface-hidden transform rotate-y-180 shadow-lg border border-gray-700">
                <img :src="image" alt="Arte do produto" class="w-full h-48 object-cover rounded-md mb-4" />
                <h3 class="text-lg font-bold text-center">{{ title }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    image: String,
    flipped: Boolean,
    delay: Number
})
</script>

<style scoped>
.perspective {
    perspective: 1200px;
}

.backface-hidden {
    backface-visibility: hidden;
}

.rotate-y-180 {
    transform: rotateY(180deg);
}

.transform-style-preserve-3d {
    transform-style: preserve-3d;
}
</style>