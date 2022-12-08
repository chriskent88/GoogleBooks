<template>
  <div class="book">
    <router-link
      :to="{
        name: 'BookView',
        params: {
          id: bookData.id ? bookData.id : '',
          bookTitle: bookData.volumeInfo.title,
          bookImage: bookData.volumeInfo.imageLinks.thumbnail,
          bookDescription: bookData.volumeInfo.description,
          bookPage: bookData.volumeInfo.pageCount,
          bookDate: bookData.volumeInfo.publishedDate,
          bookAuthor: bookData.volumeInfo.authors,
          bookAvgRating: bookData.volumeInfo.averageRating,
          bookRatingsCount: bookData.volumeInfo.ratingsCount,
          bookCategory: bookData.volumeInfo.categories,
          bookLink: bookData.volumeInfo.infoLink,
        },
      }"
    >

      <span class="thumb">
        <img :src="bookData.volumeInfo.imageLinks.thumbnail" :alt="bookData.volumeInfo.title" />
      </span>
  
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    bookData: {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.book a {
  display: block;
  position: relative;
  text-decoration: none;
}

.book .thumb {
  display: block;
  transition: transform .3s ease-out, box-shadow .3s ease-out;
  transform: scale(1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1 / 1.6;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
}

.book .thumb:before {
  content: "";
  background: linear-gradient(to right, rgb(0, 0, 0, 0.4) 1px, rgba(255, 255, 255, 0.2) 2px, rgba(255, 255, 255, 0.1) 4px, rgba(255, 255, 255, 0.1) 4px, transparent 6px, transparent 6px, rgba(255, 255, 255, 0.1) 7px, transparent 16px);
  box-shadow: 0 0 5px -1px black, inset -1px 1px 2px rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

.book .thumb:after {
  content: "";
  position: absolute;
  opacity: 0;
  transition: opacity .3s ease-out;
  inset: 0;
  z-index: 5;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
}

.book a:hover .thumb {
  transform: scale(1.05);
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}

.book a:hover .thumb:after {
  opacity: 1;
}

.book .thumb img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

</style>
