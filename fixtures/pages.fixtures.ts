import { test as base } from '@playwright/test';

type User = {
  email: string;
  password: string;
};

export const test = base.extend<{ user: User }>({
  user: async ({}, use) => {
    const user = {
      email: `student${Date.now()}@example.com`,
      password: '#Qwerty2026',
    };

    await use(user);
  },
});

export { expect } from '@playwright/test';