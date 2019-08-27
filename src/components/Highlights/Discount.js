import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th June</h3>
              <p>
                Proin consequat, magna id feugiat consequat, purus orci rutrum
                purus, at pellentesque eros orci accumsan odio. Aenean ultricies
                tincidunt nulla eu lacinia. Morbi nec felis ac est condimentum
                viverra vel sit amet ante. Donec sed hendrerit nibh. Vivamus ac
                ullamcorper erat, a tempor lorem. Cras non pharetra diam. Nullam
                eget lacinia nisi, at tristique erat. Quisque nec massa at massa
                rhoncus aliquam ac et enim. Nullam ex augue, porttitor vitae
                facilisis ut, pretium a nibh. Quisque eu auctor sapien.
              </p>
              <MyButton
                text="puchase tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
