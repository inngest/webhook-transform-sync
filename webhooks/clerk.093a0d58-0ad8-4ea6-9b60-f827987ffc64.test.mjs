import test from 'node:test';
import assert from 'node:assert/strict';

import { transform } from './clerk.093a0d58-0ad8-4ea6-9b60-f827987ffc64.js';

test('clerk webhook transform', (t) => {
  const transformedEvent = transform({
    type: 'user.created',
    object: 'event',
    data: {
      external_id: '567772',
      first_name: 'Example',
      id: 'user_29w83sxmDNGwOuEthce5gg56FcC',
    },
  });

  assert.deepEqual(transformedEvent, {
    name: 'clerk/user.created',
    data: {
      external_id: '567772',
      first_name: 'Example',
      id: 'user_29w83sxmDNGwOuEthce5gg56FcC',
    },
  });
});
