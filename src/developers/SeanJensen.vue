<template>
    <v-container>
        <v-parallax src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1475125665000/photosp/e1d2ff68-b6a7-41da-a66b-bf3b670dee60/stock-photo-transportation-rain-raindrop-long-exposure-new-york-city-bokeh-vibrant-rainy-brooklyn-e1d2ff68-b6a7-41da-a66b-bf3b670dee60.jpg">
          <h1>{{ name }}</h1>
        </v-parallax>
    </v-container>

</template>

<script>

export default {
  data: () => ({
    name: "SEAN JENSEN",
  })
};
</script>

<style scoped>
h1 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: white;
}
</style>