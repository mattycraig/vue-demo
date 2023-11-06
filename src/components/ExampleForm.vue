<template>
  <form class="row g-3" :data-bs-theme="mode === 'dark' ? 'dark' : false">
    <InputGroup
      input-name="clientname"
      type="text"
      required
      placeholder="Enter a client name"
    >
      Client Name:
    </InputGroup>
    <InputGroup
      input-name="email"
      type="email"
      required
      placeholder="email@email.com"
      >Email:</InputGroup
    >
    <InputGroup
      input-name="password"
      type="password"
      required
      placeholder="Enter a password"
    >
      Password:
    </InputGroup>
    <InputGroup
      input-name="info"
      type="text"
      placeholder="This field is optional"
      helper="This help text can be used to display error messages"
    >
      Not Required:
    </InputGroup>
    <InputGroup
      input-name="hiddenlabel"
      type="text"
      hidden-label
      placeholder="This field has a hidden label"
    >
      Hidden Label:
    </InputGroup>
    <div class="col-12">
      <button
        class="btn"
        :class="{
          'btn-galaxy': variant === 'galaxy',
          'btn-tecsys': variant === 'tecsys',
        }"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import InputGroup from "./InputGroup.vue";

export default {
  name: "ExampleForm",
  components: {
    InputGroup,
  },
  props: {
    mode: {
      default: "light",
      type: String,
    },
    variant: {
      default: "galaxy",
      type: String,
    },
  },
};
</script>
