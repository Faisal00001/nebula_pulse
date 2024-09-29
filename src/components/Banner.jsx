import Image from "next/image";
import { Button } from "./ui/button";


const Banner = () => {
    return (
        // <div className="relative w-full h-[calc(100vh-132.594px)]">
        //     <Image
        //         src="/assets/banner.jpg"
        //         alt="Banner Image"
        //         fill
        //         quality={100}
        //         style={{ objectFit: 'contain' }} // Ensures the image covers the entire area
        //     />
        //     <div className="absolute right-5">
        //         <h1 className="text-4xl font-bold text-black">Welcome to Our Website</h1>
        //     </div>

        // </div>
        <div>
            <div
                className="relative h-[calc(100vh-132.594px)] bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/banner.jpg')`,
                }}
            >
                <div className="absolute top-12 px-5 md:px-0 md:top-28 md:right-28 lg:right-60 xl:top-24 xl:right-14">
                    {/* Your content goes here */}
                    <h1 className="text-2xl md:text-4xl font-bold text-black">Welcome to Our Website</h1>
                    <p className="text-black my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Possimus, eligendi!</p>
                    <Button>Read More</Button>
                </div>

            </div>

        </div>
    );
};

export default Banner;