import { defineComponent, ref, computed } from 'vue'
import origenData from './origen.json'

type OrigenData = {
  [key: string]: { mostrarInputOrigen: boolean }
}

const origenDataTyped: OrigenData = origenData

export default defineComponent({
  setup() {
    const origenSeleccionado = ref<string | null>(null)
    const origen = ref<string | null>(null)

    const mostrarInputOrigen = computed(() => {
      if (origenSeleccionado.value && origenDataTyped[origenSeleccionado.value]) {
        return origenDataTyped[origenSeleccionado.value].mostrarInputOrigen
      }
      return false
    })
    /**
     *
     * comparativas de js
     *
     * {
     * comparacion : {
     *  origen : {
     * otro, 5, null}
     * }
     * }
     */

    return {
      origenSeleccionado,
      mostrarInputOrigen,
      origen
    }
  }
})
