import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
// import { AOS } from 'aos';
// import 'aos/dist/aos.css'



const Product = (props) => {
    const { setCartCount } = props;

    return (
        <div data-aos="fade-down-right" className='col-lg-4 '>


            <div className="card p-2 border shadow-lg ">
                <img className='w-50' src={props.product.image} alt="" srcset="" />
                <h4>{props.product.title.slice(0, 15)}</h4>
                <div className='justify-content-around'>
                    <button onClick={setCartCount} className='btn btn-success'>Add to Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    {/* <button className='btn btn-info'>Details</button> */}
                    <ReactModal product={props.product}></ReactModal>


                </div>
            </div>
        </div>
    );
};

export default Product;