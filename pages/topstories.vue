<template>
  <div class="container">
    <Quotes v-if="!!this.mostCommontWords.length" :titles="topWriters" title="Top Rated Writers Names" />

    <List v-if="!!this.mostCommontWords.length" 
      :_array="this.mostCommontWords" 
      title="List of the top 10 words in the title in recent articles with at least 9,000 karma points by the author."
    />
    <Loader v-else />

  </div>
</template>

<script>
import { WordCounter } from '../helpsers';

export default {
  data() {
    return {
      URL: 'https://hacker-news.firebaseio.com/v0/',
      titles: [],
      topWriters: [],
      mostCommontWords: [],
      stories: [],
    }
  },

  methods: {
    async getLastStoryIds(count) {
      let storyIds = await this.$axios.$get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      count > 0 && (storyIds = storyIds.slice(0, count));
      return storyIds;
    },

    async _getStories(){
      let storyIds = await this.getLastStoryIds(50);

      await Promise.all(storyIds.map(q =>
        this.$axios.$get('https://hacker-news.firebaseio.com/v0/item/' + q + '.json?print=pretty')
          .then(response => {
            this.stories.push(response);
          })
      ));

      const allWriters = []
      !!this.stories.length && this.stories.map(writers => allWriters.push(writers.by))

      // Filter writers over 9000 karma points
      await this.getTopRatedWriters(allWriters)
    },

    async getTopRatedWriters(_writers){
      const results = await Promise.all(_writers.map(user =>
        this.$axios.$get('https://hacker-news.firebaseio.com/v0/user/' + user + '.json?print=pretty')
          .then(response => {
            if(response.karma >= 9000 && this.topWriters.indexOf(response.id) == -1) this.topWriters.push(response.id);
          })
      ));

      !!results && this.getTitles()

    },

    getTitles(){
      // Get all titles
      this.topWriters.map(writer => {
        this.stories.filter(story => {story.by == writer && this.titles.push(story.title)})
      })

      this.mostCommontWords = WordCounter(this.titles, 10);
    },
  },
  async mounted() {
    this._getStories();
  },

}
</script>