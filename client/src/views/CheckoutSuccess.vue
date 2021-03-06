<template>
  <div class="checkout-page">
    <Navbar></Navbar>
    <div class="checkout-result">
      <div class="checkout-container">
        <div class="main-title">付款成功！</div>
        <div class="order-card-wrapper">
          <div class="order-card">
            <div class="header">
              <div class="title">訂單摘要</div>
            </div>
            <div class="divider"></div>
            <div class="card-content">
              <div class="item-wrapper">
                <div class="text">商品總計</div>
                <div class="total-price">{{ totalPrice | priceFormat }}</div>
              </div>
              <div class="item-wrapper">
                <div class="text">數量總計</div>
                <div class="total-price">{{totalQuantity }}</div>
              </div>
              <div class="divider"></div>
              <div class="item-wrapper summary">
                <div class="text">結帳總金額</div>
                <div class="total-price">{{ totalPrice | priceFormat }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="illustration-and-result">
          <div class="title">付款成功！</div>
          <div class="illustration-wrapper">
            <div class="cover">
              <!--<div class="button">感謝你的使用！</div>-->
            </div>
          </div>
          <div class="submit-button-wrapper">
            <button class="submit-button" type="submit" @click="$router.push('/coupons')">
              <div class="button">查看更多商品</div>
            </button>
            <div class="back-button" @click="$router.push('/')">
              <div class="button">回首頁看更多</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>

import { Toast } from '@/utils/helpers'
import { mapState } from 'vuex'
import cartsAPI from '@/apis/carts'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  data () {
    return {
      order: {},
      totalPrice: 0,
      totalQuantity: 0,
      tradeInfo: {}
    }
  },
  components: {
    Navbar,
    Footer
  },
  mounted () {
    this.fetchPayment()
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    async fetchPayment () {
      const loader = this.$loading.show({
        isFullPage: true,
        opacity: 1
      })
      try {
        const { data } = await cartsAPI.getPaymentInfo(this.$route.query.sn)
        this.totalPrice = data.data.total_amount
        this.calculateTotalPrice(data.data.orderItems)
        loader.hide()
      } catch (error) {
        loader.hide()
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '目前無法取得付款資訊，請稍候'
        })
      }
    },
    calculateTotalPrice (arr) {
      this.totalQuantity = 0
      arr.forEach(c => {
        this.totalQuantity += Number(c.quantity)
      })
    }
  }
}
</script>

<style lang="scss">
$yellow: #F5DF4D;
$ultimategray: #939597;
$divider: #E6ECF0;
$red: rgb(255, 56, 92);
.checkout-page {
  overflow: scroll;
  .checkout-result {
    margin: auto;
    max-width: 1040px;
    scroll-behavior: smooth;
    padding: 0px 24px 22px 24px;
    @media (min-width: 768px) {
      padding: 0px 40px 35px 40px;
      margin-top: 81px;
    }
    @media (min-width: 992px) {
      padding: 48px 80px;
    }
    .checkout-container {
      display: flex;
      flex-direction: column;
      @media (min-width: 992px) {
        flex-direction: row;
      }
      .main-title {
        margin: 24px 0;
        font-size: 22px;
        font-weight: 700;
        text-align: left;
        line-height: 22px;
        @media (min-width: 768px) {
          font-size: 26px;
          line-height: 30px;
        }
        @media (min-width: 992px) {
          display: none;
        }
      }
      .order-card-wrapper {
        flex: 1;
        @media (min-width: 992px) {
          min-width: 300px;
          padding-top: 60px;
        }
        .order-card {
          margin-bottom: 24px;
          border: 1px solid $divider;
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
          .header {
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            padding: 15px;
            background: #000000;
            .title {
              font-size: 16px;
              color: #ffffff;
              font-weight: 600;
            }
          }
          .divider {
            height: 1px;
            background: $divider;
          }
          .card-content {
            padding: 16px 16px 32px 16px;
            .item-wrapper {
              margin-bottom: 24px;
              font-size: 16px;
              font-weight: 600;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            }
            .divider {
              height: 1px;
              background: $divider;
              margin: 24px -16px;
            }
            .item-wrapper.summary {
              font-size: 20px;
              margin-bottom: 0;
            }
          }
        }
      }
      .illustration-and-result {
        flex: 3;
        @media (min-width: 992px) {
          padding: 0 36px;
        }
        .title {
          display: none;
          @media (min-width: 992px) {
            display: block;
            margin-bottom: 24px;
            font-size: 32px;
            font-weight: 700;
            text-align: center;
            line-height: 36px;
          }
        }
        .illustration-wrapper {
          margin: 36px 0;
          width: 100%;
          padding-top: 50%;
          position: relative;
          background: url(../assets/people-eating-food.svg) no-repeat center;
          background-size: contain;
          .cover {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .button {
              padding: 12px 36px;
              border-radius: 30px;
              background: #000000;
              color: #ffffff;
              cursor: pointer;
              font-weight: 700;
              font-size: 16px;
              line-height: 20px;
            }
          }
        }
        .submit-button-wrapper {
          border-top: 1px solid $divider;
          width: 100%;
          background: #ffffff;
          .submit-button {
            cursor: pointer;
            border: none;
            appearance: none;
            margin-bottom: 20px;
            height: 48px;
            width: 100%;
            background: $red;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:focus {
              outline: none;
            }
            .button {
              color: #ffffff;
              cursor: pointer;
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
            }
          }
          .back-button {
            cursor: pointer;
            border: 1px solid #222222;
            margin-bottom: 12px;
            height: 46px;
            width: 100%;
            background: #ffffff;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:focus {
              outline: none;
            }
            .button {
              color: #222222;
              cursor: pointer;
              font-weight: 400;
              font-size: 16px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
