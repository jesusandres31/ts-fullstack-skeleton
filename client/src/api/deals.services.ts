import axios from 'axios';
import { getApiEnvVar } from '../utils/api';

const API = getApiEnvVar();

/**
 * fetch deals
 */
export const fetchDeals = async (filter: string) => {
  return await axios.get(`${API}/deals?q=${filter}`);
};
