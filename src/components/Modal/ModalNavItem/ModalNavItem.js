import { mapActions } from 'vuex';

export default {
  name: 'ModalNavItem',

  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    ...mapActions(['changeCurrentModalCategory']),
  },
};
