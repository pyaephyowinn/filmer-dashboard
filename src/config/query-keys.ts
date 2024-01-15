export const filmKeys = {
  all: ['films'] as const,
  lists: () => [...filmKeys.all, 'lists'] as const,
  list: (params: { id: string }) => [...filmKeys.lists(), params] as const,
  details: () => [...filmKeys.all, 'detail'] as const,
  detail: (id: string) => [...filmKeys.details(), id] as const,
};

export const categoryKeys = {
  all: ['categories'] as const,
  lists: () => [...categoryKeys.all, 'lists'] as const,
  list: (params: { id: string }) => [...categoryKeys.lists(), params] as const,
  details: () => [...categoryKeys.all, 'detail'] as const,
  detail: (id: string) => [...categoryKeys.details(), id] as const,
};
