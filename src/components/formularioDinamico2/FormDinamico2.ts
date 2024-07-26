import { defineComponent, reactive, toRefs } from 'vue'

const formConfig = {
  components: [
    {
      id: 'countrySelect',
      type: 'select',
      label: 'País de origen',
      options: [
        { label: 'México', value: 'mexico' },
        { label: 'EUA', value: 'eua' },
        { label: 'Canadá', value: 'canada' },
        { label: 'Alemania', value: 'alemania' },
        { label: 'Otro', value: 'otro' }
      ],
      onSelect: {
        value: 'otro',
        showComponentId: 'otherCountryInput'
      }
    },
    {
      id: 'otherCountryInput',
      type: 'input',
      label: 'Especifica el país de origen',
      show: false
    },
    {
      id: 'newsletterCheckbox',
      type: 'checkbox',
      label: 'Suscribirse al boletín',
      onCheck: {
        showComponentId: 'emailInput'
      }
    },
    {
      id: 'emailInput',
      type: 'input',
      label: 'Correo electrónico',
      show: false
    },
    {
      id: 'contactMethodRadio',
      type: 'radiobutton',
      label: 'Método de contacto preferido',
      options: [
        { label: 'Correo electrónico', value: 'email' },
        { label: 'Teléfono', value: 'phone' }
      ],
      onSelect: {
        value: 'phone',
        showComponentId: 'phoneInput'
      }
    },
    {
      id: 'phoneInput',
      type: 'input',
      label: 'Número de teléfono',
      show: false
    }
  ]
}

export default defineComponent({
  setup() {
    const state = reactive({
      components: formConfig.components,
      formData: {} as Record<string, any>
    })

    const initializeFormData = () => {
      state.components.forEach((component) => {
        state.formData[component.id] = component.type === 'checkbox' ? false : ''
      })
    }

    const handleSelectChange = (component: any) => {
      const selectedOption = state.formData[component.id]
      if (component.onSelect && component.onSelect.value === selectedOption) {
        showComponent(component.onSelect.showComponentId)
      } else {
        hideComponent(component.onSelect.showComponentId)
      }
    }

    const handleCheckboxChange = (component: any) => {
      const isChecked = state.formData[component.id]
      if (isChecked && component.onCheck) {
        showComponent(component.onCheck.showComponentId)
      } else {
        hideComponent(component.onCheck.showComponentId)
      }
    }

    const handleRadioChange = (component: any) => {
      const selectedOption = state.formData[component.id]
      if (component.onSelect && component.onSelect.value === selectedOption) {
        showComponent(component.onSelect.showComponentId)
      } else {
        hideComponent(component.onSelect.showComponentId)
      }
    }

    const showComponent = (componentId: string) => {
      const component = state.components.find((comp) => comp.id === componentId)
      if (component) {
        component.show = true
      }
    }

    const hideComponent = (componentId: string) => {
      const component = state.components.find((comp) => comp.id === componentId)
      if (component) {
        component.show = false
        state.formData[componentId] = ''
      }
    }

    const handleSubmit = () => {
      console.log(state.formData)
    }

    initializeFormData()

    return {
      ...toRefs(state),
      handleSelectChange,
      handleCheckboxChange,
      handleRadioChange,
      handleSubmit
    }
  }
})
