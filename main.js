const { createApp, ref } = Vue;
createApp({
    setup() {
        const product = ref("Boots");
        const desc = ref("Wears on both feet, keeps you warm");
        const image = ref("./assets/images/socks_green.jpg");
        const product_link = ref("https://www.camt.cmu.ac.th/");
        return { product, desc, image, product_link };
    },
}).mount("#app");
