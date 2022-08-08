<script setup lang="ts">
    import { ResizeOutline, ContractOutline } from '@vicons/ionicons5';
    import BaseExtend from './BaseExtend.vue';
    import { useFullscreen } from '@vueuse/core';
    const { isFullscreen, toggle } = useFullscreen();
</script>
<template>
    <NPopover trigger="hover" placement="bottom">
        <template #trigger>
            <NButton @click="toggle" circle quaternary>
                <template #icon>
                    <NIcon>
                        <ContractOutline v-if="isFullscreen" /><ResizeOutline
                            v-else
                    /></NIcon>
                </template>
            </NButton>
        </template>
        <span>{{ $t('extends.fullscreen') }}</span>
    </NPopover>
</template>
