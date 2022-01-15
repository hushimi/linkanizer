<template>
    <div class="flex flex-col items-start pt-5 pl-3 pr-2" id="navigation">
        <!-- Link list -->
        <router-link to="/" class="flex items-center mb-4 w-full navlink">
            <fa icon="link" class="fa-icon" />
            <p class="pl-3">Link List</p>
        </router-link>

        <!-- Search Accordion -->
        <div class="accordion mb-4 navlink">
            <div class="accordion-item" @click="toggleSearch" ref="accordion">
                <h3 class="accordion-title">
                    <fa icon="search" class="fa-icon" />
                    <p class="pl-3 mr-auto w-full text-left">Search</p>
                    <fa icon="chevron-down" class="fa-icon arrow" />
                </h3>

                <!-- Form -->
                <div class="search-form">
                    <div class="text-white mb-4">
                        <label class="search-label">Search By Link Title</label>
                        <input type="text" class="search-input w-full">
                    </div>
                    <div class="text-white mb-4">
                        <label class="search-label">Search By Link</label>
                        <input type="text" class="search-input w-full">
                    </div>
                    <div class="text-white mb-4">
                        <label class="search-label">Search By Tag Name</label>
                        <input type="text" class="search-input w-full">
                    </div>

                    <RippleBtn class="mx-auto"
                        :width="'120px'"
                        :text="'SEARCH'"
                        @btnclick="searchClick"/>
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
import { defineComponent, onMounted, ref } from 'vue'
import RippleBtn from '@/renderer/components/RippleBtn.vue'

export default defineComponent({
	components: {
		RippleBtn
	},

	setup() {
		onMounted(() => {
		})

		// -----------------------------------------------
		// ライブラリ・DOMエレメント
		// -----------------------------------------------
		const accordion = ref(null)

		// -----------------------------------------------
		// クリック時動作
		// -----------------------------------------------
		/**
         * Searchメニュークリック
         */
		const toggleSearch = (event) => {
			const parent = event.target.parentNode
			if (accordion.value.classList.contains('active') &&
                parent.classList.contains('accordion-title')
			) {
				accordion.value.classList.remove('active')
			} else {
				accordion.value.classList.add('active')
			}
		}

		/**
         * 検索ボタンクリック
         */
		const searchClick = () => {
			console.log('search clicked')
		}

		return {
			// 関数
			searchClick, toggleSearch,

			// ref
			accordion
		}
	},
})
</script>

<style lang="scss" scoped>
$navcolor: #9e9e9e;
$navactive: #18F1DE;
$searchactive: #e013b3;

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

    // フォームスタイル
    .search-form {
        width: calc(100% - 36px);
        margin-left: 36px;
        display: none;
        color: $accent;
        font-size: 0.8rem;
        text-align: left;

        .search-input {
            padding: 0 10px;
            line-height: 28px;
            height: 30px;
            border-radius: 10px;
            background: #404751;
            color: #fff;
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

            // Search clicked action
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