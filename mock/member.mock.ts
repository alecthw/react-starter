import { faker } from '@faker-js/faker';
import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock([
  {
    url: '/api/members',
    body: () => {
      const members: any = [];
      for (let id = 0; id < 5; id++) {
        members.push({
          id,
          name: faker.person.fullName(),
          tel: faker.phone.number(),
        });
      }
      return members;
    },
  },
]);
