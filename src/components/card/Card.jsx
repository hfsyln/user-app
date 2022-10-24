import React from 'react'

const Card = ({data}) => {
        console.log(data)
return (
        
    <div className="card">
            <table className="table">
                <thead>
                    <tr className="head-tr">
                            <th className="th">Firstname</th>
                            <th className="th">Email</th>
                            <th className="th">Phone</th>
                            <th className="th">Age</th>
                    </tr>
                </thead>
                <tbody> {data.length

                ? data.map((item, index) => { 
                        const { name, email, phone, age, id } = item
                        return(
                        <tr className="body-tr" key={index}>
                                <th className="th">{name}</th>
                                <th className="th">{email}</th>
                                <th className="th">{phone}</th>
                                <th className="th">{age}</th>
                        </tr>)}) : ""}
                </tbody>
            </table>
            </div>
    
  )
}

export default Card