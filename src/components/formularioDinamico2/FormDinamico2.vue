<template>
  <div class="p-4">
    <form @submit.prevent="handleSubmit">
      <div v-for="component in components" :key="component.id">
        <div v-if="component.type === 'select'" class="mb-4">
          <label :for="component.id">{{ component.label }}</label>
          <select
            :id="component.id"
            v-model="formData[component.id]"
            @change="handleSelectChange(component)"
          >
            <option v-for="option in component.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
        <div v-if="component.type === 'input' && component.show" class="mb-4">
          <label :for="component.id">{{ component.label }}</label>
          <input type="text" :id="component.id" v-model="formData[component.id]" />
        </div>
        <div v-if="component.type === 'checkbox'" class="mb-4">
          <label :for="component.id">
            <input
              type="checkbox"
              :id="component.id"
              v-model="formData[component.id]"
              @change="handleCheckboxChange(component)"
            />
            {{ component.label }}
          </label>
        </div>
        <div v-if="component.type === 'radiobutton'" class="mb-4">
          <p>{{ component.label }}</p>
          <div v-for="option in component.options" :key="option.value">
            <label>
              <input
                type="radio"
                :name="component.id"
                :value="option.value"
                v-model="formData[component.id]"
                @change="handleRadioChange(component)"
              />
              {{ option.label }}
            </label>
          </div>
        </div>
      </div>
      <button type="submit" class="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" src="./FormDinamico2"></script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
