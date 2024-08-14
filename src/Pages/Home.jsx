import React, { useEffect, useState } from 'react';
import appwriteService from "../Appwriter/config";
import { Container, PostCard } from '../Component';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-12 mt-8 text-center bg-gradient-to-r from-purple-500 to-indigo-600">
                <Container>
                    <div className="flex flex-wrap justify-center">
                        <div className="p-4 w-full">
                            <h1 className="text-3xl font-bold text-white hover:text-gray-300 transition duration-300 ease-in-out">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-12 bg-gradient-to-r from-blue-500 via-teal-400 to-green-400">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-4 w-full md:w-1/2 lg:w-1/4 transition transform hover:-translate-y-2 hover:scale-105 duration-300">
                            <PostCard {...post} className="shadow-lg rounded-lg overflow-hidden bg-white hover:bg-gray-100" />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
