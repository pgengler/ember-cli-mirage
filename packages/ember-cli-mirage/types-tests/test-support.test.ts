import { setupMirage } from '@pgengler/ember-cli-mirage/test-support';
import { module } from 'qunit';

// Mocha-style usage
setupMirage();

// QUnit-style usage
module('A Mirage test', (hooks) => {
  setupMirage(hooks);
});
