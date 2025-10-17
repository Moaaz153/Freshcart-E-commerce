import { apiClient } from "./api-client";

export async function getUserOrder({userId}) {
  try {
    const options = {
      method: "GET",
      url: `/orders/user/${userId}`,
    }

    const response = await apiClient.request(options)
    return response;

  } catch (error) {
    throw error
  }
}