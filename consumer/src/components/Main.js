import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row } from 'react-bootstrap';
import './style.css';
import { withAuth0 } from "@auth0/auth0-react";
import Loading from './Loading';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: [],
      API: process.env.REACT_APP_API,
      comment: '',
      loading:true
    }
  }
  componentDidMount = async () => {
    const getRequest = await axios.get(`${this.state.API}/products`);
    this.setState({
      mainData: getRequest.data,
      loading:false
    })
  }
  postData = async (data) => {
    await axios.post(`${this.state.API}/products/Favorite`, data);
  }
  addComment = async (e, slug) => {
    e.preventDefault();
    const body = {
      slug: slug,
      comment: this.state.comment
    }
    await axios.post(`${this.state.API}/products/Favorite/${slug}`, body);
  }
  imagePopUp = (e) => {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
    document.addEventListener("click", (e) => {
      const elem = e.target;
      if (elem.id === "myImg") {
        modal.style.display = "block";
        modalImg.src = elem.dataset.biggerSrc || elem.src;
        captionText.innerHTML = elem.alt;
      }
    })
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = "none";
    }
  }
  updateComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  render() {
    return (
      <div>

{this.state.loading &&
<Loading loading={this.state.loading}/>
}
{!this.state.loading &&
        <Row xs={2} md={6} className="g-1" >
        {this.state.mainData.map((data, idx) => {
          return (<div key={idx}>
            <Card style={{ width: '18rem', height: '40rem' }}>
              <Card.Img variant="top" src={data.img} id="myImg" className="img-fluid"
                data-bigger-src={data.img} alt='' onClick={(e) => { this.imagePopUp(e) }} />
              <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img id="modal-img" className="modal-content" alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS2ol73JZj6-IqypxPZXYS3rRiPwKteoD8vezk9QsRdkjt3jEn&usqp=CAU" />
                <div id="caption"></div>
              </div>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.price}</Card.Text>
                <Card.Subtitle>{data.colour}</Card.Subtitle>
                <Button variant="primary" onClick={() => this.postData(data)}>Add To Favorite</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          )
        })
        }
      </Row>
}

</div>
    )
  }
}

export default withAuth0(Main)