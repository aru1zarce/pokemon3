import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemon: {
      id: null,
      name: '',
      image: ''
    }
  },
  mutations: {
    colocarNombre(state, pokemon) {
      state.pokemon = pokemon
    }
  },
  actions: {
    async obtenerPokemon({ commit }, nombre) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
        const data = await response.json()
        
        const pokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default
        }
        
        commit('colocarNombre', pokemon)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }
  }
})
