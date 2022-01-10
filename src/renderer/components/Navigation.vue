<template>
    <div class="flex flex-col items-start" id="navigation">
        <!-- Home Menu -->
        <router-link to="/" class="flex items-center mb-3 w-full">
            <fa icon="phone" class="fa-icon" />
            <p class="pl-3">Home</p>
        </router-link>

        <!-- Search Accordion menu -->
        <div class="accordion mb-3">
            <div class="accordion-item">
                <h3 class="title">
                    <fa icon="search" class="fa-icon" />
                    <p class="pl-3 mr-auto">Search</p>
                    <fa icon="chevron-down" class="fa-icon arrow" />
                </h3>

                <!-- Form contents -->
                <div class="accordion-contents">
                    <p>Form will be didplayed here</p>
                </div>
            </div>
        </div>

        <!-- News Menu -->
        <router-link to="/news" class="flex items-center mb-3 w-full">
            <fa icon="newspaper" class="fa-icon" />
            <p class="pl-3">News</p>
        </router-link>
    </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
	setup() {
		onMounted(() => {
			// アコーディオンイベント追加
			const accordionItem = document.querySelectorAll('.accordion-item')
			accordionItem.forEach((el) =>
				el.addEventListener('click', () => {
					if (el.classList.contains('active')) {
						el.classList.remove('active')
					} else {
						accordionItem.forEach((el2) => el2.classList.remove('active'))
						el.classList.add('active')
					}
				})
			)
		})

	},
})
</script>

<style lang="scss" scoped>
#navigation {
    height: 100%;
    padding: 5px;
    color: $gray;
    background-color: $menu;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    a {
        &.router-link-exact-active {
          color: aqua;
            .fa-icon {
                color: aqua;
            }
        }
    }

    .accordion {
        height: auto;
        width: 100%;

        &-item {
            width: 100%;
            border: none;
            overflow: hidden;
            outline: none;

            .title {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                cursor: pointer;
                color: $gray;

                .fa-icon.arrow {
                    font-size: 0.9rem;
                    color: $gray;
                    transform: translateX(0) rotate(0);
                    transition: transform 0.15s ease;
                }
            }

            .accordion-contents {
                width: 100%;
                display: none;
                color: $accent;
                font-size: 0.8rem;
                text-align: left;
            }

            &.active {
                .title {
                    color: $orange;
                    .fa-icon {
                        color: $orange;
                        &.arrow {
                            transform: translateX(0) rotate(180deg);
                        }
                    }
                }

                .accordion-contents {
                    display: block;
                }
            }
        }
    }
}
</style>