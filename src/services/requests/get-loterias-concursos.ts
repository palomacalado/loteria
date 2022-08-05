import api from '../api';

export async function getLoteriasConcursos() {
  try {
    const response = await api.get(`/loterias-concursos/`);
    return await response;
  } catch (error) {
    return console.log(error);
  }
}
