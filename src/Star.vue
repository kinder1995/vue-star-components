<template>
  <div class="star">
    <input v-model="onStar" type="hidden" style="display:none;">
    <span class="off" v-for="(item, index) in max" :key="index" @click="starItem(index + 1)" :class="onStar > index ? 'on' : ''"></span>
  </div>
</template>
<script>
export default {
  name: 'SimpleVueStar',
  props: {
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data () {
    return {
      onStar: null
    }
  },
  created () {
    this.onStar = this.max
  },
  watch: {
    onStar (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.onStar = val
    }
  },
  methods: {
    starItem (index) {
      this.onStar = index
    }
  }
}
</script>
<style>
  .star{}
  .star span{display:inline-block;}
  .star span::before{content:'★';font-size:20px;display:inline-block;}
  .star span.off::before{color:#ccc;}
  .star span.on::before{color:#FFCC66;}
</style>
