import { api } from '@/app/api';

export type TMember = {
  id: number;
  name: string;
  tel: string;
};

export const memberApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMembers: build.query<Array<TMember>, void>({
      query: () => ({
        url: '/api/members',
      }),
    }),
  }),
});

export const { useGetMembersQuery } = memberApi;
