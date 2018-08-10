# vue-star
一个相对比较简单的vue星星评分插件

```HTML
npm install vue-star-components -S
```

或者可以直接打开我的Star.vue文件，复制源码即可

#### 引入组件

```HTML
import Star from 'vue-star-components'
```

#### 注册组件
```javascript
export default {
  components: {
    Star
  },
  data () {}
}
```

#### 使用组件
```HTML
<Star v-model="score"></Star>
<Star v-model="score" :max="10"></Star>
```

### 使用说明
    v-model 绑定值
    组件做的相对比较简单，少了很多判断，可以自己添加一些判断
    上面例子的第二行，max 可以设置星星的个数