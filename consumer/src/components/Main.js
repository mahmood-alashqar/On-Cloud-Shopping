import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row } from 'react-bootstrap';
import LoginButton from './logging/LoginButton';
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: [],
      API: process.env.REACT_APP_API
    }
  }
  componentDidMount = async () => {
    const getRequest = await axios.get(`${this.state.API}/products`);
    this.setState({
      mainData: getRequest.data
    })
    console.log(getRequest.data);
  }
  postData = async (data) => {
    await axios.post(`${this.state.API}/products/Favorite`, data);
  }
  goLogin = (data) => {
    <LoginButton newItemAfterLogin={this.postData(data)} />
  }
  render() {

    return (
      <div>
        <Row xs={1} md={5} className="g-1" >
          {this.state.mainData.map((data, idx) => {
            return (<div key={idx}>
              <Card style={{ width: '18rem', height: '40rem' }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{data.price}</Card.Text>
                  <Card.Subtitle>{data.colour}</Card.Subtitle>
                  <>{this.props.auth0.isAuthenticated &&
                 { console.log("this.props.auth0.isAuthenticated")
                  console.log("this.props.auth0.isAuthenticated")}
                    <Button variant="primary" onClick={() => this.postData(data)}>Add To Favorite</Button>
                  }</>
                  <>{!this.props.auth0.isAuthenticated &&
                    <Button variant="success" onClick={() => this.goLogin(data)}>Log In</Button>
                  }</>
                </Card.Body>
              </Card>
              <br />
            </div>
            )
          })
          }
        </Row>
      </div>
    )
  }
}

export default Main