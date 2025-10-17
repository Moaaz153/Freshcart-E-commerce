import { apiClient } from "./api-client";

export async function getAllCategories(){
    try {
        const options = {
              method : "GET",
              url: `/categories`,
            }
        
            const response = await apiClient.request(options)
            return response;
            
    } catch (error) {
        throw error
    }
}