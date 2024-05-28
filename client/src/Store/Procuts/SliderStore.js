import {create} from 'zustand'
import axios from "axios";

export const useSliderStore = create((set) => ({
    slider:[],

    SliderRequest: async (ProductID) => {
        try {
            const result = await axios.get(`/api/productSliderList/${ProductID}`);
            if (result.data["status"] === "success") {
                set({ slider: result.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching slider data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    }
}))

export default useSliderStore