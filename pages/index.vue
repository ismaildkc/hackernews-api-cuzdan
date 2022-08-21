<template>
  <div class="container">
    <Quotes v-if="!!titles.length" :titles="titles" title="Newest 25 Story Titles"/>

    <List v-if="!!this.mostCommontWords.length" 
      :_array="this.mostCommontWords" 
      title="Most common words in the title of the last 25 stories."
    />
    <Loader v-else />

  </div>
</template>

<script>
import { WordCounter } from '../helpsers';

export default {
  name: 'IndexPage',
  data() {
    return {
      URL: 'https://hacker-news.firebaseio.com/v0/',
      titles: [],
      mostCommontWords: [],
    }
  },

  methods: {
    async getLastStoryIds(count) {
      let storyIds = await this.$axios.$get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      count > 0 && (storyIds = storyIds.slice(0, count));
      return storyIds;
    },

    async _getStories(){
      let storyIds = await this.getLastStoryIds(25);

      let stories = [];
      await Promise.all(storyIds.map(q =>
        this.$axios.$get('https://hacker-news.firebaseio.com/v0/item/' + q + '.json?print=pretty').then(response => {
          stories.push(response);
        })
      ));
      
      // Get all titles
      stories.filter(stories => this.titles.push(stories.title))

      this.mostCommontWords = WordCounter(this.titles, 10);
      
      // Last 25 Stories
      return stories;
    },
  },
  async mounted() {
    this._getStories();
  },

}
</script>