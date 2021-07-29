import {
  act,
  fireEvent,
  getAllByRole,
  getByLabelText,
  getByTestId,
  getByText,
  render,
} from "@testing-library/react";
import React from "react";
import apiClient from "../../services/apiClient";
import bookingDialogService from "../../services/bookingDialogService";
import notificationService from "../../services/notificationService";
import HomeBooking from "./homeBooking";

let container = null;

const mockedHome = {
  title: "Test home 1",
  image: "listing.jpg",
  location: "Test location 1",
  price: "1",
};

beforeEach(() => {
  container = render(<HomeBooking home={mockedHome} />).container;
});

it("foo", () => {
  expect(true).toBeTruthy();
});

it("should show title", () => {
  expect(getByText(container, mockedHome.title).textContent).toBe(
    "Test home 1"
  );
});

it("should show price", () => {
  expect(getByLabelText(container, mockedHome.price).textContent).toBe("$1 per night");
});

it("should show check-in", () => {
  expect(getByLabelText(container, "check-in")).toBeTruthy();
});

it("should show check-out", () => {
  expect(getByLabelText(container, "check-out")).toBeTruthy();
});

it("should show empty when no home provided", () => {
  container = render(<HomeBooking home={null} />).container;
  expect(getByLabelText(container, "empty")).toBeTruthy();
});

it("should calculate total", () => {
  fireEvent.change(getByLabelText(container, "check-in"), {
    target: { value: "2020-12-04" },
  }); //like a onChange
  fireEvent.change(getByLabelText(container, "check-out"), {
    target: { value: "2020-12-07" },
  }); //like a onChange
  expect(getByLabelText(container, "total").textContent).toBe("Total: $3");
});

it("should show -- for invalid dates", () => {
    fireEvent.change(getByLabelText(container, "check-in"), {
      target: { value: "2020-12-04" },
    }); //like a onChange
    fireEvent.change(getByLabelText(container, "check-out"), {
      target: { value: "2020-12-02" },
    }); //like a onChange
    expect(getByLabelText(container, "total").textContent).toBe("Total: $--");
  });

it("should book home after clicking the Book button", () => {
  jest.spyOn(apiClient, "bookHome").mockImplementation(() => {
    return Promise.resolve({ message: "Mocked home booked!" });
  });
  fireEvent.change(getByLabelText(container, "check-in"), {
    target: { value: "2020-12-04" },
  }); //like a onChange
  fireEvent.change(getByLabelText(container, "check-out"), {
    target: { value: "2020-12-07" },
  }); //like a onChange
  getByLabelText(container, "button").click();

  expect(apiClient.bookHome).toHaveBeenCalledWith(
    mockedHome,
    "2020-12-04",
    "2020-12-07"
  );
});

it("should close the dialog and show notification after booking home", async () => {
  jest.spyOn(apiClient, "bookHome").mockImplementation(() => {
    return Promise.resolve({ message: "Mocked home booked!" });
  });
  jest.spyOn(bookingDialogService, "close").mockImplementation(() => {});

  jest.spyOn(notificationService, "open").mockImplementation(() => {});

  fireEvent.change(getByLabelText(container, "check-in"), {
    target: { value: "2020-12-04" },
  }); //like a onChange
  fireEvent.change(getByLabelText(container, "check-out"), {
    target: { value: "2020-12-07" },
  }); //like a onChange

  getByLabelText(container, "button").click();
  await act(async () => {});

  expect(bookingDialogService.close).toHaveBeenCalled();
  expect(notificationService.open).toHaveBeenCalledWith("Mocked home booked!");
});
