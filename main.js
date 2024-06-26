const { createApp, ref, computed } = Vue;
createApp({
    setup() {
        // Attributes
        const product = ref("Boots");
        const brand = ref('SE 331');
        const desc = ref("Wears on both feet, keeps you warm");
        const image = ref("./assets/images/socks_green.jpg");
        const inStock = ref(true);
        const inventory = ref(100);
        const productLink = ref("https://www.camt.cmu.ac.th/");
        const sale = ref(false);
        const details = ref(["50% cotton", "30% wool", "20% polyester"]);
        // variants
        const variants = ref([
            { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
            { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 },
        ]);
        const selectedVariant = ref(0);
        function updateVariant(_index) {
            selectedVariant.value = _index;
        }
        const image = computed(()=> {
            return variants.value[selectedVariant.value].image;
        })
        const inStock = computed(()=> {
            return variants.value[selectedVariant.value].quantity;
        })

        // size
        const sizes = ref(["S", "M", "L"]);
        const cart = ref(0);
        function addToCart() {
            cart.value++;
        }
        function updateImage(_variant_image) {
            image.value = _variant_image;
        }
        function toggleInStock() {
            inStock.value = !inStock.value;
        }
        // title
        const title = computed(()=> {
            return brand.value + ' ' + product.value;
        })
        // return
        return { title, desc, image, productLink, inStock, inventory, sale, details, variants, sizes, cart, addToCart, updateImage, updateVariant, toggleInStock };
    },
}).mount("#app");
