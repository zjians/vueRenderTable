export default{
  name: 'table',
  data () {
    return {}
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    rowClick: {
      type: Function,
      default () {
        return null
      }
    }
  },
  render (h) {
    const _this = this
    const headOrder = []
    function getHead () {
      const copeHead = _this.data.headData.map((item, index) => {
        headOrder.push(item.key)
        if (item.type !== 'normal') {
          return h('th', {}, [
            item.label,
            h('span', '↑'),
            h('span', '↓')
          ])
        } else {
          return h('th', item.label)
        }
      })
      return copeHead
    }
    function getBody () {
      const bodyTr = []
      _this.data.bodyData.map((item, index) => {
        const bodyTd = []
        headOrder.map((itemKey) => {
          bodyTd.push(
            h('td', item[itemKey])
          )
        })
        bodyTr.push(
          h('tr', {
            on: {
              click: _this.rowClick.bind(_this, {index, Rowdata: item, cellData: bodyTd[index]})
            }
          }, bodyTd)
        )
      })
      return bodyTr
    }
    return h('table', {}, [
      h('thead', {}, [
        h('tr', getHead())
      ]),
      h('tbody', {}, getBody())
    ])
  }
}
