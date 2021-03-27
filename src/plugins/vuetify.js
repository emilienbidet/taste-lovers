import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import MainIcon from '@/components/icons/MainIcon.vue';
import SupriseIcon from '@/components/icons/SupriseIcon.vue';
import ExploreIcon from '@/components/icons/ExploreIcon.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import ClockIcon from '@/components/icons/ClockIcon.vue';
import ServingIcon from '@/components/icons/ServingIcon.vue';


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#5e6472',
                secondary: '#aed9e0',
                accent: '#ffa69e',
                light: '#b8f2e6',
                background: '#faf3dd'
            },
        },
    },
    icons: {
        values: {
            main: {
                component: MainIcon,
            },
            home: {
                component: HomeIcon,
            },
            suprise: {
                component: SupriseIcon,
            },
            explore: {
                component: ExploreIcon,
            },
            search: {
                component: SearchIcon,
            },
            clock: {
                component: ClockIcon,
            },
            serving: {
                component: ServingIcon,
            }
        },
    },
});
