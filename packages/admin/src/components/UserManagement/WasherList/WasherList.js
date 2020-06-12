import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';

const WasherList = (props) => {
    let [washers, setWashers] = useState([]);
    let washersList = (
        <tbody>
            <tr>
                <td>Loading...</td>
            </tr>
        </tbody>
    )
    useEffect(() => {
        axios.get('http://localhost:8000/washers/getwashers')
            .then(res => {
                setWashers(washers = [...res.data.washersList]);
            })
            .catch(err => console.log(err))
    }, [washers.length < 0])
    
    
    if(washers.length > 0) {
        washersList = (
            <tbody>
                {washers.map((item, index) => {
                    return(
                    <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.washerName}</td>
                        <td>{item.washerEmail}</td>
                        <td>{item.activeStat}</td>
                    </tr>)
                })}
            </tbody>
        )
    }
    return(
        <div>
            <Table bordered hover striped >
                <thead>
                    <tr style={{textAlign: 'center'}}>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    </tr>
                </thead>
            
                    {washersList}
                
            </Table>
        </div>
    )
}

export default WasherList;