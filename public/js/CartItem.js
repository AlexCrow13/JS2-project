export const CartItem = {
    props: ['img', 'cartItem'],
    template:`
              <div class="cart-drop-item">
                    <div class="cart-product-block">
                        <img class="cart-product-block-img" :src="img" :alt="cartItem.product_name">
                        <div class="cart-product-block-text">
                            <a href="single-page.html" class="cart-product-name">{{cartItem.product_name}}</a>
                            <span class="cart-product-star">
                                                               <i class="fas fa-star"></i>
                                                               <i class="fas fa-star"></i>
                                                               <i class="fas fa-star"></i>
                                                               <i class="fas fa-star"></i>
                                                               <i class="fas fa-star-half-alt"></i>
                                                             </span>
                            <span class="cart-product-price">{{cartItem.quantity}}&nbsp;<span
                                    class="cart-product-price-x">x</span>$&nbsp{{cartItem.price}}</span>
                        </div>
                        <button class="cart-product-block-btn" @click="$root.$refs.cart.remove(cartItem)">
                            <i class="fas fa-times-circle"></i>
                        </button>
                    </div>
              </div>
    `
};