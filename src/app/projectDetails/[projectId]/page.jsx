"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LearnOra from "../../../../public/assets/projects/LearnOra.jpg";
import axios from 'axios';
import Footer from '@/components/Footer';

const ProjectDetails = ({ params }) => {
    const baseUrl = 'http://127.0.0.1:8000'
    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { projectId } = params;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/projectDetails/${projectId}`)
                setProject(res.data)
                setLoading(false)
            } catch (err) {
                console.error(err); // Log the error for debugging
                setError("An error occurred while fetching data");
            }
        };

        fetchData();
    }, [projectId])
    if (loading) {
        return loading
    }
    console.log(project?.images[0])
    return (
        <div className="relative h-screen">
            {/* Full-width background image */}
            <div className="bg-[#333333] h-96 flex justify-center items-center">
                <div>
                    <h3 className="text-4xl md:text-6xl font-bold text-center text-accent">Project Details</h3>
                    <div className="text-center text-white/60 mt-5 text-xl">
                        Home / Project Details
                    </div>
                </div>
            </div>
            <div className='container mx-auto mb-24'>
                <div className='flex flex-col lg:flex-row mt-10  items-center'>
                    <div className='flex-1 mt-14 mb-10 lg:mb-0'>
                        {
                            project.images.length > 0 ? <Image className='rounded' src={`${baseUrl}${project?.images[0]}`} width={550} height={550} quality={100} alt='Project Image'></Image> : ''
                        }

                    </div>
                    <div className='flex-1'>
                        <h3 className='text-2xl md:text-4xl text-center mb-5'>Project Overview</h3>
                        <p className='text-justify'>{project.description}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;
