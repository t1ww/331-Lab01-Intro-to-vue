const { createApp, ref } = Vue;
createApp({
    setup() {
        // Attributes
        const product = ref("Boots");
        const desc = ref("Wears on both feet, keeps you warm");
        const image = ref("./assets/images/socks_green.jpg");
        const inStock = ref(true);
        const inventory = ref(100);
        const productLink = ref("https://www.camt.cmu.ac.th/");
        const sale = ref(false);
        const details = ref(["50% cotton", "30% wool", "20% polyester"]);
        const variants = ref([
            { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
            { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
        ]);
        const sizes = ref(["S", "M", "L"]);
        const cart = ref(0);
        function addToCart() {
            cart.value++;
        }
        function updateImage(variant_image) {
            image.value = variant_image;
        }
        function toggleInStock() {
            inStock.value = !inStock.value;
        }
        // return
        return { product, desc, image, productLink, inStock, inventory, sale, details, variants, sizes, cart, addToCart, updateImage, toggleInStock };
    },
}).mount("#app");
