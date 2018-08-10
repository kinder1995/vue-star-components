import Star from './Star.vue'

const Star = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('Star', Star)
  }
}

export default Star