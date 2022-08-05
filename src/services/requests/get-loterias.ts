import api from '../api';

export async function getLoterias() {
  try {
    const response = await api.get(`/loterias/`);
    return await response.data;
  } catch (error) {
    return console.log(error);
  }
}
