import React, {useEffect} from 'react';
import bgSlider from "../../assets/images/hero-bg.svg"
import { Link } from 'react-router-dom';
import useSliderStore from "@/Store/Procuts/SliderStore.js";
const Slider = () => {
    const {slider,SliderRequest}=useSliderStore()

    useEffect(()=>{
        (async ()=>{
          await SliderRequest("64f87d60502e1b80556da15a")
        })()
    },[])


    return (
        <div>
            <div className="carousel  w-full h-min-screen">

                {/*Slider No -01*/}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bgSlider}
                         className="w-full"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-ghost ">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-ghost">❯</a>
                    </div>
                    {/* Content for Slide 1 */}
                    <div
                        className="absolute flex justify-between items-center top-1/3 left-1/3 ml-16 my-16 transform -translate-x-1/2 -translate-y-1/2 ">
                        <div className="basis-1/2 ml-9">
                            <h1 className="text-3xl font-bold text-left">{slider[1]?.title} </h1>
                            <p className="text-sm text-justify my-5 text-gray-500">{slider[1]?.des}</p>
                            <a href="/buynow">
                                <button className="transition duration-700 ease-in-out hover:scale-105 hover:translate-y-2 bg-success text-white px-6 py-1 mt-5 rounded-md">Buy Now</button>
                            </a>
                        </div>
                        <div className="basis-1/2 ml-32">
                            <img src={slider[1]?.image} className="w-full  ml-9"
                                 alt="Slide 1"/>
                        </div>
                    </div>


                </div>


                {/*Slider No -02*/}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bgSlider}
                         className="w-full"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-ghost">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-ghost">❯</a>
                    </div>
                    {/* Content for Slide 1 */}
                    <div
                        className="absolute flex justify-between items-center top-1/3 left-1/3 ml-16 my-16 transform -translate-x-1/2 -translate-y-1/2 ">
                        <div className="basis-1/2 ml-9">
                            <h1 className="text-3xl font-bold text-left">{slider[3]?.title} </h1>
                            <p className="text-sm text-justify my-5 text-gray-500">{slider[3]?.des}</p>
                            <a href="/buynow">
                                <button className="transition duration-700 ease-in-out hover:scale-105 hover:translate-y-2 bg-success text-white px-6 py-1 mt-5 rounded-md">Buy Now</button>
                            </a>
                        </div>
                        <div className="basis-1/2 ml-32">
                            <img src={slider[3]?.image} className="w-full  ml-9"
                                 alt="Slide 1"/>
                        </div>
                    </div>

                </div>
                {/*Slider No -03*/}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bgSlider}
                         className="w-full"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-ghost">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-ghost">❯</a>
                    </div>
                    {/* Content for Slide 3*/}
                    <div
                        className="absolute flex justify-between items-center top-1/3 left-1/3 ml-16 my-16 transform -translate-x-1/2 -translate-y-1/2 ">
                        <div className="basis-1/2 ml-9">
                            <h1 className="text-3xl font-bold text-left">{slider[0]?.title} </h1>
                            <p className="text-sm text-justify my-5 text-gray-500">{slider[0]?.des}</p>
                            <a href="/buynow">
                                <button className="transition duration-700 ease-in-out hover:scale-105 hover:translate-y-2 bg-success text-white px-6 py-1 mt-5 rounded-md">Buy Now</button>
                            </a>
                        </div>
                        <div className="basis-1/2 ml-32">
                            <img src={slider[0]?.image} className="w-full  ml-9"
                                 alt="Slide 1"/>
                        </div>
                    </div>

                </div>
                {/*Slider No -04*/}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bgSlider}
                         className="w-full"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-ghost">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-ghost">❯</a>
                    </div>
                    {/* Content for Slide 4 */}
                    <div
                        className="absolute flex justify-between items-center top-1/3 left-1/3 ml-16 my-16 transform -translate-x-1/2 -translate-y-1/2 ">
                        <div className="basis-1/2 ml-9">
                            <h1 className="text-3xl font-bold text-left">{slider[2]?.title} </h1>
                            <p className="text-sm text-justify my-5 text-gray-500">{slider[2]?.des}</p>
                            <a href="/buynow">
                                <button className="transition duration-700 ease-in-out hover:scale-105 hover:translate-y-2 bg-success text-white px-6 py-1 mt-5 rounded-md">Buy Now</button>
                            </a>
                        </div>
                        <div className="basis-1/2 ml-32">
                            <img src={slider[2]?.image} className="w-full  ml-9"
                                 alt="Slide 1"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Slider;
