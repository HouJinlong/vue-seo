<template>
  <div class="home">
     <h1>This is an home page</h1>
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
  }
}
</script>
