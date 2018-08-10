# vue-star
一个相对比较简单的vue星星评分插件

```HTML
npm install vue-star-components -S
```

或者可以直接打开我的Star.vue文件，复制源码即可

#### 全局引入组件

```HTML
import Star from 'vue-star-components'
Vue.use(Star)
```
#### 使用组件
```HTML
<vue-star v-model="score"></vue-star>
<vue-star v-model="score" :max="10"></vue-star>
```

#### 单独引入组件

```HTML
import { Star } from 'vue-star-components'

export default {
  components: {
    Star
  },
  data () {}
}
```

#### 使用组件
```HTML
<star v-model="score"></star>
<star v-model="score" :max="10"></star>
```

### 使用说明
    v-model 绑定值
    max 显示星星的数量
    目前组件做的相对比较简单，少了很多判断，不过暂时可以满足一般的需求