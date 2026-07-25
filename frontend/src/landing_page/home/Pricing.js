import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-3'>
            <div className='row p-4 mb-5'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i className="fa-solid fa-arrow-right" style={{ color: "rgb(67, 124, 224)" }}></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col-6 border'>
                            <h1 className='p-4 mt-3 mb-2'><i className="fa-solid fa-indian-rupee-sign"></i> 0</h1>
                            <p>Free equity delivery and<br></br>direct mutual funds</p>
                        </div>
                        <div className='col-6 border'>
                            <h1 className='p-4 mt-3 mb-2'><i className="fa-solid fa-indian-rupee-sign"></i> 20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;