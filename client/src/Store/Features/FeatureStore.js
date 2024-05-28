import {create} from "zustand";
import axios from "axios";

export const useFeatureStore = create((set) => ({
    features:[],

    FeatureRequest: async () => {
        try {
            const result = await axios.get("/api/features");
            if (result.data["status"] === "success") {
                set({ features: result.data["data"] });
            }
        } catch (error) {
            console.error("Error fetching feature data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    }
}))

export default useFeatureStore