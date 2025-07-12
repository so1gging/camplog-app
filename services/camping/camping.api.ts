import apiClient from '../apis/clients';
import {
  GetCampingBasedListParams,
  GetCampingBasedListResponse,
} from './camping.types';

export const getCampingBasedList = (
  params: GetCampingBasedListParams,
): Promise<GetCampingBasedListResponse> => {
  return apiClient.get('/basedList', { params });
};
