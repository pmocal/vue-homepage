<template>
	<div v-if="selection == 'Contact'">
		<h2>Find us at:</h2>
		<p>336 S 4th St, Brooklyn, NY 11211</p>
	</div>
	<div v-else-if="selection == 'Examples'">
		<img src="../assets/baldzain.png">
		<img src="../assets/shortzain.jpg">
		<img src="../assets/bruiser.jpg">
	</div>
	<div v-else-if="selection == 'Home'">
		<h1>Welcome to</h1>
		<img src="../assets/j-lbarber.png">
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