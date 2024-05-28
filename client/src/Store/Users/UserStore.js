import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";  // Correct import for handling cookies

export const useUserStore = create((set) => ({
    userLogin: [],
    verifyUser: [],
    CreateProfile: [],
    UpdateProfile: [],
    ReadProfile: [],

    UserFormValue: {
        email: "",
    },
    userFormValueChange: (name, value) => {
        set((state) => ({
            UserFormValue: {
                ...state.UserFormValue,
                [name]: value,
            },
        }));
    },
    userLoginRequest: async (email) => {
        try {
            const result = await axios.get(`/api/userLogin/${email}`);

            sessionStorage.setItem("userEmail", email);

            if (result.data["status"] === "success") {
                set({ userLogin: result.data["data"] });
            }
        } catch (e) {
            console.error("Error fetching user data:", e);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    },

    VerifyUserFormValue: {
        otp: "",
    },
    VerifyUserFormValueChange: (name, value) => {
        set((state) => ({
            VerifyUserFormValue: {
                ...state.VerifyUserFormValue,
                [name]: value,
            },
        }));
    },

    verifyUserRequest: async (otp) => {
        try {
            let email = sessionStorage.getItem("userEmail");
            const result = await axios.get(`/api/verifyUser/${email}/${otp}`);
            if (result.data["status"] === "success") {
                set({ verifyUser: result.data["data"] });
                Cookies.set("token", result.data["data"]["token"]); // Use Cookies.set() to set cookies
            }
        } catch (e) {
            console.error("Error fetching user data:", e);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    },


    ProfileFormValue:{
        cus_address:'',cus_city:'',cus_country:'',cus_fax:'',cus_name:'',cus_phone:'',cus_postcode:'',
        cus_state:'',ship_address:'',ship_city:'',ship_country:'',ship_name:'',ship_phone:'',
        ship_postcode:'',ship_state:''
    },
    ProfileFormOnChange:(name,value)=>{
        set((state)=>{
            return {
                ProfileFormValue:{
                    ...state.ProfileFormValue,
                    [name]:value
                }
            }
        })
    },


    CreateProfileRequest: async (postBody) => {
        try {
            const result = await axios.post("/api/createProfile", postBody);
            if (result.data["status"] === "success") {
                set({ CreateProfile: result.data["data"] });

            }

        }catch (error) {
            console.error("Error fetching user data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    },
    UpdateProfileRequest: async (postBody) => {
        try {
            const result = await axios.post("/api/updateProfile", postBody);
            if (result.data["status"] === "success") {
                set({ UpdateProfile: result.data["data"] });
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    },

    ReadProfileRequest: async () => {
        try {
            const result = await axios.get("/api/readProfile");
            if (result.data["status"] === "success") {
                set({ ReadProfile: result.data["data"] });
                set({ ProfileFormValue: result.data["data"][0] });
            }

        }catch (error) {
            console.error("Error fetching user data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)

        }
    }






}));

export default useUserStore;
