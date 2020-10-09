<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  metaInfo: {
    title: '我是about', // set a title
    meta: [{             // set meta
      name: 'keyWords',
      content: '我是about关键字'
    },
    {
      name: 'description',
      content: '我是about描述'
    }],
    link: [{ // set link
      rel: 'asstes',
      href: 'https://www.baidu.com/'
    }]
  }
}
</script>