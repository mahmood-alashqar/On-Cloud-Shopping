import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button, Row, Form, FormControl } from 'react-bootstrap';
import Header from './Header';
import Loading from './Loading';
import './style.css';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API: process.env.REACT_APP_API,
      productData: [],
      name: '',
      slug: '',
      showForm: false,
      loading:true
    }
  }
  componentDidMount = async () => {
    const getRequest = await axios.get(`${this.state.API}/products/Favorite`);
    this.setState({
      productData: getRequest.data,
      loading:false
    })
  }
  deleteData = async (slug) => {
    const deleteRequest = await axios.delete(`${this.state.API}/products/Favorite/${slug}`);
    this.setState({
      productData: deleteRequest.data
    })
  }
  updateSlug = async (e, slug) => {
    e.preventDefault();
    this.setState({
      slug: slug,
      showForm: true
    })
  }
  updateName = async (e) => {
    e.preventDefault();
    this.setState ( {
      name: e.target.value
    })
  }
  updateData = async (e) => {
    e.preventDefault();
    const body = {
      name: this.state.name
    }
    const updateRequest = await axios.put(`${this.state.API}/products/Favorite/${this.state.slug}`, body);
    this.setState({
      productData: updateRequest.data
    })
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
  addComment = async (e, slug) => {
    e.preventDefault();
    const body = {
      slug: slug,
      comment: this.state.comment
    }
    const updatedData = await axios.post(`${this.state.API}/products/Favorite/${slug}`, body);
    this.setState({
      productData: updatedData.data
    })
  }
  updateComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  render() {
    const rendering = <Row xs={1} md={6} className="g-3" >
      {
        this.state.productData.map((data, idx) => {
          return (
            <div key={idx}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.img} id="myImg" className="img-fluid"
                  data-bigger-src={data.img} alt='' onClick={(e) => { this.imagePopUp(e) }} />
                <div id="myModal" className="modal">
                  <span className="close">&times;</span>
                  <img id="modal-img" className="modal-content" alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS2ol73JZj6-IqypxPZXYS3rRiPwKteoD8vezk9QsRdkjt3jEn&usqp=CAU" />
                  <div id="caption"></div>
                </div>
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <br />
                  <Card.Subtitle>{data.colour}</Card.Subtitle>
                  <Card.Footer>{data.price}</Card.Footer>
                  <br />
                  <>
                    {data.comments.map((comment, idx) => {
                      return (<div key={idx}>
                        {comment != null &&
                          <><blockquote className="blockquote mb-0" style={{ border: '1px' , boxSizing:'content-box'}}>
                            <footer className="blockquote-footer">{comment}</footer>
                          </blockquote><br /></>}</div>)
                    })}
                  </>
                  <Form onSubmit={(e) => this.addComment(e, data.slug)}>
                    <FormControl onChange={(e) => this.updateComment(e)} type='text' />
                    <Button variant="primary" type='submit' value='Update'>Add Comment</Button>
                  </Form>
                  <Button variant="danger" onClick={() => this.deleteData(data.slug)}>Delete</Button>
                  <Button variant="primary" onClick={(e) => this.updateSlug(e, data.slug)}>Update This</Button>
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
        <Header />
        {this.state.showForm &&
          <Form onSubmit={(e) => this.updateData(e)} style={{ position: 'relative' }}>
            <FormControl onChange={(e) => this.updateName(e)} type='text' />
            <Button variant="primary" type='submit' value='Update'>Update</Button>
          </Form>
        }
        {this.state.loading &&
        <Loading loading={this.state.loading}/>}
        {!this.state.loading &&
        rendering}
      </div>
    )
  }
}

export default Profile
