import React from 'react';
function Hero() {
    return ( 
        <div className='container text-center'>
            <div className='row p-5'>
                <h1 className='mb-4'>Technology</h1>
                <p className='text-muted fs-5'>Sleek, modern and intuitive trading platforms</p>
                <p>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i className="fa-solid fa-arrow-right" style={{ color: "rgb(67, 124, 224)" }}></i></a></p>
            </div>
        </div>
    );
}

export default Hero;