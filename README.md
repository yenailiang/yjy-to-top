# 返回顶部组件 支持pc端/手机端显示 可在插件内自定义内容 支持ie9

## 说明
| 参数               | 说明                                   |  类型             | 可选值    | 默认值 |
| -------------------| -------------------------:             | :----:           |:----:     | :----: |
| visibility-height  |  滚动高度达到此参数值才出现             |   number         |           | 40     |
| type               |  使用pc端或者移动端                     |   string         |pc/mobile  |  pc    |
| container          | 移动端时传入页面滚动容器的class/id 名称 |                  |           |        |

## Example

```js
import yjyToTop from 'yjy-to-top'
Vue.use(yjyToTop)
```
## html
```HTML
<yjy-to-top :visibility-height="200" type="mobile" container=".content">
    <img src="../src/assets/to-top.png" alt="top">
</yjy-to-top>

```

