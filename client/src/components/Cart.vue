<template>
  <div class="cart-page">
    <div class="page-container">
      <div class="purchase-card-wrapper">
        <div class="purchase-card">
          <div class="card-content">
            <div class="item-wrapper" v-for="i in 5" :key="i">
              <div class="icon close"></div>
              <div class="container">
                <div class="image-container">
                  <div class="image-wrapper">
                    <div class="image"></div>
                  </div>
                </div>
                <div class="name">ToTsuZen Steak 現切現煎以克計價濕式熟成牛排</div>
                <div class="price-wrapper">
                  <div class="adjust-wrapper">
                    <div class="icon-wrapper">
                      <div class="icon minus"></div>
                    </div>
                    <div class="number">1</div>
                    <div class="icon-wrapper">
                      <div class="icon plus"></div>
                    </div>
                  </div>
                  <div class="price">$399</div>
                </div>
              </div>
              <div class="divider"></div>
            </div>
          </div>
          <div class="total-price-wrapper">
            <div class="text">總計</div>
            <div class="total-price">$1995</div>
          </div>
        </div>
      </div>
      <div class="order-card-wrapper">
        <div class="order-card">
          <div class="header">
            <div class="title">訂單摘要</div>
          </div>
          <div class="divider"></div>
          <div class="card-content">
            <div class="item-wrapper">
              <div class="text">商品總計</div>
              <div class="total-price">$1995</div>
            </div>
            <div class="item-wrapper">
              <div class="text">數量總計</div>
              <div class="total-price">5</div>
            </div>
            <div class="discount">使用優惠券</div>
            <div class="divider"></div>
            <div class="item-wrapper summary">
              <div class="text">結帳總金額</div>
              <div class="total-price">$1995</div>
            </div>
          </div>
          <div class="go-check">
            <div class="button-wrapper">
              <div class="button">前往結帳</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
$yellow: #F5DF4D;
$ultimategray: #939597;
$divider: #E6ECF0;
$red: rgb(255, 56, 92);
.cart-page {
  .page-container {
    display: flex;
    flex-direction: column;
    @media (min-width: 992px) {
      flex-direction: row;
    }
    .purchase-card-wrapper {
      flex: 2;
      @media (min-width: 992px) {
        margin-right: 36px;
      }
      .purchase-card {
        margin-bottom: 24px;
        border: 1px solid $divider;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
        position: relative;
        .card-content {
          .item-wrapper {
            position: relative;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            .icon.close {
              position: absolute;
              right: 15px;
              top: 15px;
              width: 16px;
              height: 16px;
              mask: url(../assets/close.svg) no-repeat center;
              background: #222222;
              mask-size: cover;
            }
            .container {
              display: flex;
              flex-direction: column;
              @media (min-width: 992px) {
                flex-direction: row;
              }
              .image-container {
                display: none;
                @media (min-width: 992px) {
                  display: block;
                  flex: 1;
                  margin-right: 24px;
                }
                .image-wrapper {
                  width: 100%;
                  padding-top: 100%;
                  position: relative;
                  .image {
                    border-radius: 8px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url(https://inline.imgix.net/branch/-LNTA3as3A6I5JWKglD6:inline-live-2a466--LNTA3bp4eBC0NuJ-TSc-48484d1f-999e-401f-94ae-b716e1d3abf5.jpg) no-repeat center;
                    background-size: cover;
                  }
                }
              }
              .price-wrapper {
                flex: 1;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;
                width: 100%;
                @media (min-width: 992px) {
                  flex-direction: row;
                }
                .adjust-wrapper {
                  flex: 1;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  .number {
                    margin-right: 12px;
                    color: #222222;
                    font-weight: 700;
                  }
                  .icon-wrapper {
                    width: 16px;
                    height: 16px;
                    border-radius: 100%;
                    margin-right: 12px;
                    mask-size: cover;
                    background: #000000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .icon {
                      width: 12px;
                      height: 12px;
                      background: #ffffff;
                      mask-size: cover;
                    }
                    .icon.plus {
                      mask: url(../assets/plus.svg) no-repeat center;
                    }
                    .icon.minus {
                      mask: url(../assets/minus.svg) no-repeat center;
                    }
                  }
                }
                .price {
                  font-size: 18px;
                  font-weight: 600;
                }
              }
              .name {
                flex: 2;
                margin: 24px 0;
                font-size: 16px;
                font-weight: 400;
                line-height: 1.5;
                text-align: left;
                @media (min-width: 992px) {
                  margin-right: 24px;
                }
              }
            }
          }
        }
        .divider {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: $divider;
        }
        .info {
          padding: 5px 15px;
          .item-wrapper {
            font-size: 12px;
            font-weight: 400;
            padding: 8px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            line-height: 1.5;
            .icon {
              color: #222222;
              height: 16px;
              width: 16px;
              margin-right: 16px;
            }
          }
        }
        .total-price-wrapper {
          padding: 15px 15px 30px 15px;
          font-size: 18px;
          font-weight: 600;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
    .order-card-wrapper {
      flex: 1;
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
          padding: 16px;
          .item-wrapper {
            margin-bottom: 24px;
            font-size: 16px;
            font-weight: 600;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .discount {
            margin: 12px 0;
            font-size: 14px;
            font-weight: 800;
            color: navy;
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
        .go-check {
          padding: 12px 12px 36px 12px;
          .button-wrapper {
            border: 1px solid #666666;
            border-radius: 15px;
            background: #ffffff;
            padding: 12px 0;
            font-size: 16px;
            font-weight: 600;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            line-height: 1.5;
            .button {
              color: #222222;
            }
          }
        }
      }
    }
  }
}
</style>