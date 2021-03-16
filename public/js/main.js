import {Products} from "./Products.js";
import {Cart} from "./Cart.js";
import {BigCart} from "./BigCart.js";
import {Error} from "./Error.js";

const App = {
    components: {
        Products,
        Cart,
        BigCart,
        Error
    },
    data() {
        return {
            cartItems: []
        }
    },
    provide() {
        return {
            getJson: this.getJson,
            putJson: this.putJson,
            postJson: this.postJson,
            deleteJson: this.deleteJson
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error))
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error))
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error))
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error))
        }
    }
};

Vue.createApp(App).mount('#app');