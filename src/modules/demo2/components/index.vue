<template>
  <div class="flow-main">
    <div class="title">
      可以删除连线
      <span class="remarks">(点击连线进行删除)</span>
    </div>
    <div class="flow-content" id="flow-content">
      <div class="item" id="item-left">left</div>
      <div class="item" id="item-right">right</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      common: {
        isSource: true,
        isTarget: true
      }
    }
  },
  computed: {},
  methods: {
    initJsplumb() {
      let _this = this
      this.jsPlumb.ready(function() {
        _this.jsPlumb.addEndpoint(
          'item-left',
          {
            anchors: ['TopCenter', 'BottomCenter', 'Left', 'Right'] // 'Continuous'根据位置而定
          },
          _this.common
        )
        _this.jsPlumb.addEndpoint(
          'item-right',
          {
            anchors: ['TopCenter', 'BottomCenter', 'Left', 'Right'] // 'Continuous'根据位置而定
          },
          _this.common
        )
        // 绑定点击事件
        _this.jsPlumb.bind('click', function(conn) {
          if (window.prompt('确定删除所点击的连接吗？ 输入1确定') === '1') {
            _this.jsPlumb.deleteConnection(conn)
          }
        })
      })
    }
  },
  created() {},
  mounted() {
    this.jsPlumb = this.$jsPlumb.getInstance({
      Container: 'flow-content', // 选择器id
      EndpointStyle: { radius: 4, fill: '#acd' }, // 端点样式
      PaintStyle: { stroke: '#d8d8d8', strokeWidth: 3 }, // 绘画样式，默认8px线宽  #456
      HoverPaintStyle: { stroke: '#1E90FF' }, // 默认悬停样式  默认为null
      EndpointHoverStyle: { fill: '#F00', radius: 6 }, // 端点悬停样式
      ConnectionOverlays: [
        // 连线上的默认样式  这里是箭头
        [
          'Arrow', //Arrow Label PlainArrow Diamond Custom
          {
            location: 1,
            paintStyle: {
              stroke: '#00688B',
              fill: '#00688B'
            }
          }
        ]
      ],
      Connector: ['Straight', { gap: 1 }], // 要使用的默认连接器的类型：折线，流程等 Bezier 贝塞尔曲线 Straight 直线 Flowchart 90度转角线 State Machine 状态机
      Endpoint: 'Rectangle' // Dot 圆点 Rectangle 矩形 Image 图像 Blank 空白
    })
    this.$nextTick(() => {
      this.initJsplumb()
    })
  }
}
</script>
<style scoped lang="scss">
.flow-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.flow-content {
  flex: 1;
  padding: 20px 0;
  position: relative;
}
.title {
  font-size: 16px;

  .remarks {
    font-size: 14px;
  }
}
.item {
  float: left;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #333;
  margin-right: 100px;
  margin-left: 20px;
}
</style>
