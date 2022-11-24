import React from 'react'

function List(props) {
    return (<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">{props.data.title}</div>
            {props.data.button}
        </div>
        <button onClick={()=>(props.handleRemoveCart(props.data))} class="badge bg-danger rounded-pill">X</button>
    </li>




    )
}

export default List;