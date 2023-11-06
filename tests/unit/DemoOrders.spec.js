import { shallowMount } from "@vue/test-utils";
import axe from "axe-core/axe.js";
import DemoOrders from "@/components/DemoOrders.vue";

describe("DemoOrders.vue", () => {
  it("renders props.caption when passed", () => {
    const caption = "My caption";
    const wrapper = shallowMount(DemoOrders, {
      propsData: { caption },
    });
    expect(wrapper.text()).toMatch(caption);
  });

  it("should have no accessibility violations", async () => {
    axe
      .run()
      .then((results) => {
        if (results.violations.length) {
          throw new Error("Accessibility issues found");
        }
      })
      .catch((err) => {
        console.error("Something bad happened:", err.message);
      });
  });
});
