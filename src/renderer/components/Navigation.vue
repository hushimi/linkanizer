<template>
    <div class="navigation flex flex-col items-start">
        <!-- Home Menu -->
        <router-link to="/" class="flex items-center mb-3">
            <fa icon="phone" class="fa-icon" />
            <p class="pl-3">Home</p>
        </router-link>

        <!-- Search Menu -->
        <router-link to="/search" class="flex items-center mb-3">
            <fa icon="search" class="fa-icon" />
            <p class="pl-3">Search</p>
        </router-link>

        <!-- News Menu -->
        <router-link to="/news" class="flex items-center mb-3">
            <fa icon="newspaper" class="fa-icon" />
            <p class="pl-3">News</p>
        </router-link>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {

	},
})
</script>

<style lang="scss" scoped>
.navigation {
    height: 100%;
    color: $accent;
    a {
        &.router-link-exact-active {
          color: aqua;
            .fa-icon {
                color: aqua;
            }
        }
    }
}
</style>