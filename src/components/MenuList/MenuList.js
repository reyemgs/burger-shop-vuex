import MenuItem from './MenuItem/MenuItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'MenuList',

  components: {
    MenuItem,
  },

  computed: {
    ...mapGetters(['categories']),
  },
};
