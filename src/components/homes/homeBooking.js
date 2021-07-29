import moment from "moment";
import React, { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import bookingDialogService from "../../services/bookingDialogService";
import notificationService from "../../services/notificationService";

const HomeBooking = ({ home }) => {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [checkTotal, setCheckTotal] = useState();

  useEffect(() => {
    const price = home ? home.price : 0;
    const checkInDate = moment(checkIn, "YYYY-MM-DD");
    const checkOutDate = moment(checkOut, "YYYY-MM-DD");
    const nights = checkOutDate.diff(checkInDate, "days");
    const total = price * nights;
    if (Number.isInteger(total) && total > 0) {
      setCheckTotal(total);
    } else {
      setCheckTotal("--");
    }
  }, [checkIn, checkOut, home]);

  const handlerCheckIn = (e) => {
    setCheckIn(e.target.value);
  };

  const handlerCheckOut = (e) => {
    setCheckOut(e.target.value);
  };

  if (!home) {
    return <div aria-label="empty"></div>;
  }

  const handleBooking = () => {
    apiClient
      .bookHome(home, checkIn, checkOut)
      .then((response) => {
        bookingDialogService.close();
        notificationService.open(
          typeof response !== "undefined"
            ? response.message
            : "Mocked home booked!"
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2 aria-label={home.title}>{home ? home.title : null}</h2>
      <div className={"mb-3"}>
        <span
          aria-label={home.price}
          className={"font-weight-bold text-primary text-large"}
        >${home ? home.price : null} per night</span>
      </div>
      <div className="form-group">
        <label htmlFor={"checkInDate"}>Choose your check-in date</label>
        <input
          aria-label="check-in"
          className={"form-control"}
          id={"checkInDate"}
          type="date"
          onChange={handlerCheckIn}
        />
      </div>
      <div className="form-group">
        <label htmlFor={"checkInDate"}>Choose your check-out date</label>
        <input
          aria-label="check-out"
          className={"form-control"}
          id={"checkOutDate"}
          type="date"
          onChange={handlerCheckOut}
        />
      </div>
      <div aria-label={"total"} className={"my-3 text-right"}>
        <span className={"font-weight-bold text-large"}>
          Total: ${checkTotal}
        </span>
      </div>
      <div className={"d-flex justify-content-end"}>
        <button
          aria-label={"button"}
          type="button"
          className={"btn btn-primary"}
          onClick={() => handleBooking()}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default HomeBooking;
