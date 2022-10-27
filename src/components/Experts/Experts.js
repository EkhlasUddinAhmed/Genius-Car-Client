import React from 'react';
import './Experts.css';
import expert1 from '../../Genius-Car_Images/experts/expert-1.jpg';
import expert2 from '../../Genius-Car_Images/experts/expert-2.jpg';
import expert3 from '../../Genius-Car_Images/experts/expert-3.jpg';
import expert4 from '../../Genius-Car_Images/experts/expert-4.jpg';
import expert5 from '../../Genius-Car_Images/experts/expert-5.jpg';
import expert6 from '../../Genius-Car_Images/experts/expert-6.png';
import Expert from '../Expert/Expert';
const Experts = () => {

    const experts=[
        {id:1, name:"James Willum", img:expert1},
        {id:2, name:"Rovert Lew", img:expert2},
        {id:3, name:"Stevenson Mark", img:expert3},
        {id:4, name:"Molass Lim", img:expert4},
        {id:5, name:"Ronaldo Paste", img:expert5},
        {id:6, name:"Mark Willumson", img:expert6},

    ]




    return (
        <div id="experts" className="mt-5 container">
            <h1 className="text-info text-center">Our Experts</h1>
            <div className="row justify-content-center">
                {
                    experts.map(expert=><Expert
                    kew={expert.id}
                    expert={expert}
                    />)
                }
            </div>
        </div>
    );
};

export default Experts;