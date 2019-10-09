<template>
<v-row justify="space-around" class="row">
	<v-col>
		<v-form>
			<v-slider
				v-if="!range"
				v-model="volume"
				:min="min"
				:max="max"
				:disabled="disabled"
				:readonly="readonly"
				:vertical="vertical"
				:rules="volumeRules"
				label="Volume"
				class="slider"
			></v-slider>
			<v-text-field v-model="email" label="Email Address" required :rules="emailRules"></v-text-field>
		</v-form>
	</v-col>
</v-row>
</template>

<script>
// import Icon from 'vue-awesome/components/Icon'
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default {
	data: () => ({
		volume: 10,
		min: 0,
		max: 100,
		disabled: false,
		readonly: false,
		vertical: false,
		range: false,
		volumeRules: [
			value => value >= 10 || 'Volume is too low'
		],
		valid: false,
		email: '',
		emailRules: [
			value => emailRegex.test(value) || 'Valid email is required'
		]
	}),
	methods: {

	}
}
</script>

<style scoped>
.row {
	width: 500px;
}
/* .slider {
	width: 100%;
} */

</style>