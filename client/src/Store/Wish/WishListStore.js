import {create} from "zustand"
import axios from "axios";

export const useWishListStore = create((set) => ({
    CreateWishList: [],
    UpdateWishList: [],
    ReadWishList: [],
    RemoveWishList: [],

    CreateWishListRequest: async (postBody) => {
        try {
            let result=await axios.post("/api/createWishList",postBody)
            if (result.data["status"] === "success") {
                set({
                    CreateWishList: result.data['data']
                })
            }

        } catch (error) {
            console.log(error)
        }
    },

    UpdateWishListRequest: async (postBody) => {
        try {
            let result=await axios.post("/api/updateWishList",postBody)
            if (result.data["status"] === "success") {
                set({
                    UpdateWishList: result.data['data']
                })
            }

        } catch (error) {
            console.log(error)
        }
    },

    ReadWishListRequest: async () => {
        try {
            let result=await axios.get("/api/readWishList")
            if (result.data["status"] === "success") {
                set({
                    ReadWishList: result.data['data']
                })
            }

        } catch (error) {
            console.log(error)
        }
    },

    RemoveWishListRequest: async () => {
        try {
            let result=await axios.get("/api/removeWishList")
            if (result.data["status"] === "success") {
                set({
                    RemoveWishList: result.data['data']
                })
            }

        } catch (error) {
            console.log(error)
        }
    }
}))

export default useWishListStore