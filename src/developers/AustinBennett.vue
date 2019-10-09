<template>
<v-row justify="space-around" class="row">
	<v-col>
		<v-slider
			v-if="!range"
			v-model="volume"
			:min="min"
			:max="max"
			:disabled="disabled"
			:readonly="readonly"
			:vertical="vertical"
			label="Volume"
			class="slider"
		></v-slider>
	</v-col>
</v-row>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'

export default {
    data () {
      return {
        volume: 10,
        min: 0,
        max: 100,
        disabled: false,
        readonly: false,
        vertical: false,
        range: false,
      }
    },
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