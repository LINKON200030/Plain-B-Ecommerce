import React, { useEffect } from 'react';
import useFeatureStore from "@/Store/Features/FeatureStore.js";

const Featrures = () => {

    const { features, FeatureRequest } = useFeatureStore();

    useEffect(() => {
        (async () => {
            await FeatureRequest();
        })()
    },[])



    return (
        <>
            <div className="flex flex-col md:flex-row w-full  justify-center md:justify-between items-center md:mx-auto mt-6 md:mt-16 mb-9 ">
                {features.map((item, i) => (
                    <div key={i} className="transition duration-700 ease-linear backdrop-blur-xl opacity-80
                     hover:opacity-100  hover:shadow-2xl hover:translate-y-2 hover:scale-105
                      mb-8 inline-block md:w-1/4 w-3/5   mx-5 ">
                        <div className="flex  justify-center items-center bg-white  py-3 rounded shadow">
                            <div>
                                <img src={item.img} alt={item.name} className="w-10 h-10" />
                            </div>
                            <div className="ml-5">
                                <h1 className="text-md font-semibold">{item.name}</h1>
                                <p className="text-xs font-semibold text-opacity-50 text-gray-800 mt-0.5">
                                    {item.description}
                                </p>

                            </div>


                        </div>


                    </div>
                ))}
            </div>
        </>


    );
};

export default Featrures;
