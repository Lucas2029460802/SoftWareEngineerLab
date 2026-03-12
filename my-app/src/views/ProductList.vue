

<template>
  <div class="product-page">

    <div class="cards">
      <div
        v-for="item in products"
        :key="item.id"
        class="card"
      >
        <div class="card-image-wrap" v-if="item.image">
          <img :src="item.image" alt="" class="card-image" />
        </div>
        <div class="card-body">
          <h2 class="card-name">{{ item.name }}</h2>
          <p class="card-desc">{{ item.description }}</p>
          <div class="card-footer">
            <div class="price-sold">
              <span class="card-price">价格{{ item.price }}</span>
              <span class="card-sold">已售 {{ item.sold }} 件</span>
            </div>
            <button
              type="button"
              class="btn-add"
              @click="addToCart(item)"
            >
              加入购物车
            </button>
          </div>
          <div class="card-review">
            <span class="rating">评分 {{ item.rating }} / 5</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'productListPage',
  data() {
    return{
      loading:false,
      error:null,
      products:[],
      adding:false
    }
  },
  methods:{
    async fetchProducts(){
      this.loading=true;
      try{
        const response=await axios.get('https://ftdex5oorl.sealoshzh.site/productGet');
        this.products=response.data.data;
        console.log(response.data);
      }catch(error){
        this.error=error.message;
      }finally{
        this.loading=false;
      }
    },
    async addToCart(item){
      if (this.adding) return;
      this.adding = true;
      try{
        await axios.post('https://ftdex5oorl.sealoshzh.site/cartPost', {
          productId: item._id || item.id,
          name: item.name,
          price: item.price,
          sold: item.sold,
          rating: item.rating,
          image: item.image,
          quantity: 1
        });
        alert('已加入购物车');
      }catch(error){
        console.error(error);
        alert('加入购物车失败，请稍后重试');
      }finally{
        this.adding = false;
      }
    }
  },
  created() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
.product-page {
  min-height: 100vh;
  padding: 2rem 3rem;
  box-sizing: border-box;
}

.title {
  margin: 0 0 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
}

.cards {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid rgba(44, 62, 80, 0.15);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.35);
}

.card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 1 220px;
  max-width: 320px;
}

.card-image-wrap {
  width: 100%;
  padding-top: 65%;
  position: relative;
  overflow: hidden;
}

.card-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
}

.card-desc {
  margin: 0;
  font-size: 0.9rem;
  color: #777;
  line-height: 1.5;
}

.card-footer {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.price-sold {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.card-price {
  color: #e67e22;
  font-weight: 600;
  font-size: 1rem;
}

.card-sold {
  font-size: 0.85rem;
  color: #888;
}

.btn-add {
  padding: 0.45rem 0.9rem;
  border: none;
  border-radius: 999px;
  background: #2c3e50;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s, transform 0.1s;
}
.btn-add:hover {
  background: #1a252f;
}
.btn-add:active {
  transform: scale(0.96);
}

.card-review {
  margin-top: 0.4rem;
  font-size: 0.85rem;
  color: #666;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.rating {
  font-weight: 500;
  color: #f39c12;
}

.review-text {
  line-height: 1.6;
}
</style>