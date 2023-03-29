<template>
  <div>
    <ArticleDetails :product="product" />
  </div>
</template>

<script setup>
// Grabbing the id using the route param through the method composable useRoute( on nuxt 3 with some concatenation pointing to the params object
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// Fetch the product
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article Not Found",
    // fatal sets to true forces the app to show the page caught by the user inputed through the browser using the window object, basically if the user types something in the url that does not exist manually
    fatal: true,
  });
}

// using definePageMeta method from NUXT3 in order to define meta information such as the type of 'layout' file created.
definePageMeta({
  layout: "articles",
});
</script>
