<script setup lang="ts">
    import { SearchOutline } from '@vicons/ionicons5';
</script>
<template>
    <NPopover trigger="hover" placement="bottom">
        <template #trigger>
            <NButton circle quaternary>
                <template #icon>
                    <NIcon> <SearchOutline /></NIcon>
                </template>
            </NButton>
        </template>
        <span>{{ $t('extends.search') }}</span>
    </NPopover>
</template>
