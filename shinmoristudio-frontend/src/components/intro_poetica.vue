<template>
    <section class="px-6 py-12 max-w-3xl mx-auto text-center text-white opacity-0 animate-fade-up-delayed">
        <p class="text-xl md:text-2xl font-fell italic leading-loose">
            “Nem toda beleza nasce da luz.<br />
            Há quem encontre abrigo no abismo,<br />
            e veja nas sombras aquilo que o mundo recusa:<br />
            a verdade crua, o delírio sublime,<br />
            a poesia que sussurra em silêncio.”
        </p>

        <div class="mt-10 text-base md:text-lg font-light opacity-80 leading-relaxed">
            <p><span class="font-cinzel text-xl">ShinMoriStudio</span> é um santuário para os que veem além —</p>
            <p class="mt-2">almas inquietas, criadores noturnos, observadores do oculto.</p>
            <p class="mt-2">Aqui, cada peça é um feitiço.<br />Cada traço, uma invocação.</p>
        </div>
    </section>
</template>

<script setup>
// nenhum script necessário no momento
</script>

<style scoped>
@keyframes fade-up-delayed {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-up-delayed {
    animation: fade-up-delayed 1.6s ease-out 0.6s forwards;
}
</style>