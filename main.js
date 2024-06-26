const { createApp, ref } = Vue;
createApp({
    setup() {
        const product = ref("Boots");
        const desc = ref("Wears on both feet, keeps you warm");
        const image = ref("./assets/images/socks_green.jpg");
        const in_stock = ref(true);
        const inventory = ref(100);
        const product_link = ref("https://www.camt.cmu.ac.th/");
        const sale = ref(false);
        const details = ref(["50% cotton", "30% wool", "20% polyester"]);
        return { product, desc, image, product_link, in_stock, inventory, sale, details };
    },
}).mount("#app");
