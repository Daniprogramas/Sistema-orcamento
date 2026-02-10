<template>
  <div>
    <input v-model="descricao" placeholder="Descrição" />
    <input v-model.number="valor" type="number" placeholder="Valor" />
    <button @click="salvar">Salvar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../services/api'

const descricao = ref('')
const valor = ref(0)

const salvar = async () => {
  await api.post('/orcamentos', {
    descricao: descricao.value,
    valor: valor.value
  })
  alert('Orçamento salvo!')
}
</script>
