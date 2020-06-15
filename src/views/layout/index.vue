<template lang="pug">
    .layout-wrapper
        layout-header 
        layout-side
        tag-view
        .layout(:class="$isShowCollapse ? 'active' : ''") 
            router-view 
</template>

<script>
import layoutHeader from './components/header.vue';
import layoutSide from './components/side.vue';
import tagView from './components/tag_view.vue';

export default {
    components:{
        layoutHeader,
        layoutSide,
        tagView
    },
}
</script>