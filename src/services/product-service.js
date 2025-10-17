import { apiClient } from "./api-client";

export async function getProducts({ page, keyword, sortedBy, priceGreaterThan, priceLessThan, category, brand } = {}) {
    try {
        const options = {
            method: "GET",
            url: `/products?${page ? `page=${page}` : ''}${keyword ? `&keyword=${keyword}` : ""}${priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ""}${priceLessThan ? `&price[lte]=${priceLessThan}` : ""}${sortedBy ? `&sort=${sortedBy}` : ""}${category ? `&category[in]=${category}` : ""}${brand ? `&brand=${brand}` : ""}`,
        }

        const response = await apiClient.request(options)
        return response;

    } catch (error) {
        throw error
    }
}
export async function getProductsById({id}) {
    try {
        const options = {
            method: "GET",
            url: `/products/${id}`,
        }

        const response = await apiClient.request(options)
        return response;

    } catch (error) {
        throw error
    }
}