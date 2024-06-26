const { createApp, ref } = Vue;
createApp({
    setup() {
        const product = ref("Boots");
        const desc = ref("Wears on both feet, keeps you warm");
        const image = ref("./assets/images/socks_green.jpg");
        return { product, desc, image };
    },
}).mount("#app");
