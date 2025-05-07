<template>
    <div class="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden z-10 transition-transform duration-700 ease-in-out"
        :class="{ 'translate-y-full opacity-0': conteudoDesce }">
        <!-- Partículas mágicas de fundo -->
        <particle-field-advanced />

        <!-- Círculo ritual girando -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <img :src="ritualCircle" alt="ritual symbol"
                class="w-[500px] md:w-[700px] animate-spin-slow select-none ritual-opacity"
                :style="{ opacity: showQuote ? 0.29 : 0.11 }" />
        </div>

        <!-- Citação Lovecraft -->
        <transition name="fade-scale" @after-leave="onQuoteLeave">
            <div v-if="showQuote" class="text-center px-6 max-w-2xl opacity-0 animate-fade-in-slow">
                <p class="text-xl md:text-3xl font-fell italic leading-relaxed">
                    “We live on a placid island of ignorance in the midst of black seas of infinity...”
                </p>
                <span class="block mt-4 text-sm text-gray-400">— H.P. Lovecraft</span>
            </div>
        </transition>

        <!-- Título Revelado -->
        <transition name="fade-up">
            <div v-if="showMain" class="text-center px-6 max-w-2xl opacity-0 animate-fade-up">
                <h1 class="text-4xl font-cinzel mb-4">Bem-vindo à ShinMoriStudio</h1>
                <p class="text-lg opacity-80">Onde a arte encontra o oculto e o belo reside na escuridão.</p>
            </div>
        </transition>

        <!-- Introdução poética -->
        <intro-poetica v-if="showMain" />

        <!-- Runa portal -->
        <runa-portal v-if="showRuna" :ativar="runaAtiva" @click="iniciarInvocacao" />
    </div>

    <!-- Frase de invocação + fogo-fátuo -->
    <transition name="fade-up">
        <div v-if="mostrarFrase" class="bg-black absolute inset-0 flex items-center justify-center z-20">
            <p class="text-2xl md:text-4xl font-cinzel tracking-widest text-purple-300 opacity-0 animate-frase">
                Os artefatos foram invocados...
            </p>
            <fogo-fatuo />
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import IntroPoetica from '@/components/intro_poetica.vue'
import RunaPortal from '@/components/effects/runa_portal.vue'
import ritualCircle from '@/assets/images/ritual_circle.png'
import ParticleFieldAdvanced from '@/components/effects/particle_field_advanced.vue'
import FogoFatuo from '@/components/effects/fogo_fatuo.vue'

const router = useRouter()

const DURATION = 4000
const showQuote = ref(true)
const showMain = ref(false)
const showRuna = ref(false)

const conteudoDesce = ref(false)
const mostrarFrase = ref(false)
const runaAtiva = ref(false)

const onQuoteLeave = () => {
    showMain.value = true

    setTimeout(() => {
        showRuna.value = true
    }, 3000)
}

const buscarProdutos = async () => {
    try {
        const response = await axios.get('http://localhost:3000/products')
        const produtos = response.data
        // Aqui você pode guardar os produtos em uma variável reativa para passar para o /catalogo
        console.log(produtos)  // Aqui só para ver no console, mas armazene onde for necessário
    } catch (error) {
        console.error('Erro ao buscar produtos:', error)
    }
}

const iniciarInvocacao = async () => {
  runaAtiva.value = true

  setTimeout(() => {
    conteudoDesce.value = true
  }, 700)

  setTimeout(() => {
    mostrarFrase.value = true
  }, 1400)

  // Chama o backend após o tempo do efeito
  await new Promise(resolve => setTimeout(resolve, 2100))
  
  // Chama a função para buscar os produtos
  await buscarProdutos()

  setTimeout(() => {
    router.push('/catalogo')
  }, 1000)
}

onMounted(() => {
    setTimeout(() => {
        showQuote.value = false
    }, DURATION)
})
</script>

<style scoped>
@keyframes fade-in-slow {
    0% {
        opacity: 0;
        transform: scale(0.95) blur(2px);
    }

    100% {
        opacity: 1;
        transform: scale(1) blur(0);
    }
}

@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes spin-slow {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes frase {
    0% {
        opacity: 0;
        transform: translateY(30px) scale(0.98);
    }

    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.animate-fade-in-slow {
    animation: fade-in-slow 2.5s cubic-bezier(0.66, 0, 0.21, 1) 0.2s forwards;
}

.animate-fade-up {
    animation: fade-up 1.2s ease-out forwards;
}

.animate-frase {
    animation: frase 1.2s ease-out forwards;
}

.animate-spin-slow {
    animation: spin-slow 90s linear infinite;
}

.fade-scale-leave-active {
    transition: all 1.2s ease;
    opacity: 0;
    transform: scale(0.92);
}

.fade-up-enter-active {
    transition: opacity 1.2s ease, transform 1.2s ease;
}

.ritual-opacity {
    transition: opacity 2s ease;
}
</style>