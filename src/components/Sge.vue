<template>
  <ul>
    <li v-for="item in list" @click="showitem(item)" :class="{show:item.show}"><span>{{item.title}}</span>
      <div class="item-content">
        aaaaaaaaaaa
      </div>
    </li>
  </ul>
</template>

<script>
export default{
  data () {
    let jsons = [{'title': '合约1', 'show': true}, {'title': '合约2', 'show': 'true'}, {'title': '合约3', 'show': 'true'}, {'title': '合约4', 'show': 'true'}]
    return {
      list: jsons
    }
  },
  methods: {
    showitem: function (item) {
      item.show = !item.show
    }
  },
  mounted () {
    // this.showitem()
  }
}

</script>
<style scoped >
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
    display: block;
    border-bottom: 1px solid gray;
  }
  li span{
    background-color: #eee;
    padding: 10px 15px;
    
    display: block    
  }

  .item-content{
    display: none;
    border: 1px solid red;
    padding: 10px;
    margin-top: 10px;
  }
  
  .show .item-content{
    display: block;
  }
</style>
