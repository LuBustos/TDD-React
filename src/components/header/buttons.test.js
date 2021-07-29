import {getAllByRole, getByLabelText, getByTestId, render} from '@testing-library/react'
import React from 'react'
import Buttons from './buttons'

let container = null;

beforeEach(() => {
    container = render(<Buttons />).container;
});

it('show button home type', () => {
    expect(container).toHaveTextContent("Home type");
});

it('show button dates', () => {
    expect(container).toHaveTextContent("Dates");
});

it('show button guests', () => {
    expect(container).toHaveTextContent("Guests");
});

it('show button price', () => {
    expect(container).toHaveTextContent("Price");
});

it('show button rooms', () => {
    expect(container).toHaveTextContent("Rooms");
});

it('show button amenities', () => {
    expect(container).toHaveTextContent("Amenities");
});
