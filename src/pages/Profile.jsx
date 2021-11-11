import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className="flex justify-center gap-x-4 lg:px-40 xl:px-60 2xl:px-96"> 
                <div className="">
                    <Header hi="Welcome" name="User X" pic="video-header.svg" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4">
                    <Card pic="tojj.png" />
                    <Card pic="tojj.png" />
                    <Card pic="tojj.png" />
                    <Card pic="tojj.png" />
                    <Card pic="tojj.png" />
                    <Card pic="tojj.png" />
                    </div>
                </div>
                <div className="flex items-center sticky h-screen">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Profile
