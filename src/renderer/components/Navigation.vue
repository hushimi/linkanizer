<template>
    <div class="flex flex-col items-start pt-5 pl-3 pr-2" id="navigation">
        <!-- Link list -->
        <router-link to="/" class="flex items-center mb-4 w-full navlink">
            <fa icon="link" class="fa-icon" />
            <p class="pl-3">Link List</p>
        </router-link>

        <!-- Search Accordion -->
        <div class="accordion mb-4 navlink">
            <div class="accordion-item">
                <h3 class="accordion-title">
                    <fa icon="search" class="fa-icon" />
                    <p class="pl-3 mr-auto w-full text-left">Search</p>
                    <fa icon="chevron-down" class="fa-icon arrow" />
                </h3>

                <!-- Form -->
                <div class="search-form">
                    <div class="text-white mb-4">
                        <label class="search-label s-form">Search By Link Title</label>
                        <input type="text" class="search-input w-full s-form">
                    </div>
                    <div class="text-white mb-4">
                        <label class="search-label s-form">Search By Link</label>
                        <input type="text" class="search-input w-full s-form">
                    </div>
                    <div class="text-white mb-4">
                        <label class="search-label s-form">Search By Tag Name</label>
                        <input type="text" class="search-input w-full s-form">
                    </div>

                    <button class="search-btn">Search</button>
                </div>
            </div>
        </div>

        <!-- ToDo -->
        <router-link to="/todo" class="flex items-center mb-4 w-full navlink">
            <fa icon="check-square" class="fa-icon" />
            <p class="pl-3">To Do</p>
        </router-link>

        <!-- Text Generator -->
        <router-link to="/textgen" class="flex items-center mb-4 w-full navlink">
            <fa icon="pencil-alt" class="fa-icon" />
            <p class="pl-3">Text Generator</p>
        </router-link>

        <!-- News Menu -->
        <router-link to="/news" class="flex items-center mb-4 w-full navlink">
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
				el.addEventListener('click', (event) => {
					const parent = event.target.parentNode
					if (el.classList.contains('active') &&
                        parent.classList.contains('accordion-title')
					) {
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
$navcolor: #9e9e9e;
$navactive: #18F1DE;
$searchactive: #E9464A;

#navigation {
    height: 100%;
    background-color: $menu;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    a {
        &.router-link-exact-active {
          color: $navactive;
            .fa-icon {
                color: $navactive;
            }
        }
    }

    .navlink {
        color: $navcolor;
        .fa-icon {
            color: $navcolor;
        }
    }

    // Search Accordion Style
    .accordion {
        height: auto;
        width: 100%;

        &-item {
            width: 100%;
            border: none;
            overflow: hidden;
            outline: none;

            .accordion-title {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                cursor: pointer;
                color: $navcolor;

                .fa-icon.arrow {
                    font-size: 0.9rem;
                    color: $navcolor;
                    transform: translateX(0) rotate(0);
                    transition: transform 0.15s ease;
                }
            }

            // フォームスタイル
            .search-form {
                width: calc(100% - 36px);
                margin-left: 36px;
                display: none;
                color: $accent;
                font-size: 0.8rem;
                text-align: left;

                .search-btn {
                    display: block;
                    margin: 0 auto;
                    width: 120px;
                    padding: 5px;
                    font-weight: bold;
                    border-radius: 10px;
                    background: $navactive;
                    color: #1E192E;
                }
            }

            &.active {
                .accordion-title {
                    color: $searchactive;
                    .fa-icon {
                        color: $searchactive;
                        &.arrow {
                            transform: translateX(0) rotate(180deg);
                        }
                    }
                }

                .search-form {
                    display: block;
                }
            }
        }
    }
}
</style>