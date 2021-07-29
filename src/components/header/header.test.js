import {getAllByRole, getByLabelText, getByTestId, render} from '@testing-library/react'
import React from 'react'
import Header from './header'

let container = null;

beforeEach(() => {
    container = render(<Header />).container;
});

it('should show navbar', () => {
    // console.log(container)
    expect(getByLabelText(container,"navbar")).toBeTruthy();
});

it('should show search', () => {
    // console.log(container)
    expect(getByLabelText(container,"search")).toBeTruthy();
});


it('should show links', () => {
    // console.log(container)
    expect(getByLabelText(container,"options")).toBeTruthy();
});