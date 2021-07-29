import {getAllByRole, getByLabelText, getByTestId, render} from '@testing-library/react'
import React from 'react'
import HomeBooking from './homeBooking';

let container = null;

const mockedHome = {
    title:"Test home 1",
    image: "listing.jpg",
    location: "Test location 1",
    price: "1"
};

beforeEach(() => {
    container = render(<HomeBooking home={mockedHome} />).container;
});

it('foo',() => {
    expect(true).toBeTruthy()
})