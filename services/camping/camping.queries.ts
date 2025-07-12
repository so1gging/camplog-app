import { useQuery } from '@tanstack/react-query';
import { GetCampingBasedListParams } from './camping.types';
import { getCampingBasedList } from './camping.api';

export const useBasedListQuery = (params: GetCampingBasedListParams) => {
  return useQuery({
    queryKey: ['camping', 'basedList', params],
    queryFn: () => getCampingBasedList(params),
  });
};
