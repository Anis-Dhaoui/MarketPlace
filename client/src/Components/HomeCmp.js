import React from 'react';
import Testimonial from './Testimonials';
import { Loading } from './LoadingCmp.js';
import MostRecentProd from './MostRecentProd.js';
import RenderProducts from './RenderProducts.js';
import { useSelector } from 'react-redux';

function Home(props) {
    const state = useSelector(state => state);
    const products = state.products;
    const auth = state.auth;

    return (
        <div className="container-fluid px-4">
            <div className="row mt-5">
                <div className="col">
                    {
                        products.loading ? <Loading />
                            : products.errMsg ? <h5 className="text-danger">{products.errMsg}</h5>

                                : <MostRecentProd
                                    products={products} />
                    }
                </div>
            </div>
            <hr />
            <br />
            <div className="row">
                {
                    products.loading ? <Loading />
                        : products.errMsg ? <h5 className="text-danger">{products.errMsg}</h5>

                            : <>   <h3 className="text-info mx-auto">All Products</h3>
                                <RenderProducts products={products}
                                    authCheck={auth.isAuthenticated}
                                    productsPerPage={9}
                                /> </>
                }
            </div>
            <hr />
            <br />
            <div className="row">
                <div className="col">
                    <h3 className="text-info text-center">See What Our Customers Think About Us</h3>
                    <Testimonial />
                </div>
            </div>
        </div>
    )
}

export default Home;