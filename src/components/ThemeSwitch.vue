<template>
  <div>
    <div class="d-flex mb-4 align-items-center">
      <span class="h6 me-2 my-0">Mode</span>
      <button class="btn btn-sm btn-light me-2" @click="setMode('light')">
        Light
      </button>
      <button class="btn btn-sm btn-dark me-2" @click="setMode('dark')">
        Dark
      </button>
    </div>
    <div class="d-flex mb-4 align-items-center">
      <span class="h6 me-2 my-0">Variant</span>
      <button class="btn btn-sm btn-galaxy me-2" @click="setVariant('galaxy')">
        Galaxy
      </button>
      <button
        class="btn btn-sm btn-tecsys btn-darkgreen me-2"
        @click="setVariant('tecsys')"
      >
        Tecsys
      </button>
    </div>
    <div class="d-flex mb-4 align-items-center">
      <span class="h6 me-2 my-0">Current Theme</span>
      <span>{{ mode }} {{ variant }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  data() {
    return {
      mode: "light",
      variant: "galaxy",
    };
  },
  methods: {
    setMode(mode) {
      document.body.setAttribute("data-mode", `mode-${mode}`);
      this.$emit("mode-changed", mode);
      this.mode = mode;
    },
    setVariant(variant) {
      document.body.setAttribute("data-variant", `variant-${variant}`);
      this.$emit("variant-changed", variant);
      this.variant = variant;
    },
  },
};
</script>

<style lang="scss">
$color-galaxy-light: #be97e4;
$color-galaxy-dark: #491f73;
$color-tecsys-light: #ff6363;
$color-tecsys-dark: #c70000;

:root {
  --color-white: #ffffff;
  --color-dark: #212529;

  --color-galaxy-light: #{$color-galaxy-light};
  --color-galaxy-dark: #{$color-galaxy-dark};

  --color-tecsys-light: #{$color-tecsys-light};
  --color-tecsys-dark: #{$color-tecsys-dark};
}

// Light Mode
[data-mode="mode-light"] {
  background-color: var(--color-white);

  &[data-variant="variant-galaxy"] {
    h2 {
      color: var(--color-galaxy-dark);
    }
  }

  &[data-variant="variant-tecsys"] {
    h2 {
      color: var(--color-tecsys-dark);
    }
  }
}

// Dark Mode
[data-mode="mode-dark"] {
  background-color: var(--color-dark);
  color: var(--color-white);

  &[data-variant="variant-galaxy"] {
    h2 {
      color: var(--color-galaxy-light);
    }
  }

  &[data-variant="variant-tecsys"] {
    h2 {
      color: var(--color-tecsys-light);
    }
  }
}

// Theme buttons
.btn-galaxy {
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--color-galaxy-dark);
  --bs-btn-border-color: var(--color-galaxy-dark);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: var(--color-galaxy-dark);
  --bs-btn-hover-border-color: var(--color-galaxy-dark);
}

.btn-tecsys {
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--color-tecsys-dark);
  --bs-btn-border-color: var(--color-tecsys-dark);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: var(--color-tecsys-dark);
  --bs-btn-hover-border-color: var(--color-tecsys-dark);
}
</style>
