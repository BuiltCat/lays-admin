<script setup lang="ts">
    import { MenuOutline } from '@vicons/ionicons5';
    import { useAppStore } from '@/store';
    const appStore = useAppStore();
    const toggle = () => {
        appStore.toggleCollapsed(!appStore.collapsed);
    };
</script>
<template>
    <NButton quaternary type="info" @click="toggle">
        <template #icon>
            <NIcon><MenuOutline /></NIcon>
        </template>
    </NButton>
</template>
