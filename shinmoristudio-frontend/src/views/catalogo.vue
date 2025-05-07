<template>
    <div class="min-h-screen bg-black text-white px-4 py-10">
        <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <product-card v-for="(produto, index) in produtos" :key="produto.id" :title="produto.title"
                :image="produto.image" :flipped="flipped[index]" :delay="index * 150" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/products/product_card.vue'

// Mock de produtos temporário
const produtos = ref([])

const flipped = ref(produtos.map(() => false))

onMounted(() => {
    produtos.forEach((_, i) => {
        setTimeout(() => {
            flipped.value[i] = true
        }, i * 150 + 300) // pequeno atraso antes do primeiro virar
    })
})
</script>