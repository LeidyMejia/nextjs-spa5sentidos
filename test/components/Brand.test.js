import React from 'react';
import { Brand } from 'components';
import { render } from '@testing-library/react';

describe('Component Brand', () => {
  test('Render ancore element and text when pass props', () => {
    const brandName = 'Spa 5 Sentidos';
    const { container, } = render(<Brand name={brandName}/>);
    const childNodesLength = brandName.split(' ').length * 3;

    expect(container.firstChild.classList.contains('navbar-brand')).toBeTruthy()
    expect(container.firstChild).toHaveTextContent(brandName)
    expect(container.firstChild.childNodes).toHaveLength(childNodesLength)
  })

  test('Render empty ancore element when not pass props', () => {
    const { container, } = render(<Brand name={''}/>);
    expect(container.firstChild.classList.contains('navbar-brand')).toBeTruthy()
    expect(container.firstChild.childNodes).toHaveLength(0)
  })
})

