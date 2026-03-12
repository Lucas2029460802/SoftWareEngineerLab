<template>
  <div class="order-page">
    <h1 class="title">我的订单</h1>

    <div v-if="loading" class="state">正在加载订单...</div>
    <div v-else-if="error" class="state state-error">{{ error }}</div>

    <div v-else class="cards">
      <div v-if="orders.length === 0" class="state">暂时没有订单</div>
      <div
        v-else
        v-for="item in orders"
        :key="item._id || item.id"
        class="card"
      >
        <div class="card-main">
          <div class="card-image-wrap" v-if="item.image">
            <img :src="item.image" alt="" class="card-image" />
          </div>
          <div class="card-body">
            <h2 class="card-name">{{ item.name }}</h2>
            <p class="card-desc" v-if="item.description">{{ item.description }}</p>
            <div class="card-footer">
              <div class="price-sold">
                <span class="card-price">￥{{ item.price }}</span>
                <span class="card-sold">
                  数量{{ item.quantity || 1 }} 件
                </span>
              </div>
            </div>
            <div class="card-review" v-if="item.rating || item.review">
              <span class="rating" v-if="item.rating">用户评分 {{ item.rating }} / 5</span>
              <span class="review-text" v-if="item.review">{{ item.review }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'orderPage',
  data() {
    return{
      loading:false,
      error:null,
      orders:[]
    }
  },
  methods:{
    async fetchOrders(){
      this.loading=true;
      try{
        const response=await axios.get('https://ftdex5oorl.sealoshzh.site/cartGet');
        const data = response.data && response.data.data ? response.data.data : [];
        this.orders = Array.isArray(data) ? data : [];
        console.log(response.data);
      }catch(error){
        this.error=error.message;
      }finally{
        this.loading=false;
      }
    }
  },
  created(){
    this.fetchOrders();
  }
}
</script>

<style scoped>
.order-page {
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

.state {
  font-size: 1rem;
  color: #666;
}

.state-error {
  color: #e74c3c;
}

.cards {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
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