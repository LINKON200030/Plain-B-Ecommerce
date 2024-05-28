import {create} from "zustand";
import axios from "axios";

export const useCartStore = create((set) => ({
    CreateCartList:[],
    ReadCartListAll:[],
    UpdateCartList:[],
    RemoveCartList:[],

    CartFormData: {
      color: "",qty: "1",size: ""

    },
    CartFormDataOnChange:(name, value) =>{
        set((state) => ({
            CartFormData: {
                ...state.CartFormData,
                [name]: value
            }
        }))
    },

    CreateCartListRequest: async (postBody,ProductId) => {
        try {
            postBody.ProductId=ProductId
            const result = await axios.post("/api/createCartList",postBody);
            if (result.data["status"] === "success") {
                set({ CreateCartList: result.data["data"] });
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    },
    UpdateCartListRequest: async (postBody) => {
        try {
            const result = await axios.post("/api/updateCartList",postBody);
            if (result.data["status"] === "success") {
                set({ UpdateCartList: result.data["data"] });
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    },
    ReadCartListAllRequest: async () => {
        try {
            const result = await axios.get("/api/readCartListAll");
            if (result.data["status"] === "success") {
                set({ ReadCartListAll: result.data["data"] });
                set({ CartFormData: { ...result.data["data"] } });
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    }
    
}))

export default useCartStore