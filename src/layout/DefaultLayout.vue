<template>
    <NLayout has-sider>
        <Sider></Sider>
        <NLayout>
            <Header></Header>
            <NLayoutContent>
                <main></main>
            </NLayoutContent>
            <NLayoutFooter>成府路</NLayoutFooter>
        </NLayout>
    </NLayout>
</template>
<script setup lang="ts">
    import Header from '@/components/Header/index.vue';
    import Sider from '@/components/Sider/index.vue';
</script>
