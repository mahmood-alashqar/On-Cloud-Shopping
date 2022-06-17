// import React, { Component } from 'react';
// import { withAuth0 } from '@auth0/auth0-react';

// class Profile extends Component {
//     render() {
//         const { user, isAuthenticated } = this.props.auth0;
//         // return <div>Hello {user.name}</div>;
//         return (
//             <>
//                 { isAuthenticated &&
//                     <>
//                         <div>Hello: {user.name}</div>
//                         <div>Email: {user.email}</div>
//                     </>

//                 }
//             </>
//         )
//     }
// }

// export default withAuth0(Profile);
import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button, Row, Form, FormControl } from 'react-bootstrap';


export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API: process.env.REACT_APP_API,
      productData: [],
      name: '',
      slug: '',
      showForm: false
    }
  }
  componentDidMount = async () => {
    const getRequest = await axios.get(`${this.state.API}/products/Favorite`);
    this.setState({
      productData: getRequest.data
    })
  }
  deleteData = async (slug) => {
    const deleteRequest = await axios.delete(`${this.state.API}/products/Favorite/${slug}`);
    this.setState({
      productData: deleteRequest.data
    })
  }
  updateSlug = async (e,slug) => {
    e.preventDefault();

    this.setState({
      slug: slug,
      showForm: true
    })
    console.log('update', this.state.slug);


  }
  updateName = async (e) => {
    e.preventDefault();

    this.state = {
      name: e.target.value
    }
    console.log('update Target', e.target.value);

  }
  updateData = async (e) => {
    e.preventDefault();
    const body = {
      name: this.state.name
    }
    console.log('update LiNE: 71', this.state.slug);

    const updateRequest = await axios.put(`http://localhost:8088/products/Favorite/${this.state.slug}`, body);
    this.setState({
      productData: updateRequest.data 
    })
  }
  render() {

    const rendering = <Row xs={1} md={4} className="g-3" >
      {
      this.state.productData.map((data, idx) => {
        console.log(this.state.productData)
        return (this.state.auth0.isAuthenticated &&
        <div key={idx}>
          <Card style={{ width: '18rem', height: '45rem' }}>
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Subtitle>{data.colour}</Card.Subtitle>
              <Card.Footer>{data.price}</Card.Footer>
              <Button variant="danger" onClick={() => this.deleteData(data.slug)}>Delete</Button>
              <Button variant="primary" onClick={(e) => this.updateSlug(e,data.slug)}>Update This</Button>
            </Card.Body>
          </Card>
          <br />
        </div>
        )
      })
      }
    </Row>
    return (
      <div>
        {this.state.showForm &&
          <Form onSubmit={(e) => this.updateData(e)}>
            <FormControl onChange={()=>this.updateName} type='text' />
            <Button variant="primary" type='submit' value='Update'>Update</Button>
          </Form>
        }
        {/* <Header/> */}
        {rendering}
      </div>
    )
  }
}

export default Profile