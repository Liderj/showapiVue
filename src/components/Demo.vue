<template>
  <el-row type="flex" justify="center">
  <el-col :span="24">
    <div class="content" v-loading.fullscreen.lock="loading">
      <template v-for="item in contentlist">
        <a :href="item.link"><h3>{{item.title}}</h3></a>
        <div class="desc">
          {{item.desc}}
          <img v-if="item.havePic" :src="item.imageurls[0].url" alt="">
        </div>
    </template>
    <el-row v-if="!loading" type="flex" justify="center">
      <el-col :span="24">
        <el-button class="a" :plain="true" @click="addMore()">加载更多</el-button>
      </el-col>
    </el-row>
      </div>
  </el-col>
</el-row>

</template>
<script>
export default {
  data () {
    return {
      contentlist: [{}],
      pages: '2',
      loading: false
    }
  },
  methods: {
    a () {
      let self = this
      self.loading = true
      this.$http.get('http://route.showapi.com/109-35', {
        params: {
          channelId: this.$route.params.id
        }
      }).then(response => {
        self.contentlist = response.data.showapi_res_body.pagebean.contentlist
        self.loading = false
      }, response => {
        self.loading = false
        self.$message.error('网络错误')
      })
    },
    addMore () {
      let self = this
      self.loading = true
      this.$http.get('http://route.showapi.com/109-35', {
        params: {
          channelId: this.$route.params.id,
          page: self.pages
        }
      }).then(response => {
        self.contentlist = self.contentlist.concat(response.data.showapi_res_body.pagebean.contentlist)
        // Array.prototype.push.apply(self.contentlist, response.data.showapi_res_body.pagebean.contentlist)
        console.log(self.contentlist)
        self.pages++
        self.loading = false
      }, response => {
        self.loading = false
        self.$message.error('网络错误')
      })
    }
  },
  mounted () {
    this.a()
  }
}
</script>
<style scoped >
.content{
  padding: 0 10px;
}
.content h3{
  margin: 10px 0;
}
.content a{
  color: #000000;
  text-decoration: none;
}
.desc{
  color: rgb(134,130,129);
}
.a{
  width: 100%;
}
img{
  width: 100%;
  height: auto;
  max-height: 300px;
}
input{
  display: inline-block;
  width: 100%;
  margin: 10px auto;
  color: #52dab1;
  text-align: center;
  outline: none;
  border:none;
  border-radius: 0;
}
</style>
