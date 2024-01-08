export const filmKeys = {
  all: ['films'] as const,
  lists: () => [...filmKeys.all, 'lists'] as const,
  list: (params: { id: string }) => [...filmKeys.lists(), params] as const,
  details: () => [...filmKeys.all, 'detail'] as const,
  detail: (id: string) => [...filmKeys.details(), id] as const,
};
