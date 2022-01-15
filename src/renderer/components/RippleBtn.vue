<template>
    <div class="btn-box">
        <button class="ripple-btn"
            @click="clicked"
            :style="`
                --rb-width: ${width};
                --rb-bgcolor-1: ${bgColor1};
                --rb-bgcolor-2: ${bgColor2};
                --rb-font-color: ${fontColor};
            `">
            {{ text }}
            <span ref="ripple"></span>
        </button>
    </div>
</template>

<script>
import { defineComponent, ref} from 'vue'

export default defineComponent({
	props: {
		text: {type: String, default: 'BUTTON'},
		width: {type: String, default: '80px'},
		bgColor1: {type: String, default: '#e013b3'},
		bgColor2: {type: String, default: '#47b8f3'},
		fontColor: {type: String, default: '#fff'}
	},

	setup(_, context) {
		// -----------------------------------------------
		// DOMElement
		// -----------------------------------------------
		const ripple = ref(null)

		/**
         * Click action
         */
		const clicked = (e) => {
			ripple.value.classList.add('ripple')
			let rect = e.target.getBoundingClientRect()
			let x = e.clientX - rect.left
			let y = e.clientY - rect.top
			ripple.value.style.left = x + 'px'
			ripple.value.style.top = y + 'px'

			setTimeout(() => {
				ripple.value.classList.remove('ripple')
			}, 1000)

			context.emit('btnclick')
		}

		return {
			// function
			clicked,

			// ref
			ripple
		}
	},
})
</script>

<style lang="scss" scoped>
.btn-box {
    width: 100%;
    text-align: center;
    .ripple-btn {
        width: var(--rb-width);
        margin: 0 auto;
        padding: 6px;
        position: relative;
        overflow: hidden;
        border: none;
        border-radius: 10px;
        letter-spacing: 2px;
        font-weight: bold;
        color: var(--rb-font-color);
        background: linear-gradient(90deg, var(--rb-bgcolor-1), var(--rb-bgcolor-2));

        .ripple {
            position: absolute;
            background: #fff;
            transform: translate(-50%, -50%);
            pointer-events: none;
            border-radius: 50%;
            animation: animate 1s linear infinite;
        }
    }
}

@keyframes animate {
    0% {
        width: 0px;
        height: 0px;
        opacity: 0.5;
    }
    100% {
        width: 500px;
        height: 500px;
        opacity: 0;
    }
}
</style>