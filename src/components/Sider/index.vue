<script setup lang="ts">
    import { menuOptions } from '@/config/menu';
    import { computed, Component, h, ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useAppStore } from '@/store';
    import { NIcon } from 'naive-ui';
    const { t } = useI18n();

    function renderIcon(icon: Component) {
        return () => h(NIcon, null, { default: () => h(icon) });
    }
    const defaultValue = ref(menuOptions[0].key);
    const menu = computed(() => {
        return menuOptions.map((menu) => {
            return {
                ...menu,
                icon: renderIcon(menu.icon),
                title: t(`menu.${menu.key}`),
            };
        });
    });
    const appStore = useAppStore();
</script>
<template>
    <NLayoutSider
        class="h-screen"
        collapse-mode="width"
        :collapsed-width="80"
        :collapsed="appStore.collapsed"
    >
        <div class="p-6">
            <NAvatar
                round
                :size="32"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                class="v-mid"
            />
            <NGradientText
                type="info"
                class="v-mid text-5 pl"
                v-if="!appStore.collapsed"
            >
                王钟浩
            </NGradientText>
        </div>
        <NMenu
            :options="menu"
            :default-value="defaultValue"
            :collapsed-width="80"
            :collapsed="appStore.collapsed"
        ></NMenu>
    </NLayoutSider>
</template>
