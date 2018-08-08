import '../packages/carousel';
import '../packages/pull-to-refresh';

import { configure } from '@storybook/vue';

// Load stories.
function loadStories() {
  require('glob-loader!./stories.pattern');
}

configure(loadStories, module);
