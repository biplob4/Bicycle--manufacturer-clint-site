import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Home/Button';
import Loading from '../Shared/Loadding/Loading';

const imageStorageKey = 'db16f880c35602aad41456f575ad2a4f';

const AddProduct = () => {
    const [loading, setLoadding] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    
    const handleAdding = event => {
        event.preventDefault();
        setLoadding(true);
        let product = {
            name: event.target.name.value,
            avilable: event.target.mexQuantity.value,
            minimum: event.target.minQuantity.value,
            description: event.target.description.value,
            price: event.target.price.value,
        }
        setLoadding(true);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        const formData = new FormData();
        formData.append('image', selectedImage);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    product.image = img;
                    //  send your data to yout database
                    fetch('http://localhost:5000/addParts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('Your Product Is Added');
                            }
                            else {
                                toast.error('Failed to add tha Product')
                            }
                        })
                }
            })
        setLoadding(false);
        event.target.reset();
    }

    return (
        <div className='min-h-[80vh] '>
            <h6 className='text-center pb-0 mt-4'>Add a New Product</h6 >
            <div class="mb-5 mt-4">
                <div class="w-full max-w-xl mx-auto">
                    <div class="mx-auto">
                        {loading && <Loading />}
                        < form onSubmit={handleAdding} className='bg-[#FFFFFF] w-100' >
                            <input type="text" name="name" className="input input-bordered w-full mb-3 d-block" placeholder='Product Name' />
                            <input type="number" name="mexQuantity" className="input input-bordered w-full mb-3 d-block" placeholder='Mex Quantity' />
                            <input type="number" name="minQuantity" className="input input-bordered w-full mb-3 d-block" placeholder='Min Quantity' />
                            <input type="number" name="price" className="input input-bordered w-full mb-3 d-block" placeholder='Price' />
                            <input type="file" onChange={(event) => { setSelectedImage(event.target.files[0])
        }} name="image" className="input input-bordered w-full mb-3 d-block" placeholder='Product Image' />
                            <textarea type="text" name="description" className="input input-bordered w-full min-h-[15vh] mb-3 d-block border" placeholder='Product Descpiption' />
                            <Button className='d-block mx-auto' type="submit">Add Review</Button>
                        </form >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;