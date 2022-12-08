<template>
  <div class="listing">
    <div class="searchForm">
      <form @submit.prevent="getBooks()">
        <div class="input-field">
          <span class="icon icon-search">
            <svg id="e37b3a33-67a4-43e9-ab68-4fc9ee55441c" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.739,26.47a13.11,13.11,0,1,1,13.11-13.11A13.124,13.124,0,0,1,13.739,26.47Zm0-23.72a10.61,10.61,0,1,0,10.61,10.61A10.622,10.622,0,0,0,13.739,2.75Z"/>
              <path d="M33.121,34.75a1.246,1.246,0,0,1-.884-.366L20.858,23.005a1.25,1.25,0,0,1,1.768-1.768L34.005,32.616a1.25,1.25,0,0,1-.884,2.134Z"/>
            </svg>
          </span>
          <input
            placeholder="Enter search terms..."
            v-model="keywordSearch"
          />
        </div>
        <a
          href="#"
          class="btn searchBtn"
          @click="getBooks()"
        >
          <span>Search</span>
        </a>
      </form>

      <div
        class="sort-by"
        v-if="loadState == 'success'"
      >
        <span class="icon icon-sort">
          <svg viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.33,34.32a3.25,3.25,0,0,1-1.11-.2l-.13,0-5.6-2.75a3.27,3.27,0,0,1-2.09-3V20.34a.73.73,0,0,0-.26-.57L2,12.59A3.29,3.29,0,0,1,.8,10.09V3.94A3.26,3.26,0,0,1,4.06.68H30.94A3.26,3.26,0,0,1,34.2,3.94v6.15a3.26,3.26,0,0,1-1.11,2.46L23.8,19.81a.76.76,0,0,0-.21.53V31.05a3.26,3.26,0,0,1-3.26,3.27Zm-.21-2.53a.76.76,0,0,0,1-.74V20.34a3.25,3.25,0,0,1,1.12-2.45l9.29-7.27a.76.76,0,0,0,.2-.53V3.94a.76.76,0,0,0-.76-.76H4.06a.76.76,0,0,0-.76.76v6.15a.77.77,0,0,0,.26.58l9.18,7.17a3.3,3.3,0,0,1,1.16,2.5v7.94a.78.78,0,0,0,.51.72l.12.05Z"/>
          </svg>
        </span>
        <label class="title">Sort by:</label>

        <input
          type="radio"
          id="relevance"
          name="order-by"
          v-model="sortBy"
          value="relevance"
          @change="getBooks()"
        />
        <label for="relevance">Relevance</label>

        <input
          type="radio"
          id="newest"
          name="order-by"
          v-model="sortBy"
          value="newest"
          @change="getBooks()"
        />
        <label for="newest">
          <span>Newest</span>
        </label>
      </div>
    </div>
    <div
      class="loading"
      v-if="loadState == 'loading'"
    >
      <div class="loader"></div>
    </div>
    <div
      class="bookListContainer"
      v-if="loadState == 'success'"
    >
      <div class="bookList">
        <Book
          :bookData="book"
          v-for="(book, i) in books"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Book from '@/components/Book';
import axios from 'axios';

export default {
  components: {
    Book
  },
  data() {
    return {
      books: [],
      keywordSearch: "",
      sortBy: "relevance",
      maxResults: "40",
      loadState: ""
    };
  },
  methods: {
    getBooks() {
      console.log(this.keywordSearch);
      this.loadState = 'loading'
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.keywordSearch}&printType=books&maxResults=${this.maxResults}&orderBy=${this.sortBy}`)
      .then((response) => {
        // handle success
        console.log(response);
        this.books = response.data.items;
        this.loadState = 'success'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-size: 14px;
}

.searchForm {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.searchForm form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  box-shadow: rgb(0 0 0 / 19%) 0px 26px 30px -10px,
    rgb(0 0 0 / 23%) 0px 16px 10px -10px;
}

.searchForm .input-field {
  position: relative;
}

.searchForm .icon-search {
  width: 26px;
  height: 26px;
  position: absolute;
  left: 20px;
  top: 15px;
}

.searchForm .icon-search svg {
  fill: #fff;
}

.searchForm input {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 16px;
  font-family: var(--sans-serif--font-family);
  padding-inline: 60px 30px;
  letter-spacing: .02em;
}

.searchForm input::placeholder {
  color: #fff !important;
  opacity: 0.7;
  font-size: 16px;
  font-family: var(--sans-serif--font-family);
  letter-spacing: .02em;
}

.searchForm .searchBtn {
  color: #fff;
  text-decoration: none;
}

.sort-by {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding-top: 30px;
  width: 100%;
}

.sort-by .icon-sort {
  width: 16px;
  height: 16px;
}

.sort-by .title {
  margin-right: 10px;
}

.sort-by input + label {
  opacity: .4;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;
  background-color: rgba(255, 255, 255, 0);
}

.sort-by input + label:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.sort-by input {
  display: none;
}

.sort-by input:checked + label {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1)
}

.bookList {
  opacity: 1;
  transition: opacity .3s ease-in-out;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  padding-bottom: 60px;
}

.bookList .book {
  flex: 1 1 122px;
  flex-grow: 0;
}

.bookList:empty {
  opacity: 0;
}

.loader {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #FFF;
  margin-top: 20px;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.loader:after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border-bottom: 3px solid #9cbde1;
  border-left: 3px solid transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media ( min-width: 768px ) {

  .searchForm form {
    flex-direction: row;
    justify-content: space-between;
  }

  .searchForm .input-field {
    flex: 2 1 auto;
  }

  .searchForm input,
  .searchForm input::placeholder {
    font-size: 18px;
  }

  .searchForm .searchBtn {
    flex: 1 1 auto;
  }
}

</style>
