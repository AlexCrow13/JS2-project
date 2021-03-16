import {InputQuantity} from "./InputQuantity.js";

export const BigCartItem = {
    components: {
      InputQuantity
    },
    inject: ['putJson'],
    props: ['cartItems','img', 'cartItem'],
    data() {
        return {
            inputQuantity: 0,
            value: ''
        }
    },
    methods:{
        inputChangeQuantity(product, val) {
            let find = this.$root.cartItems.find(el => el.id_product === product.id_product);
            this.putJson(`/api/cart/${find.id_product}?input=${val}`, { quantity: val } )
                .then(data => {
                    if (data.result) {
                        find.quantity = +val;
                    }
                });
        }
    },
    template:`
              <div class="product-cart-item">
                    <div class="product-cart-item-details">
                        <img :src="img" :alt="cartItem.product_name" class="product-cart-item-img">
                        <div class="product-cart-item-text">
                            <a href="single-page.html" class="product-cart-item-name">{{cartItem.product_name}}</a>
                            <span class="product-cart-item-description">Color: <span class="product-cart-item-description-val"> Red</span></span>
                            <span class="product-cart-item-description">Size: <span class="product-cart-item-description-val"> Xll</span></span>
                        </div>
                    </div>
                    <div class="product-cart-price">$&nbsp{{cartItem.price}}</div>
                    <form action="#">
                    <input-quantity
                        @input="inputChangeQuantity(cartItem, inputQuantity)"
                        v-model:input-quantity="inputQuantity"
                       :placeholder="cartItem.quantity"
                    ></input-quantity>
                    </form>
                    <div class="product-cart-ship">FREE</div>
                    <div class="product-cart-total-price">$&nbsp{{cartItem.price*cartItem.quantity}}</div>
                    <button class="cart-product-block-btn" @click="$root.$refs.cart.remove(cartItem)">
                        <i class="fas fa-times-circle"></i>
                    </button>
              </div>
    `
};