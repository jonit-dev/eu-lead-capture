import { RequestTypes } from '../types/request.types';
import { customAxios } from './axios';

export class APIHelper {
  public static request = async (
    method: RequestTypes,
    url: string,
    data?: object
  ) => {
    const response = await customAxios.request({
      method,
      url,
      data,
    });

    return response;
  };
}
