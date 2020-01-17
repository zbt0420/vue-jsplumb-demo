<template>
  <div class="flow-main">
    <div class="title">
      节点可拖拽
      <span class="remarks">(鼠标按下进行拖拽,可设置网格拖拽+默认连线)</span>
    </div>
    <div class="flow-content" id="flow-content">
      <div class="item" id="item-left" style="left:0px;top:20px">left</div>
      <div class="item" id="item-right" style="left:200px;top:20px">right</div>
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
        // 两种连线方式
        // 第一种uuids
        _this.jsPlumb.addEndpoint(
          'item-left',
          {
            anchors: 'Continuous', // 'Continuous'根据位置而定
            uuid: 'fromId'
          },
          _this.common
        )
        _this.jsPlumb.addEndpoint(
          'item-right',
          {
            anchors: 'Continuous', // ''根据位置而定
            uuid: 'toId'
          },
          _this.common
        )
        _this.jsPlumb.connect({ uuids: ['fromId', 'toId'] })

        // 第二种
        // _this.jsPlumb.connect({
        //   source: 'item-left',
        //   target: 'item-right',
        //   anchor: 'Continuous',
        //   endpoint: 'Dot'
        // })

        // 拖动节点
        _this.jsPlumb.draggable('item-left', {
          containment: 'parent', // 设置界限
          grid: [50, 50]
        })
        _this.jsPlumb.draggable('item-right', {
          containment: 'parent', // 设置界限
          grid: [50, 50]
        })
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
  position: absolute;
}
</style>
