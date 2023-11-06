<template>
  <div
    class="table-responsive"
    :data-bs-theme="mode === 'dark' ? 'dark' : false"
  >
    <table :aria-label="caption" class="table table-striped">
      <caption>
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Client</th>
          <th scope="col">Email</th>
          <th scope="col">Country</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <th scope="row">{{ order.id }}</th>
          <td>{{ order.client }}</td>
          <td>{{ order.email }}</td>
          <td>{{ order.country }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DemoOrders",
  props: {
    caption: {
      required: true,
      type: String,
    },
    orders: {
      required: true,
      type: Array,
    },
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
