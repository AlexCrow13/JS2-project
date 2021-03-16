 export const ProductItem = {
    props: ['img', 'product'],
    template: `<li class="product-item">
                      <img :src="img" :alt="product.product_name">
                      <div href="single-page.html" class="overlay">
                        <button class="overlay-btn" @click="$root.$refs.cart.addProduct(product)"><span class="overlay-btn--text">Add to Cart</span></button>
                      </div>
                      <a href="single-page.html" class="product-link">{{product.product_name}}</a>
                     <span class="product-price">$&nbsp{{product.price}}</span>
                 </li>
    `
};