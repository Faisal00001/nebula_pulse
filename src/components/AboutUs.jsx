"use client"
import Lottie from "lottie-react";
import AboutUsAnimation from "../../public/assets/animation/AboutUs.json";
const AboutUs = () => {
    return (
        <div className="my-24">

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-5 ">
                    <div className="w-full lg:w-[50%]">
                        <Lottie animationData={AboutUsAnimation} loop={true} />
                    </div>
                    <div className="lg:w-[50%]">
                        <div className="space-y-5 mt-16 lg:mt-0">
                            <h3 className="font-bold text-4xl md:text-6xl">About</h3>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint repudiandae quas suscipit assumenda officiis maiores odit reprehenderit aliquid deleniti hic, pariatur, veniam optio quidem veritatis cum at doloremque! Alias eum neque repudiandae explicabo hic, repellat ullam blanditiis eius eaque sed sunt, nisi sapiente rerum minus totam impedit illum possimus, eveniet aliquid incidunt vero ipsam autem quisquam assumenda. Quaerat earum culpa eos vel asperiores quae.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AboutUs;