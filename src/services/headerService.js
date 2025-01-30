import axiosClient from './api/axiosClient';
import { API_ENDPOINTS } from './api/endpoints';

const HeaderService = {
  getHeaderData: async () => {
    try {
      const response = await axiosClient.get(API_ENDPOINTS.HEADER);
      return response.data; // { logo: '', links: [...] }
    } catch (error) {
      throw error;
    }
  },
};

export default HeaderService;