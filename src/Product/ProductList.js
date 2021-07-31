import { Button } from 'react-bootstrap'
import React from 'react'
import { Table } from 'react-bootstrap'

const ProductList = () => {
    const products = [
    {
        imgSrc : "https://www.mercedes-benz.ch/fr/passengercars/mercedes-benz-cars/models/a-class/hatchback-w177/_jcr_content/image.MQ6.2.2x.20210505083324.png" ,
        name : "A-Class",
        price : "129000 DT",
    },
    {
        imgSrc:"https://www.sayarti.tn/wp-content/uploads/2021/04/mercedes-benz-glc-prix-amg-prix-tunisie.jpg" ,
        name:"GLC",
        price:"210000 DT",
    },
    {
        imgSrc:"https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/s-class/saloon-wv223/_jcr_content/image.MQ6.2.2x.20201023143932.png",
        name:"S-Class",
        price:"450000 DT",
    },
]

const clik = (el)=>{
    alert(`this model is ${el}`)
}
    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Brand</th>
      <th>Class</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
   { products.map(element => 
   <tr>
       <td><Button variant="info" onClick={()=>clik(element.name)}>Info</Button></td>
       <td>{element.name}</td>
       <td><img src={element.imgSrc} alt="" /></td>
       <td>{element.price}</td>
   </tr>
        )
   }
  </tbody>
</Table>
        </div>
    )
}

export default ProductList
