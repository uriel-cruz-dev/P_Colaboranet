import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const contador = ref(props.value ?? 15)

    return {
      contador
    }
  }
})
