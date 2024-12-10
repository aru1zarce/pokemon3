<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-2xl font-bold text-center">Guía de Pokémon</h1>
    </header>
    <main class="container mx-auto p-4">
      <PokemonSearch />
    </main>
    </div>
</template>

<script setup>
import PokemonSearch from './components/PokemonSearch.vue'
</script>

<style scoped>
/* Estilos generales */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Estilo para el contenedor principal */
.min-h-screen {
  min-height: 100vh;
}

/* Estilo para el encabezado */
header {
  background-color: #1e40af; /* Azul oscuro */
  color: white;
  padding: 16px; /* Espaciado */
}

/* Estilo para el título */
h1 {
  font-size: 2rem; /* Tamaño de fuente */
  font-weight: bold; /* Negrita */
  text-align: center; /* Centrar texto */
}

/* Estilo para el contenedor principal */
.container {
  max-width: 1200px; /* Ancho máximo */
  margin: 0 auto; /* Centrar horizontalmente */
  padding: 16px; /* Espaciado */
}

/* Estilo para el área de búsqueda de Pokémon */
.pokemon-search {
  background-color: white; /* Fondo blanco */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra */
  padding: 16px; /* Espaciado */
}

/* Estilo para los elementos de entrada */
input[type="text"] {
  width: 100%; /* Ancho completo */
  padding: 8px; /* Espaciado interno */
  border: 1px solid #ccc; /* Borde gris */
  border-radius: 4px; /* Bordes redondeados */
  margin-bottom: 16px; /* Espaciado inferior */
}

/* Estilo para el botón de búsqueda */
button {
  background-color: #1e40af; /* Azul oscuro */
  color: white; /* Texto blanco */
  padding: 10px 16px; /* Espaciado */
  border: none; /* Sin borde */
  border-radius: 4px; /* Bordes redondeados */
  cursor: pointer; /* Cambiar cursor */
}

button:hover {
  background-color: #1e3a8a; /* Azul más oscuro al pasar el ratón */
}
</style>