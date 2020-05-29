import React from 'react';

const orderSummary = (props) => (
        <div>
            <div>Car: <strong>{props.carDetails.carType}</strong></div>
            <div>Size: <strong>{props.carDetails.carSize}</strong></div>
            <div>Price: <strong>{'Rs. ' + props.carDetails.price}</strong></div>
            <br />
        </div>
)


export default orderSummary;