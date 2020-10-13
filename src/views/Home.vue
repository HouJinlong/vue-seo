<template>
  <div class="home">
     <h1>This is an home page</h1>
     {{url}}
     <input type="text" v-model="url">
  </div>
</template>

<script>

export default {
  name: 'Home',
  metaInfo: {
    title: '我是Home', // set a title
    meta: [{             // set meta
      name: 'keyWords',
      content: '我是Home关键字'
    },
    {
      name: 'description',
      content: '我是Home描述'
    }],
    link: [{ // set link
      rel: 'asstes',
      href: 'https://assets-cdn.github.com/'
    }]
  },
  data(){
    return {
      url:'侯晋龙'
    }
  },
  mounted () {
    setTimeout(()=>{
      this.url = '七七七',
      this.$nextTick(function(){
        document.dispatchEvent(new Event('render-event'))
      })
    },3000)
  }
}
</script>
