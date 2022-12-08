<template>
  <div class="detail">
    <div class="detail-container">
      <div class="top-section">
        <div class="blurred-image">
          <img
            :src="bookImage"
            :alt="bookTitle"
          />
        </div>
        <div class="thumb-container">
          <div class="thumb">
            <img
              :src="bookImage"
              :alt="bookTitle"
            />
          </div>
        </div>
        <div class="content-container">
          <div class="title">{{ bookTitle }}</div>
          <div class="authors">
            by {{ bookAuthor.join(', ') }}
          </div>
          <div class="rating-section">
            <div class="rating-stars-container">
              <div
                class="rating-stars"
                v-if="bookAvgRating"
              >
                <div class="empty-stars"></div>
                <div
                  class="full-stars"
                  v-bind:style="{ width: ratingStarWidth}"
                >
                </div>
              </div>
              <div
                class="rating"
                v-if="bookAvgRating"
              >
                {{ bookAvgRating }}
              </div>
            </div>
            <div
              class="rating-count"
              v-if="bookRatingsCount"
            >
              {{ bookRatingsCount }} ratings
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-section">
        <div
          class="description"
          v-if="bookDescription"
        >
          <h3>Description</h3>
          {{ bookDescription }}
        </div>
        <div class="overview">
          <div
            class="categories"
            v-if="bookCategory"
          >
            <span class="icon icon-category">
              <svg viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.933,15.055H3.479A3.232,3.232,0,0,1,.25,11.827V3.478A3.232,3.232,0,0,1,3.479.25h8.454a3.232,3.232,0,0,1,3.228,3.228v8.349A3.232,3.232,0,0,1,11.933,15.055ZM3.479,2.75a.73.73,0,0,0-.729.728v8.349a.73.73,0,0,0,.729.728h8.454a.729.729,0,0,0,.728-.728V3.478a.729.729,0,0,0-.728-.728Z"/>
                <path d="M11.974,34.75H3.52A3.233,3.233,0,0,1,.291,31.521V23.173A3.232,3.232,0,0,1,3.52,19.945h8.454A3.232,3.232,0,0,1,15.2,23.173v8.348A3.232,3.232,0,0,1,11.974,34.75ZM3.52,22.445a.73.73,0,0,0-.729.728v8.348a.73.73,0,0,0,.729.729h8.454a.73.73,0,0,0,.728-.729V23.173a.729.729,0,0,0-.728-.728Z"/><path d="M31.522,34.75H23.068a3.233,3.233,0,0,1-3.229-3.229V23.173a3.232,3.232,0,0,1,3.229-3.228h8.454a3.232,3.232,0,0,1,3.228,3.228v8.348A3.232,3.232,0,0,1,31.522,34.75Zm-8.454-12.3a.73.73,0,0,0-.729.728v8.348a.73.73,0,0,0,.729.729h8.454a.73.73,0,0,0,.728-.729V23.173a.729.729,0,0,0-.728-.728Z"/>
                <path d="M27.3,15.055a7.4,7.4,0,1,1,7.455-7.4A7.437,7.437,0,0,1,27.3,15.055Zm0-12.3a4.9,4.9,0,1,0,4.955,4.9A4.935,4.935,0,0,0,27.3,2.75Z"/>
              </svg>
            </span>
            {{ bookCategory.join(', ') }}
          </div>
          <div class="published-date" v-if="bookDate">
            <span class="icon icon-date">
              <svg viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.545,34.75H5.455a5.211,5.211,0,0,1-5.2-5.2V8.56a5.21,5.21,0,0,1,5.205-5.2h24.09a5.21,5.21,0,0,1,5.2,5.205V29.545A5.211,5.211,0,0,1,29.545,34.75ZM5.455,5.855A2.708,2.708,0,0,0,2.75,8.56V29.545a2.709,2.709,0,0,0,2.705,2.7h24.09a2.708,2.708,0,0,0,2.7-2.7V8.56a2.707,2.707,0,0,0-2.7-2.7Z"/>
                <path d="M33.5,17.331H1.541a1.25,1.25,0,0,1,0-2.5H33.5a1.25,1.25,0,0,1,0,2.5Z"/>
                <path d="M9.459,9.155a1.249,1.249,0,0,1-1.25-1.25V1.5a1.25,1.25,0,0,1,2.5,0V7.905A1.25,1.25,0,0,1,9.459,9.155Z"/>
                <path d="M25.542,9.155a1.249,1.249,0,0,1-1.25-1.25V1.5a1.25,1.25,0,0,1,2.5,0V7.905A1.25,1.25,0,0,1,25.542,9.155Z"/>
              </svg>
            </span>
            {{ bookDate }}
          </div>
          <div
            class="page-count"
            v-if="bookPage"
          >
            <span class="icon icon-pages">
              <svg viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.717,34.748H3.616A3.37,3.37,0,0,1,.25,31.381v-17.1a3.369,3.369,0,0,1,3.366-3.365h17.1a3.368,3.368,0,0,1,3.365,3.365v17.1A3.369,3.369,0,0,1,20.717,34.748ZM3.616,13.416a.866.866,0,0,0-.866.865v17.1a.867.867,0,0,0,.866.867h17.1a.867.867,0,0,0,.865-.867v-17.1a.865.865,0,0,0-.865-.865Z"/>
                <path d="M31.384,24.079H22.837a1.25,1.25,0,1,1,0-2.5h8.547a.867.867,0,0,0,.866-.866V3.618a.866.866,0,0,0-.866-.865h-17.1a.866.866,0,0,0-.866.865v8.548a1.25,1.25,0,0,1-2.5,0V3.618A3.369,3.369,0,0,1,14.279.253H31.384A3.369,3.369,0,0,1,34.75,3.618v17.1A3.37,3.37,0,0,1,31.384,24.079Z"/>
              </svg>
            </span>
            {{ bookPage }} pages
          </div>
          <div
            class="more-info"
            v-if="bookLink"
          >
            <span class="icon icon-link">
              <svg viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5,34.75A17.25,17.25,0,1,1,34.75,17.5,17.27,17.27,0,0,1,17.5,34.75Zm0-32A14.75,14.75,0,1,0,32.25,17.5,14.77,14.77,0,0,0,17.5,2.75Z"/><path d="M33.5,18.75H2.25a1.25,1.25,0,0,1,0-2.5H33.5a1.25,1.25,0,0,1,0,2.5Z"/>
                <path d="M17.5,33.9c-4.86,0-8.66-7.2-8.66-16.4S12.64,1.1,17.5,1.1s8.66,7.2,8.66,16.4S22.36,33.9,17.5,33.9Zm0-30.3c-2.91,0-6.16,5.71-6.16,13.9s3.25,13.9,6.16,13.9,6.16-5.71,6.16-13.9S20.41,3.6,17.5,3.6Z"/>
              </svg>
            </span>
            <a
              :href="bookLink"
              alt="More Info"
              target="_blank"
            >
              More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  props: [
    "id",
    "bookTitle",
    "bookAuthor",
    "bookDescription",
    "bookDate",
    "bookPage",
    "bookAvgRating",
    "bookImage",
    "bookLink",
    "bookRatingsCount",
    "bookCategory",
  ],

  data() {
    return {
      ratingStarWidth: (100 * this.bookAvgRating) / 5 + '%'
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.detail {
  margin-inline: auto;
  max-width: 1170px;
  background: #fff;
  color: #444;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  margin-bottom: 30px;
  text-align: left;
}

.top-section {
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  padding-bottom: 30px;
}

.blurred-image {
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blurred-image:before {
  content: "";
  display: block;
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%);
  z-index: 5;
}

.blurred-image img {
  object-fit: cover;
  margin: -10%;
  min-width: 120%;
  min-height: 120%;
  filter: blur(8px);
}

.content-container {
  position: relative;
  color: #fff;
  z-index: 10;
  padding-top: 20px;
  padding-inline: 30px;
}

.thumb-container {
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  margin-top: -20px;
  z-index: 10;
}

.thumb {
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
}

.thumb:before {
  content: "";
  background: linear-gradient(to right, rgb(0, 0, 0, 0.4) 1px, rgba(255, 255, 255, 0.2) 2px, rgba(255, 255, 255, 0.1) 4px, rgba(255, 255, 255, 0.1) 4px, transparent 6px, transparent 6px, rgba(255, 255, 255, 0.1) 7px, transparent 16px);
  box-shadow: 0 0 5px -1px black, inset -1px 1px 2px rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

.thumb img {
  display: block;
  margin-inline: auto;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  padding-bottom: 10px;
  font-family: var(--serif--font-family);
}

.authors {
  font-size: 14px;
  font-style: italic;
  padding-bottom: 10px;
  font-family: var(--serif--font-family);
}

.rating-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.rating {
  font-size: 11px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 4px;
  align-self: center;
}

.rating::first-letter {
  font-size: 15px;
}

.rating-stars-container {
  display: flex;
  align-items: center;
}

.rating-stars {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #fff;
  overflow: hidden;
}

.empty-stars {
  opacity: 0.25;
}

.full-stars {
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  color: #fff;
}

.empty-stars:before,
.full-stars:before {
  content:"\2605\2605\2605\2605\2605";
  font-size: 20px;
}

.rating-count {
  font-size: 11px;
  opacity: 0.5;
}

.bottom-section {
  padding: 30px;
  border-top: 1px solid #fff;
  background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 8%);
}

.description {
  font-size: 12px;
  line-height: 1.6;
}

.description h3 {
  color: #222;
}

.overview {
  display: flex;
  font-size: 12px;
  gap: 20px;
  padding-top: 30px;
  flex-direction: column;
}

.overview > div {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.overview a {
  color: inherit;
  font-weight: bold;
}

@media ( min-width: 768px ) {

  .top-section {
    text-align: left;
    flex-direction: row;
    gap: 30px;
    padding-inline: 30px 40px;
  }

  .content-container {
    padding-top: 30px;
    padding-inline: 0;
  }

  .rating-section {
    align-items: flex-start;
  }

  .rating-stars-container {
    align-items: flex-start;
  }

  .overview {
    align-items: flex-start;
    flex-direction: row;
    gap: 20px;
  }

  .title {
    font-size: 26px;
  }

  .overview {
    gap: 40px;
  }

  .overview > div + div:before {
    content: "";
    display: block;
    margin-right: 40px;
    width: 1px;
    height: 20px;
    background: rgba(0, 0, 0, 0.2);
  }
}

@media ( min-width: 768px ) {

  .title {
    font-size: 36px;
  }
}

</style>
