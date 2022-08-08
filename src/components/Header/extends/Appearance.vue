<script setup lang="ts">
    import { SunnyOutline, MoonOutline } from '@vicons/ionicons5';
    import { useDark, useToggle } from '@vueuse/core';
    import { useAppStore } from '@/store';
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const appStore = useAppStore();
    const toggle = () => {
        appStore.toggleTheme(!isDark.value);
        toggleDark();
    };
</script>
<template>
    <NPopover trigger="hover" placement="bottom">
        <template #trigger>
            <NButton @click="toggle" circle quaternary>
                <template #icon>
                    <SunnyOutline v-if="isDark" /> <MoonOutline v-else />
                </template>
            </NButton>
        </template>
        <span>{{
            isDark
                ? $t('extends.darkAppearance')
                : $t('extends.lightAppearance')
        }}</span>
    </NPopover>
</template>
