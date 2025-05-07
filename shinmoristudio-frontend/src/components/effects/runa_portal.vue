<template>
  <div class="absolute bottom-8 inset-x-0 flex justify-center pointer-events-auto z-20">
    <button class="w-24 h-24 rounded-full bg-transparent outline-none transition hover:scale-105" @click="emitirClique"
      title="Abrir o portal">
      <div :class="['rounded-full', fadeIn && 'animate-fade-button-glow']">
        <img :src="runaImg" alt="Runa Portal" class="w-full h-full object-contain opacity-90 hover:opacity-100"
          :class="[pulsoKey]" />
        <span class="sr-only">Abrir o portal</span>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import runaImg from '@/assets/images/runa_portal.png'

const props = defineProps({
  mostrar: Boolean,
  ativar: Boolean,
})

const emit = defineEmits(['click'])

const pulsoKey = ref('')
const fadeIn = ref(false)

const emitirClique = () => {
  emit('click')
}

watch(
  () => props.ativar,
  (novo) => {
    if (novo) {
      pulsoKey.value = ''
      requestAnimationFrame(() => {
        pulsoKey.value = 'animate-pulse-magico'
        setTimeout(() => {
          pulsoKey.value = ''
        }, 600)
      })
    }
  }
)

onMounted(() => {
  fadeIn.value = true
})
</script>

<style scoped>
@keyframes glow {

  0%,
  100% {
    filter: drop-shadow(0 0 12px #a78bfa);
    box-shadow: 0 0 25px #a78bfa;
  }

  50% {
    filter: drop-shadow(0 0 20px #d1b3ff);
    box-shadow: 0 0 35px #d1b3ff;
  }
}

@keyframes pulse-magico {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes fade-button-glow {
  0% {
    opacity: 0;
    transform: scale(0.8);
    filter: drop-shadow(0 0 0px #000);
    box-shadow: 0 0 0px #000;
  }

  100% {
    opacity: 1;
    transform: scale(1);
    filter: drop-shadow(0 0 20px #a78bfa);
    box-shadow: 0 0 35px #a78bfa;
  }
}

.animate-pulse-magico {
  animation: pulse-magico 0.6s ease-out;
}

.animate-fade-button-glow {
  animation:
    fade-button-glow 1.2s cubic-bezier(0.8, 0, 0.2, 1) forwards,
    glow 3s ease-in-out infinite;
}
</style>
