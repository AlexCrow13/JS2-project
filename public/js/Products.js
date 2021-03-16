import {ProductItem} from "./ProductItem.js";

export const Products = {
    inject: ['getJson'],
    props: {
        page: String
    },
    components: {
        ProductItem
    },
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.getJson(`/api/products/${this.page}`)
            .then(data => data.forEach(el => this.products.push(el)))
    },
    template: `<ul class="product-list">
                    <ProductItem 
                    v-for="el of products" 
                    :key="el.id_product"
                    :img="el.img"
                    :product="el"
                    ></ProductItem>
                </ul>
    `
};