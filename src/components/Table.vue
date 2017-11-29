<template>
  <div class='tableWrapper'>
    <z-table :data="tableData" :rowClick='handleRowClick'></z-table>
  </div>
</template>

<script>
import ZTable from './tableRend.js'
export default {
  name: 'render1',
  data () {
    return {
      tableData: {
        headData: [
          {
            type: 'normal',
            label: '姓名',
            key: 'name'
          },
          {
            type: 'sortable',
            label: '年龄',
            key: 'age'
          },
          {
            type: 'sortable',
            label: '电话',
            key: 'phone'
          },
          {
            type: 'sortable',
            label: '地址',
            key: 'address'
          }
        ],
        bodyData: [
          {
            name: '王小虎',
            age: '24',
            phone: '13585511111',
            address: '这也是个假地址'
          },
          {
            name: '周小健',
            age: '25',
            phone: '13585512222',
            address: '这是个假地址'
          },
          {
            name: '吴小智',
            age: '26',
            phone: '13585533333',
            address: '这也是个假地址'
          },
          {
            name: '吕小萌',
            age: '27',
            phone: '13585544444'
          }
        ]
      }
    }
  },
  components: {
    ZTable
  },
  methods: {
    handleRowClick (rowData, event) {
      alert('行被点击')
      console.dir(rowData)
      console.dir(event)
    }
  }
}
</script>

<style lang='less'>
  .tableWrapper{
    table {
      border:1px solid #aaa;
      width:100%;
      border-collapse: collapse;
      thead{
        background:#f0f0f0;
        th{
          padding: 10px 0;
          border-right:1px solid #999;
          border-bottom:1px solid #999;
        }
      }
      tbody{
        td{
          border-top:1px solid #aaa;
          border-right:1px solid #aaa;
          padding:5px 0;
        }
        tr:hover{
          cursor: pointer;
          background:#0af;
        }
      }
    }
  }
</style>
