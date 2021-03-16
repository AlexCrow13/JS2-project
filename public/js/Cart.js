import {CartItem} from "./CartItem.js";

export const Cart = {
    inject: ['getJson', 'putJson', 'postJson', 'deleteJson'],
    props: ['cartItems'],
    components: {
        CartItem,
    },
    data() {
        return {
        }
    },
    computed:{
        calcSum() {
        return this.$root.cartItems.reduce((accum, item) => accum += item.price*item.quantity, 0);
        }
    },
    methods: {
        addProduct(product) {
            let find = this.$root.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.putJson(`/api/cart/${find.id_product}/`, { quantity: 1 })
                    .then(data => {
                        if (data.result) {
                            find.quantity++
                        }
                    });
                return
            }

            const prod = Object.assign({quantity: 1}, product);

            this.postJson(`/api/cart`, prod)
                .then(data => {
                    if (data.result) {
                        this.$root.cartItems.push(prod);
                    }
                });
        },
        remove(product){
            if (product.quantity > 1){
                this.putJson(`/api/cart/${product.id_product}`, { quantity: -1 })
                    .then(data => {
                        if (data.result) {
                            product.quantity--
                        }
                    });
                return
            }

            this.deleteJson(`/api/cart/${product.id_product}`, product)
                .then(data => {
                    if (data.result) {
                        this.$root.cartItems.splice(this.$root.cartItems.indexOf(product), 1)
                    }
                });
        }
    },
    mounted() {
        this.getJson(`/api/cart`)
            .then(data => data.contents.forEach(el => this.$root.cartItems.push(el)))
    },
    template: `
                <div class="cart">
                    <input type="checkbox" class="hidden" id="login-cart"/>
                    <p class="cart-drop" v-if="!$root.cartItems.length"><span class="cart-drop-empty">Корзина пуста</span></p>
                    <div v-else class="cart-drop">
                        <CartItem
                                v-for="item of $root.cartItems"
                                :key="item.id_product"
                                :img="item.img"
                                :cartItem="item"
                        ></CartItem>
                        <div class="cart-drop-item">
                            <span class="cart-drop-total-price">TOTAL</span>
                            <span class="cart-drop-total-price">$&nbsp;{{ calcSum }}</span>
                        </div>
                        <div class="cart-drop-item">
                            <a href="checkout.html" class="cart-drop-btn-checkout">Checkout</a>
                        </div>
                        <div class="cart-drop-item">
                            <a href="shopping-cart.html" class="cart-drop-btn-goCart" >Go to cart</a>
                        </div>
                    </div>
                    <label for="login-cart">
                        <img class="login-cart" src="img/cart.svg" alt="cart">
                    </label>
                    <div class="cart-val" v-if="$root.cartItems.length">{{ $root.cartItems.length }}</div>
                </div>
    `
};