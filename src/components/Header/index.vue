<script setup lang="ts">
    import FullScreen from './extends/FullScreen.vue';
    import Appearance from './extends/Appearance.vue';
    import Language from './extends/Language.vue';
    import CollapsedMenu from './extends/CollapsedMenu.vue';
    import Search from './extends/Search.vue';
    import Notice from './extends/Notice.vue';
</script>
<template>
    <NLayoutHeader>
        <div class="p-3 flex justify-between p-l-0">
            <CollapsedMenu></CollapsedMenu>
            <NSpace class="left">
                <Search></Search>
                <Notice></Notice>
                <!-- 
                <Opera tip="个性化"><SparklesOutline /></Opera>
                <Opera tip="设置"><SettingsOutline /></Opera> -->
                <Language></Language>
                <Appearance></Appearance>
                <FullScreen></FullScreen>
                <NAvatar
                    round
                    :size="34"
                    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                    class="v-mid"
                />
            </NSpace>
        </div>
    </NLayoutHeader>
</template>
