import {create} from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
    ProductsListByRemark:[],
    CategoryList:[],
    BrandList:[],
    ProductDetail:[],
    ProductListBySimilar:[],
    ProductListByKeyword:[],
    ProductListByCategory:[],
    ProductListByBrand:[],
    ProductListByFilter:[],

    productListByRemarkRequest: async (Remark) => {
        try {
            const result = await axios.get(`/api/productListByRemark/${Remark}`);
            if (result.data["status"] === "success") {
                set({ ProductsListByRemark: result.data["data"] });
            }
        } catch (error) {
            console.error("Error fetching product data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    },
    BrandListRequest: async () => {
        try {
            const result = await axios.get("/api/productBandList");
            if (result.data["status"] === "success") {
                set({ BrandList: result.data["data"] });
            }
        } catch (error) {
            console.error("Error fetching brand data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    },

    CategoryListRequest: async () => {
        try {
            const result = await axios.get("/api/productCategoryList");
            if (result.data["status"] === "success") {
                set({ CategoryList: result.data["data"] });
            }
        } catch (error) {
            console.error("Error fetching category data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    },


    ProductDetailRequest: async (ProductId) => {
        try {
            const result = await axios.get(`/api/productDetail/${ProductId}`);
            if (result.data["status"] === "success") {
                set({ ProductDetail: result.data["data"] });
            }

        }catch (error) {
            console.error("Error fetching product data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    },
    ProductListByBrandRequest: async (BrandID) => {
        try {
            const result = await axios.get(`/api/productListByBrand/${BrandID}`);
            if (result.data["status"] === "success") {
                set({ProductListByBrand: result.data["data"]});
            }
        }
        catch
            (error)
            {
                console.error("Error fetching product data:", error);
                // Handle the error appropriately (e.g., show an error message to the user)
            }
        },

    ProductListByCategoryRequest: async (CategoryId) => {
        try {
            const result = await axios.get(`/api/productListByCategory/${CategoryId}`);
            if (result.data["status"] === "success") {
                set({ProductListByCategory: result.data["data"]});
            }
        }
        catch
            (error)
            {
                console.error("Error fetching product data:", error);
                // Handle the error appropriately (e.g., show an error message to the user)
            }
        },


    ProductListBySimilarRequest: async (CategoryId) => {
        try {
            const result = await axios.get(`/api/productListBySimilar/${CategoryId}`);
            if (result.data["status"] === "success") {
                set({ProductListBySimilar: result.data["data"]});
            }
        }
        catch
            (error)
            {
                console.error("Error fetching product data:", error);
                // Handle the error appropriately (e.g., show an error message to the user)
            }
        },



    ProductListByKeywordRequest: async (Keyword) => {
        try {
            const result = await axios.get(`/api/productListByKeyword/${Keyword}`);
            if (result.data["status"] === "success") {
                set({ProductListByKeyword: result.data["data"]});
            }
        }
        catch
            (error)
            {
                console.error("Error fetching product data:", error);
                // Handle the error appropriately (e.g., show an error message to the user)
            }
        },
    ProductListByFilterRequest: async (postBody) => {
        try {
            const result = await axios.post(`/api/productListByFilter/`, postBody);
            if (result.data["status"] === "success") {
                set({ProductListByFilter: result.data["data"]});
            }
        }
        catch
            (error)
            {
                console.error("Error fetching product data:", error);
                // Handle the error appropriately (e.g., show an error message to the user)
            }
        },


    SearchKeyword: '',
    SetSearchKeyword: (keyword) => {
        set({SearchKeyword: keyword})
    }



}))







export default useProductStore