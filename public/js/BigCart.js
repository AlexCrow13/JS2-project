import {BigCartItem} from "./BigCartItem.js";

export const BigCart = {
    inject: ['getJson', 'putJson', 'postJson', 'deleteJson'],
    props: ['cartItems'],
    components: {
        BigCartItem
    },
    data() {
        return {
            imgCart: 'https://placehold.it/261x280',
            inputQuantity: 1
        }
    },
    computed: {
        calcSum() {
            return this.$root.cartItems.reduce((accum, item) => accum += item.price*item.quantity, 0);
        }
    },
    methods: {
        clearCart() {
            this.deleteJson(`/api/cart/all`)
                .then(data => {
                    if (data.result) {
                        this.$root.cartItems = []
                    }
                });
        }
    },
        template: `
            <div class="shopping-cart-wrap cart-page">
            <section class="product-cart">
                <h2 class="hidden">Shopping Cart</h2>
                <div class="product-cart-name">
                    <span class="product-cart-col-name name-details">Product Details</span>
                    <span class="product-cart-col-name">unite Price</span>
                    <span class="product-cart-col-name">Quantity</span>
                    <span class="product-cart-col-name">shipping</span>
                    <span class="product-cart-col-name">Subtotal</span>
                    <span class="product-cart-col-name name-delete">ACTION</span>
                </div>
                <BigCartItem ref="bigItem"
                        v-for="item of $root.cartItems"
                        :key="item.id_product"
                        :img="item.img"
                        :cartItem="item"
                ></BigCartItem>
            </section>
            <div class="product-cart-btn">
                <button class="cart-btn" @click="clearCart" >cLEAR SHOPPING CART</button>
                <button class="cart-btn">cONTINUE sHOPPING</button>
            </div>
            <div class="buy-order">
                <section class="buy-order-address">
                    <h3 class="buy-order-address-header">
                        Shipping Adress
                    </h3>
                    <select class="buy-order-addres-country">
                        <option value="bangladesh">Bangladesh</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="russia">Russia</option>
                    </select>
                    <input type="text" class="buy-order-addres-state" placeholder="State"/>
                    <input type="number" class="buy-order-addres-code" placeholder="Postcode / Zip"/>
                    <button class="buy-order-address-btn">get a quote</button>
                </section>
                <section class="buy-order-discount">
                    <h3 class="buy-order-discount-header">coupon discount</h3>
                    <p class="buy-order-discount-text">Enter your coupon code if&nbsp;you have one</p>
                    <input type="text" class="buy-order-discount-coupon" placeholder="Coupon"/>
                    <button class="buy-order-discount-btn">Apply coupon</button>
                </section>
                <section class="buy-order-complete">
                    <h3 class="hidden">Click and Buy</h3>
                    <span class="buy-order-complete-subPrice">Sub total&nbsp;&nbsp;&nbsp;$&nbsp;{{ calcSum }}</span>
                    <span class="buy-order-complete-grandPrice">GRAND TOTAL&nbsp;&nbsp;&nbsp;<span class="pink-text">$&nbsp;{{ calcSum }}</span></span>
                    <button class="buy-order-complete-btn">proceed to checkout</button>
                </section>
            </div>
        </div>
       `
};