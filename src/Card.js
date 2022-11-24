import React from 'react'

function Card(props) {
    return (


        <div className='col-lg-4 mt-3'>
            <div class="card" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ETPUM3G6l9Pe3VTHbMbx_yfLk5KqZ_kU9w&usqp=CAU" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.object.title}</h5>
                    <p class="card-text">{props.object.content}</p>
                    <button onClick={()=>{props.handleAddToCart(props.object)}} class="btn btn-primary">Rs.{props.object.button} Add</button>
                </div>
            </div>
        </div>

    )
}

export default Card