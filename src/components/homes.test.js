import {getAllByLabelText, getAllByRole, getByLabelText, getByTestId, render,act} from '@testing-library/react'
import React from 'react'
import apiClient from '../services/apiClient';
import Homes from './homes'

let container = null;

beforeEach(async () => {
    jest.spyOn(apiClient, 'getHomes').mockImplementation(() => {
        return Promise.resolve([
          {
            title: "Test home 1",
            image: "listing.jpg",
            location: "Test location 1",
            price: "1",
          },
          {
            title: "Test home 2",
            image: "listing.jpg",
            location: "Test location 2",
            price: "2",
          },
          {
            title: "Test home 3",
            image: "listing.jpg",
            location: "Test location 3",
            price: "3",
          }
        ]);
      });

    container = render(<Homes />).container;
    await act(async () => {})
});

it('should show homes', () => {
    const homes = getAllByLabelText(container,"homes");
    expect(homes.length).toBeGreaterThan(0)
})

it('should show images', () => {
    const homes = getAllByLabelText(container,"image");
    expect(homes.length).toBeGreaterThan(0)
})
it('should show location', () => {
    const homes = getAllByLabelText(container,"location");
    expect(homes.length).toBeGreaterThan(0)
})
it('should show prices', () => {
    const homes = getAllByLabelText(container,"price");
    expect(homes.length).toBeGreaterThan(0)
})

it('should show a number in price', () => {
    expect(container).toHaveTextContent("$1/night");
})
