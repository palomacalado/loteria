import api from '../api';

export async function getConcursos(id: string) {
  try {
    const response = await api.get(`/concursos/${id}`);
    return await response;
  } catch (error) {
    return console.log(error);
  }
}
