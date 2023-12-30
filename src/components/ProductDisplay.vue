<template>
  <div class="container">
    <div class="box">
      <div class="card">
        <div class="column">
          <img loading="lazy" v-if="product && product.image" :src="product.image" class="img" />

        </div>
        <div class="column-2">
          <div class="list">
            <h1 v-if="product.title" :style="{ color: nameColor }">{{ product.title }}</h1>
              <h1 v-else :style="{ color: nameColor }">No Title</h1>

            <div class="star">
              <div class="judul">{{ product.category }}</div>
              <div class="rating">
                <div class="div-9">{{ product.rating.rate }}/5</div>
                <span>⭐⭐⭐⭐</span>
              </div>
            </div>
            <div class="deskripsi">{{ product.description }}</div>
            <img loading="lazy" :src="product.additionalImage" class="img-3" />
            <div class="price" :style="{ color: priceColor }">${{ product.price.toFixed(2) }}</div>
            <div class="btn" :style="{ background: buttonColor, color: buttonTextColor }">
              <button class="buy" :style="{ background: buyButtonColor, color: buyButtonTextColor }">Buy now</button>
              <button class="next" :style="{ background: nextButtonColor, color: nextButtonTextColor }" @click="next">Next Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      index: 0,
      products: [],
      nameColor: '', // default color for name
      priceColor: '', // default color for price
      buttonTextColor: '', // default color for button text
    };
  },
  computed: {
    product() {
      return this.products[this.index];
    },


    buyButtonTextColor() {
      return "#fff";
    },

    nextButtonColor() {
      return "#fff";
    },




  
   
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        this.products = data;
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      }
    },
    next() {
      this.index = (this.index + 1) % this.products.length;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
