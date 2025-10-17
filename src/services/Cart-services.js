
import { apiClient } from "./api-client";

export async function addProductToCart({id}) {
  try {
    const options = {
      method: "POST",
      url: `/cart`,
      data: {
        productId: id
      }
    }

    const response = await apiClient.request(options)    
    return response;

  } catch (error) {
    throw error
  }
}
export async function getCartItems() {
  try {
    const options = {
      method: "GET",
      url: `/cart`
    }

    const response = await apiClient.request(options)    
    return response;

  } catch (error) {
    throw error
  }
}
export async function removeItemsFromCart({id}) {
  try {
    const options = {
      url: `/cart/${id}`,
      method: "DELETE"
    }
    const response = await apiClient.request(options)
    return response;

  } catch (error) {
    throw error
  }
}
export async function updetProductQuantity({id,count}) {
  try {
    const options = {
      url: `/cart/${id}`,
      method: "PUT",
      data: {
        count
      }
    }
    const response = await apiClient.request(options)
    return response;

  } catch (error) {
    throw error
  }
}