<template>
  <div id="app">
    <main id="content">
      <div class="wrapper">
        <h1 class="fw-bold">Demo</h1>

        <hr />

        <h2>Theming</h2>
        <ThemeSwitch
          @mode-changed="updateMode"
          @variant-changed="updateVariant"
        />

        <hr />

        <h2>Complex Data Tables</h2>
        <DemoOrders
          caption="Current orders"
          :orders="ordersData"
          :mode="mode"
          :variant="variant"
        />

        <hr />

        <h2>Form Fields &amp; Error Messaging</h2>
        <ExampleForm :mode="mode" :variant="variant" />
      </div>
    </main>
  </div>
</template>

<script>
import DemoOrders from "./components/DemoOrders.vue";
import ExampleForm from "./components/ExampleForm.vue";
import ThemeSwitch from "./components/ThemeSwitch.vue";

export default {
  name: "App",
  components: {
    DemoOrders,
    ExampleForm,
    ThemeSwitch,
  },
  data() {
    return {
      mode: "light",
      variant: "galaxy",

      // DEMO: API-first Approach
      // Example data could be pulled from API request
      ordersData: [
        {
          id: 1,
          client: "Realpoint",
          email: "kryhorovich0@behance.net",
          country: "Belarus",
        },
        {
          id: 2,
          client: "Dazzlesphere",
          email: "gmapes1@cocolog-nifty.com",
          country: "China",
        },
        {
          id: 3,
          client: "Yombu",
          email: "adreng2@yelp.com",
          country: "Belarus",
        },
        {
          id: 4,
          client: "Trilia",
          email: "hsilversmid3@businessweek.com",
          country: "China",
        },
        {
          id: 5,
          client: "Rhynyx",
          email: "dtratton4@liveinternet.ru",
          country: "Indonesia",
        },
        {
          id: 6,
          client: "Realcube",
          email: "tclendening5@aboutads.info",
          country: "Argentina",
        },
        {
          id: 7,
          client: "Thoughtbridge",
          email: "cforsyth6@google.ca",
          country: "Chad",
        },
        {
          id: 8,
          client: "Fliptune",
          email: "mgilberthorpe7@last.fm",
          country: "Brazil",
        },
        {
          id: 9,
          client: "Blogpad",
          email: "kklimontovich8@nyu.edu",
          country: "Philippines",
        },
        {
          id: 10,
          client: "Mita",
          email: "sbaldam9@fda.gov",
          country: "Indonesia",
        },
        {
          id: 11,
          client: "Einti",
          email: "ctownshenda@sakura.ne.jp",
          country: "Namibia",
        },
        {
          id: 12,
          client: "Blognation",
          email: "ngabbottb@biblegateway.com",
          country: "Benin",
        },
        {
          id: 13,
          client: "Twitterbeat",
          email: "tmacaleesec@discovery.com",
          country: "Indonesia",
        },
        {
          id: 14,
          client: "Gabspot",
          email: "sfranzked@dmoz.org",
          country: "Greece",
        },
        {
          id: 15,
          client: "Leenti",
          email: "mshoute@senate.gov",
          country: "Belgium",
        },
      ],
    };
  },
  methods: {
    updateMode(mode) {
      this.mode = mode;
      this.$emit("mode-updated", mode);
    },
    updateVariant(variant) {
      this.variant = variant;
      this.$emit("variant-updated", variant);
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

body {
  font-size: 0.85rem;
}

.wrapper {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 1rem;
}

// DEMO: Responsive styling
h2 {
  font-size: 1.25rem;
}

@include media-breakpoint-up(sm) {
  body {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.75rem;
  }
}

@include media-breakpoint-up(md) {
  h2 {
    font-size: 2.25rem;
  }
}
</style>
