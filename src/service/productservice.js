import axios from "axios";
export const getDetail = async(id) => {
    const { data } = await axios.get(`/products/${id}`);
    return data;
};
export const getDetails = async(ids) => {
    const result = [];
    for (let id of ids) {
        const data = await getDetail(id);
        result.push(data);
    }
    return result;
};
export const getAllProduct = async() => {
    const { data } = await axios.get(`/products`);
    return data;
}