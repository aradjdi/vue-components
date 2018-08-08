import { storiesOf } from '@storybook/vue';

import PullToRefresh from './PullToRefresh';

storiesOf('PullToRefresh', module)
  .add('story as a component', () => ({
    components: { PullToRefresh },
    template: '<pull-to-refresh>story as a component</pull-to-refresh>',
  }));
