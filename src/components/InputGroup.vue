<template>
  <div class="col-md-4">
    <label
      :for="inputName"
      :class="{ 'form-label': true, 'visually-hidden': hiddenLabel }"
    >
      <slot></slot>
      <span class="required" v-if="required" aria-hidden="true">*</span>
    </label>
    <input
      :type="type"
      class="form-control"
      :id="inputName"
      :required="required"
      :placeholder="placeholder"
      :aria-describedby="helper ? 'help-' + inputName : false"
    />
    <span :id="'help-' + inputName" class="form-text" v-if="helper">
      {{ helper }}
    </span>
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: {
    inputName: {
      required: true,
      type: String,
    },
    hiddenLabel: Boolean,
    type: {
      required: true,
      type: String,
    },
    required: Boolean,
    placeholder: String,
    helper: String,
  },
};
</script>

<style lang="scss" scoped>
.required {
  color: var(--color-tecsys-dark);
  display: inline-block;
  margin-left: 3px;

  [data-mode="mode-dark"] & {
    color: var(--color-tecsys-light);
  }
}
</style>
