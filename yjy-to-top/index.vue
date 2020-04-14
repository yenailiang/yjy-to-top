<template>
    <div
        :class="type ? 'yjy-to-top-' + type : 'yjy-to-top-pc'"
        id="toTop"
        @click="toTop"
        v-show="btnFlag"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'yjyToTop',
    props: ['visibilityHeight', 'type', 'container'],
    watch: {
      $route () {
        if (this.container) {
          this.btnFlag = false
          setTimeout(() => {
            document.querySelector(this.container).addEventListener('scroll', this.scrollToTop) // scroll 滚动事件
          }, 500)
        }
      }
    },
    data () {
        return {
            btnFlag: false,
            time: null
        }
    },
    methods: {
        // 返回头部的方法，计时器是为了过渡顺滑
        toTop () {
            this.timer = setInterval(() => {
                // scrollTop获取元素的滚动条的垂直位置,Math.floor() 向下取整
                const IS_PEED = Math.floor(-this.scrollTop / 5)
                // 获取当前页面滚动条纵坐标的位置
                if (this.container) {
                  document.querySelector(this.container).scrollTop = document.querySelector(this.container).scrollTop = this.scrollTop + IS_PEED
                } else {
                  document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + IS_PEED
                }
                if (this.scrollTop === 0) {
                  clearInterval(this.timer)
                }
            }, 1)
        },
        scrollToTop () {
            // IE9及以上，safari支持：window.pageYOffset || document.documentElement.scrollTop
            // 谷歌浏览器只支持：document.body.scrollTop
            let scrollTop
            if (this.container) {
              scrollTop = document.querySelector(this.container).scrollTop
            } else {
              scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            }
            const VISIBILITY = parseInt(this.visibilityHeight) || 40
            this.scrollTop = scrollTop
            if (this.scrollTop > VISIBILITY) { // 为了计算距离顶部的高度，当高度大于40显示回顶部图标，小于40则隐藏
                this.btnFlag = true
            } else {
                this.btnFlag = false
            }
        },
        mousewheel (e) {
            if (e.wheelDelta || e.detail) {
                clearInterval(this.timer)
            }
        }
    },
    mounted () {
        if (this.container) {
          setTimeout(() => {
            document.querySelector(this.container).addEventListener('scroll', this.scrollToTop) // scroll 滚动事件
          }, 500)
        } else {
          // window对象表示浏览器窗口，监听滚动事件(所有浏览器都支持window对象)
          window.addEventListener('scroll', this.scrollToTop) // scroll 滚动事件
          window.addEventListener('mousewheel', this.mousewheel)
          window.addEventListener('DOMMouseScroll', this.mousewheel)
        }
    },
    destroyed () { // 销毁事件，当离开页面时调用这个函数
        if (this.container) {
          document.querySelector(this.container).removeEventListener('scroll', this.scrollToTop)
        } else {
          window.removeEventListener('scroll', this.scrollToTop)
        }
    }
}
</script>
<style lang="css" scoped>
    .yjy-to-top-pc {
        position: fixed;
        bottom: 250px;
        left: 50%;
        margin-left: 610px;
    }
    .yjy-to-top-pc img{
        width: 68px;
        height: 68px;
        cursor: pointer;
    }
    .yjy-to-top-mobile {
        width: 1.04rem;
        height: 1.04rem;
        position: fixed;
        bottom: 1rem;
        right: .5rem;
    }
    .yjy-to-top-mobile img{
        width: 100%;
        cursor: pointer;
    }
</style>
