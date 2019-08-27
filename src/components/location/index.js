import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.0314980288595!2d2.3763901512025063!3d48.83853787918385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721743fa0af9%3A0x989bfc2771543869!2sAccorHotels%20Arena!5e0!3m2!1sfr!2sfr!4v1566912480130!5m2!1sfr!2sfr"
        width="100%"
        height="500px"
        frameborder="0"
        allowfullScreen=""
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
