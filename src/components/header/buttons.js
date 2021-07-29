import React from 'react';

const Buttons = () => {
  return (
    <div className="m-0 px-4 py-2 container-fluid mw-100 border-bottom container">
      <button
        type="button"
        className="text-nowrap mr-4 py-1 btn btn-outline-secondary m-1"
      >
        Home type
      </button>
      <button
        type="button"
        className="text-nowrap mr-4 py-1 btn btn-outline-secondary m-1"
      >
        Dates
      </button>
      <button
        type="button"
        className="text-nowrap mr-4 py-1 btn btn-outline-secondary m-1"
      >
        Guests
      </button>
      <button
        type="button"
        className="text-nowrap mr-4 py-1 btn btn-outline-secondary m-1"
      >
        Price
      </button>
      <button
        type="button"
        className="text-nowrap mr-4 py-1 btn btn-outline-secondary m-1"
      >
        Rooms
      </button>
      <button
        type="button"
        className="text-nowrap mr-4 py-1 btn btn-outline-secondary m-1"
      >
        Amenities
      </button>
    </div>
  );
};

export default Buttons;
