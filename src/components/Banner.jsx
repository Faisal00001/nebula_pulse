
import { Button } from "./ui/button";



const Banner = () => {
    return (


        // <Particle viewPort={'h-[calc(100vh-95.594px)]'}>

        // </Particle>
        // <div className="absolute top-12 px-5 md:px-0 md:top-28 md:right-28 lg:right-60 xl:top-24 xl:right-14">
        //     {/* Your content goes here */}
        //     <h1 className="text-2xl md:text-4xl font-bold text-white">Welcome to Our Website</h1>
        //     <p className="text-white my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Possimus, eligendi!</p>
        //     <Button className="bg-white text-black hover:bg-white">Read More</Button>
        // </div>
        <div>
            {/* h-[calc(100vh-132.594px)] */}
            <div
                className="relative h-[calc(100vh-95.594px)] md:h-[calc(100vh-103.594px)] bg-cover bg-center"
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