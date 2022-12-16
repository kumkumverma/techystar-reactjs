import React from "react";
// import { icons } from "react-icons";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram}
from "react-icons/ai"
const Home = () => {
    return (
        <>
 <div className="home"  id="#home">
    <main>
    <h1>TechyStar</h1> 
    <p>Solution to your all problems</p>
    
    </main>
    
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics"/>
        <div>
             <p>We are your one and only solution to the tech problems you face everyday. We are leading tech cpmpany whose aim is to increase the problem solving ability in children.</p>
            </div>
    </div>
    <div className="home3" id="about">
<div>
    <h1> Who we are ?</h1>
    <p>The United States has 136.4 million homes. This doesn’t even take into account the people who can’t have pets for various reasons. ArcGis puts the average number of people in a household for 2022 at 2.6. This statistic makes sense that there are 272 million pet lovers.</p>
</div>
    </div>
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>

            <div
            style={{
                animationDelay: "0.3s", 
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>

            </div>
            <div
            style={{
                animationDelay: "0.5s", 
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>

            </div>

            <div
            style={{
                animationDelay: "0.7s", 
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>

            </div>

            <div
            style={{
                animationDelay: "1s", 
            }}>
                <AiFillInstagram/>
                <p>Google</p>

            </div>
            </article>
            
        </div>
    </div>

    
    
   
    </>

    )                                                            
};
export default Home;