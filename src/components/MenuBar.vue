<template>
	<div>
		<ul>
			<li v-on:click="selectTab('Home')"><a>Home</a></li>
			<li v-on:click="selectTab('Work')"><a>Work</a></li>
			<li v-on:click="selectTab('Contact')"><a>Contact</a></li>
		</ul>
		<tab-content :selection="selection"></tab-content>
	</div>
</template>

<script>
import TabContent from './TabContent.vue'

export default {
	name: "MenuBar",
	data() {
		return {
			selection: 'Home',
		}
	},
	methods: {
		selectTab(string) {
			this.selection = string;
		}
	},
	components: {
		TabContent
	}
}
</script>

<style>
	ul {
		display: flex;
		justify-content: space-around;
	}
	li {
		flex-direction: column;
	}
</style>