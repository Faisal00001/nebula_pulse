import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import project1 from "../../public/assets/projects/faisal1.jpg"
const allProjects = [
    {
        name: "LearnOra",
        description: "I am Faisal Osman",
        live_link: "https://google.com",
        github_link: "https://facebook.com"
    }
]
// const experience =
// {
//     icon: "/assets/resume/badge.svg",
//     title: 'My Experience',

//     description: "Having contributed as a frontend engineer at AUB Tech and currently at RCN, I bring hands-on experience in developing engaging web applications. I specialize in creating responsive user interfaces and optimizing user experiences using modern frontend technologies.",
//     items: [
//         {
//             project_name: "LearnOra",
//             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, error.",
//             live_link: "dsadada",
//             github_link: "loasdasddsadsa"
//         },
//         {
//             company: "AUB Tech",
//             postion: "Frontend Developer",
//             duration: "2023 - 2024"
//         },
//         {
//             company: "BJET",
//             postion: "Engineering Trainee",
//             duration: "Summer 2023"
//         },
//     ]
// }
const Portfolio = () => {
    return (
        <div className="container mx-auto my-24">
            <div>
                <h3 className="font-bold text-4xl md:text-6xl mb-10">Our portfolio</h3>
                <div >
                    <Tabs defaultValue="all">
                        <TabsList className="py-8 lg:w-[50%] flex gap-5 md:gap-14 bg-[#1c1c22] mb-10">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="education">Mobile</TabsTrigger>
                            <TabsTrigger value="skills">Data</TabsTrigger>
                            <TabsTrigger value="about">Web</TabsTrigger>
                        </TabsList>
                        {/* Content */}
                        <div>
                            <TabsContent value="all">
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                                    <div className="relative card bg-base-100 image-full md:w-96 shadow-xl rounded">
                                        <figure>
                                            <Image
                                                className="rounded"
                                                src={project1}
                                                alt="Shoes" fill />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">LearnOra</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et ea deleniti nesciunt repudiandae delectus?</p>
                                            <div className="card-actions justify-end">
                                                <a href="#_" class="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-black rounded hover:bg-white group">
                                                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                    <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Live Link</span>
                                                </a>
                                                <button className="btn btn-primary">Github Link</button>
                                            </div>
                                            <div className="absolute top-3 right-5">
                                                <button className="btn btn-primary">View Project</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card bg-base-100 image-full lg:w-96 shadow-xl rounded">
                                        <figure>
                                            <Image
                                                className="rounded"
                                                src={project1}
                                                alt="Shoes" fill />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">LearnOra</h2>
                                            <p>Online classroom</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Live Link</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-base-100 image-full lg:w-96 shadow-xl rounded">
                                        <figure>
                                            <Image
                                                className="rounded"
                                                src={project1}
                                                alt="Shoes" fill />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">LearnOra</h2>
                                            <p>Online classroom</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Live Link</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-base-100 image-full lg:w-96 shadow-xl rounded">
                                        <figure>
                                            <Image
                                                className="rounded"
                                                src={project1}
                                                alt="Shoes" fill />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">LearnOra</h2>
                                            <p>Online classroom</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Live Link</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-base-100 image-full lg:w-96 shadow-xl rounded">
                                        <figure>
                                            <Image
                                                className="rounded"
                                                src={project1}
                                                alt="Shoes" fill />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">LearnOra</h2>
                                            <p>Online classroom</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Live Link</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-base-100 image-full lg:w-96 shadow-xl rounded">
                                        <figure>
                                            <Image
                                                className="rounded"
                                                src={project1}
                                                alt="Shoes" fill />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">LearnOra</h2>
                                            <p>Online classroom</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Live Link</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-base-100 image-full lg:w-96 shadow-xl rounded">
                                        <figure>
                                            <Image
                                                className="rounded"
                                                src={project1}
                                                alt="Shoes" fill />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">LearnOra</h2>
                                            <p>Online classroom</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Live Link</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </TabsContent>
                            <TabsContent value="education">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                    <div className="card bg-base-100 image-full md:w-96 shadow-xl rounded">
                                        <figure>
                                            <Image
                                                className="rounded"
                                                src={project1}
                                                alt="Shoes" fill />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">LearnOra</h2>
                                            <p>Online classroom</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Live Link</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </TabsContent>

                        </div>


                    </Tabs>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;