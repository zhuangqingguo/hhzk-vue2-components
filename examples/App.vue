<template>
  <menus-icon iconClass="安全管理" />
</template>

<script>
  import { MenusIcon } from '../packages'
  export default {
    name: 'App',
    components: { MenusIcon },

    mounted() {
      setTimeout(() => {
        this.$forceUpdate()
      }, 1000)
    }
  }
</script>
<style></style>
