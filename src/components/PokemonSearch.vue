<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Buscador Section -->
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-bold mb-4">Buscador</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Id</label>
            <input type="text" v-model="id" disabled class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Nombre:</label>
            <input 
              type="text" 
              v-model="searchName"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <button 
            @click="searchPokemon"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Buscar
          </button>
        </div>
      </div>

      <!-- Pokemon Display Section -->
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-bold mb-4">Pokemon</h2>
        <div v-if="pokemon.name" class="space-y-4">
          <div>
            <span class="font-medium">Id:</span>
            <span class="ml-2">{{ pokemon.id }}</span>
          </div>
          <div>
            <span class="font-medium">Nombre:</span>
            <span class="ml-2">{{ pokemon.name }}</span>
          </div>
          <div v-if="pokemon.image" class="flex justify-center">
            <img :src="pokemon.image" :alt="pokemon.name" class="w-32 h-32" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const searchName = ref('')
const id = ref('')

const pokemon = computed(() => store.state.pokemon)

const searchPokemon = () => {
  if (searchName.value.trim()) {
    store.dispatch('obtenerPokemon', searchName.value)
  }
}
</script>

<style scoped>

/* Container and Grid */
.container {
  max-width: 1200px; /* Maximum width */
  margin: 0 auto;    /* Center horizontally */
  padding: 1rem;     /* Padding for the container */
}

.grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 column by default */
  gap: 1rem; /* Space between items */
}

.md\:grid-cols-2 {
  grid-template-columns: repeat(2, 1fr); /* 2 columns for medium and above screens */
}

/* Section styling */
.bg-white {
  background-color: white; /* Background color for sections */
}

.p-4 {
  padding: 1rem; /* Padding for the sections */
}

.rounded {
  border-radius: 0.375rem; /* Rounded corners for the sections */
}

.shadow {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
}

/* Typography */
.text-xl {
  font-size: 1.25rem; /* Extra-large text */
}

.font-bold {
  font-weight: bold; /* Bold font */
}

.mb-4 {
  margin-bottom: 1rem; /* Margin-bottom */
}

.text-sm {
  font-size: 0.875rem; /* Small text size */
}

.font-medium {
  font-weight: 500; /* Medium font weight */
}

.text-gray-700 {
  color: #4a5568; /* Dark gray text */
}

/* Form Inputs */
.block {
  display: block; /* Block-level display */
}

.mt-1 {
  margin-top: 0.25rem; /* Margin-top */
}

.w-full {
  width: 100%; /* Full width */
}

.rounded-md {
  border-radius: 0.375rem; /* Rounded corners for inputs */
}

.border-gray-300 {
  border-color: #e2e8f0; /* Light gray border color */
}

.shadow-sm {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Small shadow for inputs */
}

/* Button */
.bg-green-500 {
  background-color: #48bb78; /* Green background */
}

.text-white {
  color: white; /* White text color */
}

.px-4 {
  padding-left: 1rem; /* Horizontal padding */
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem; /* Vertical padding */
  padding-bottom: 0.5rem;
}

.rounded {
  border-radius: 0.375rem; /* Rounded button corners */
}

.hover\:bg-green-600:hover {
  background-color: #38a169; /* Darker green on hover */
}

/* Pokemon Display Section */
.flex {
  display: flex; /* Flexbox for alignment */
}

.justify-center {
  justify-content: center; /* Center the items */
}

.ml-2 {
  margin-left: 0.5rem; /* Left margin */
}

.w-32 {
  width: 8rem; /* Width for the image */
}

.h-32 {
  height: 8rem; /* Height for the image */
}

</style>
