import { notification } from 'antd';
import api from '../api';

export async function getLoterias() {
  try {
    const response = await api.get(`/loterias/`);
    return await response.data;
  } catch {
    return notification.error({
      message: 'Erro :(',
      description:
        'Não foi possível carregar os dados, por favor tente novamente mais tarde!.',
    });
  }
}
