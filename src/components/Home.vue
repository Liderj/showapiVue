<template>
    <el-menu v-show="!loading" class="el-menu-vertical-demo" router  theme="dark" v-loading.fullscreen.lock="loading">
        <template v-for="item in channelList.jiao">
          <el-menu-item :index="item.channelId" >{{item.name}}</el-menu-item>
        </template>
      </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      channelList: {
        jiao: [{
          'channelId': '',
          'name': ''
        }]
      },
      loading: false
    }
  },
  methods: {
    a () {
      this.loading = true
      this.$http.get('http://route.showapi.com/109-34').then(response => {
        this.channelList.jiao = response.data.showapi_res_body.channelList
        this.loading = false
      }, response => {
        this.loading = false
        this.$message.error('网络错误')
      })
    }
  },
  mounted () {
  },
  created () {
    this.a()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="element-ui/lib/theme-default/index.css">

</style>
