import React from "react";

const HomeBooking = ({home}) => {
  return (
      <div>
      {home ? home.title : null}
      </div>
  )
};

export default HomeBooking;
