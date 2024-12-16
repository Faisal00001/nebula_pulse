import React from 'react';

const BlogDetails = ({ params }) => {
    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { blogId } = params;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/blogDetails/${blogId}`)
                setProject(res.data)
                setLoading(false)
            } catch (err) {
                console.error(err); // Log the error for debugging
                setError("An error occurred while fetching data");
            }
        };

        fetchData();
    }, [blogId])
    if (loading) {
        return loading
    }
    return (
        <div>

        </div>
    );
};

export default BlogDetails;