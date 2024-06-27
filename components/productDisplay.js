// display template
const productDisplay = {
    // html
    template: `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <!-- image goes here -->
                    <img :src="image" alt="" :class="{outOfStockImage: !inStock}" />
                </div>
            </div>
        </div>
        <div class="product-info">
            <h1 v-if="onSale"><a :href="productLink" target="_blank">{{onSaleTitle}}</a></h1>
            <h1 v-else><a :href="productLink" target="_blank">{{title}}</a></h1>
            <p>description : {{desc}}</p>

            <!-- stock -->
            <p v-if="!inStock">Out of Stock</p>
            <p v-else-if="inventory > 10">In Stock</p>
            <p v-else>Low Stock</p>

            <p>Shipping: {{shipping}}</p>

            <!-- sale -->
            <p v-if="sale">ON SALE !!!</p>
            <p v-else>not on sale</p>

            <product-details :details></product-details>
            
            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">{{variant.color}}</div>
            <p><span v-for="size in sizes">{{size}} ,</span></p>
            <!-- shorten version -->
            <div>
                <button class="button" :disabled="!inStock" @click="addToCart" :class="{disabledButton: !inStock}">Add to cart</button>
                <button class="button" :disabled="!inStock" @click="removeFromCart" :class="{disabledButton: !inStock}">Remove from cart</button>
                <button class="button" @click="toggleInStock">Toggle stock status</button>
            </div>
        </div>

    `,
    props: {
        premium: Boolean,
        details: Array,
    },
    setup(props, {emit}) {
        // Attributes
        const shipping = computed(() => {
            if (props.premium) {
                return "free";
            } else {
                return 30;
            }
        });
        const product = ref("Boots");
        const brand = ref("SE 331");
        const desc = ref("Wears on both feet, keeps you warm");
        const inventory = ref(100);
        const productLink = ref("https://www.camt.cmu.ac.th/");
        // variants
        const variants = ref([
            { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50, onSale: true },
            { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0, onSale: false },
        ]);
        const selectedVariant = ref(0);
        function updateVariant(_index) {
            selectedVariant.value = _index;
        }
        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        });
        const onSale = computed(() => {
            return variants.value[selectedVariant.value].onSale;
        });

        // size
        const sizes = ref(["S", "M", "L"]);
        function addToCart() {
            emit('add-to-cart', variants.value[selectedVariant.value].id);
        }
        function removeFromCart() {
            emit('remove-from-cart', variants.value[selectedVariant.value].id);
        }
        function updateImage(_variant_image) {
            image.value = _variant_image;
        }
        function toggleInStock() {
            inStock.value = !inStock.value;
        }
        // title
        const title = computed(() => {
            return brand.value + " " + product.value;
        });
        const onSaleTitle = computed(() => {
            return brand.value + " " + product.value + " is on sale!";
        });
        // return
        return {
            title,
            onSaleTitle,
            desc,
            image,
            productLink,
            inStock,
            inventory,
            onSale,
            variants,
            sizes,
            addToCart,
            removeFromCart,
            updateImage,
            updateVariant,
            toggleInStock,
            shipping,
        };
    },
};
