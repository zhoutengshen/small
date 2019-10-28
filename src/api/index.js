import axiosInstance from "@/utils/axios";
import qs from "querystring";


export const fetchUserAddressApi = () => {
    return axiosInstance.get("/user/address");
};
