import { mapActions } from 'vuex';

export default {
  name: 'MenuItem',

  props: {
    category: {
      type: Object,
    },
  },

  methods: {
    ...mapActions(['changeCurrentCategory']),
  },
};
