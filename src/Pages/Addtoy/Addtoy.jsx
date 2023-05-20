import React from 'react';
import Swal from 'sweetalert2'
const Addtoy = () => {

    const handleAddtoy = event => {
        event.preventDefault();

        const form = event.target;

        const picurl = form.picurl.value;
        const name = form.name.value;
        const sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const detail = form.detail.value;

        const newToy = { picurl, name, sellername, selleremail, subcategory,price, quantity,rating,detail }
form.reset()
        console.log(newToy);

fetch("http://localhost:5000/addtoys",{
    method: "POST",
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(newToy),
})
.then(res=>res.json())
.then (data=>{
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Toy Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
})


    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center text-blue-700 py-4">Add a Toy</h2>
            <form onSubmit={handleAddtoy}>
                {/* form name and quantity row */}
                <div className=" mb-8">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Picture URL of the toy</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="picurl" placeholder="Picture URL of the toy" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    
                </div>
                
                
                <div className="mb-8">
                <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    
                </div>
               


                {/* form supplier row */}
                <div className=" mb-8">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Seller name </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellername" placeholder="seller name (if available from the logged in user)" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    
                </div>
                {/* form supplier row */}
                <div className=" mb-8">
                <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Seller email </span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="selleremail" placeholder="seller email (info from the logged in user)" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    
                </div>
                {/* form category and details row */}
                <div className=" mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory" placeholder="Sub-category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* form category and details row */}
                <div className=" mb-8">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* form Available quantity row */}
                <div className=" mb-8">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="detail" placeholder="Detail description" className="input input-bordered w-full h-20" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Toy" className="btn btn-block" />

            </form>
        </div>
    );
};

export default Addtoy;