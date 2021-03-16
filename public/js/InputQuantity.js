export const InputQuantity = {
    props: ['inputQuantity'],
    emits: ['update:inputQuantity'],

    template: `
            <input
              type="number"
              class="product-cart-count" 
              min="1"
              @input="$emit('update:inputQuantity', $event.target.value)"
             />
    `
};