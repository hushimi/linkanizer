<template>
    <div class="menu-bar flex items-center">
        <div class="app-icon">
            <img src="@/renderer/assets/image/appIcon.png" class="h-full w-full">
        </div>
        <div class="app-name text-white ml-2 mr-auto">
            <span>linkanizer</span>
        </div>

        <!-- Minimize, Closeボタン -->
        <div class="btn-box h-full flex items-center">
            <div class="minimize-btn menu-btn h-full flex items-center">
                <fa icon="minus" class="fa-icon text-white m-auto" />
            </div>
            <div class="close-btn menu-btn h-full flex items-center">
                <fa icon="times" class="fa-icon text-white m-auto" />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {

	},
})
</script>

<style lang="scss">
.menu-bar {
    -webkit-app-region: drag;
    -webkit-user-select: none;
    user-select: none;
    height: 30px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: $menu;
    border-bottom: 2px solid $menu;
    .app-icon {
        width: 24px;
        height: 24px;
        margin-left: 3px;
    }
}

.btn-box {
    .menu-btn {
        -webkit-app-region: no-drag;
        width: 36px;
        text-align: center;
        cursor: pointer;
    }

    .minimize-btn:hover {
        background: #404751;
    }

    .close-btn:hover {
        background: #E9464A;
    }

}
</style>