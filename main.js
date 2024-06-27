const { createApp, ref, computed } = Vue;
const app = createApp({
    setup() {
        const cart = ref(0);
        const premium = ref(false);
        const details = ref(["50% cotton", "30% wool", "20% polyester"]);
        function updateCart() {
            cart.value++;
        }
        return { cart, premium, details, updateCart };
    },
});
app.component("product-display", productDisplay).component("product-details", productDetails).mount("#app");
