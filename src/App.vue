<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import { lightTheme, darkTheme } from 'naive-ui';
    import { light } from '@/themes/light';
    import { NThemeEditor } from 'naive-ui';
    import { useAppStore } from './store';
    import { computed } from 'vue';
    const appStore = useAppStore();
    const theme = computed(() => {
        return appStore.theme === 'dark' ? darkTheme : lightTheme;
    });
</script>

<template>
    <NConfigProvider :theme="theme" :theme-overrides="light">
        <NLoadingBarProvider>
            <NThemeEditor>
                <RouterView></RouterView>
            </NThemeEditor>
        </NLoadingBarProvider>
    </NConfigProvider>
</template>

<style></style>
