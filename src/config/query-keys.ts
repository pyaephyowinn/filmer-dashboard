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

export const photoKeys = {
  all: ['photos'] as const,
  lists: () => [...photoKeys.all, 'lists'] as const,
  list: (params: { id: string }) => [...photoKeys.lists(), params] as const,
  details: () => [...photoKeys.all, 'detail'] as const,
  detail: (id: string) => [...photoKeys.details(), id] as const,
};
