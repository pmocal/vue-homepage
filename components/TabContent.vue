<template>
	<div v-if="selection == 'Contact'">
		<h2>Find me at:</h2>
		<p>NYC</p>
	</div>
	<div v-else-if="selection == 'Work'">
		<h1>Portfolio</h1>
		<a href="https://www.github.com/pmocal">My Github</a>
	</div>
	<div v-else-if="selection == 'Home'">
		<h1>Welcome to Parthiv Mohan's website</h1>
	</div>
</template>

<script>
	export default {
		name: "TabContent",
		props: ['selection']
	}
</script>

<style>
	img {
		width: 20%;
		height: 20%;
	}
</style>