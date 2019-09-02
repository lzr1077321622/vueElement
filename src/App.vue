<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	#app {
       min-width: 1082px !important;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;

	}
	a{
		text-decoration: none;
	}
	ul li{
		list-style: none;
	}
</style>


