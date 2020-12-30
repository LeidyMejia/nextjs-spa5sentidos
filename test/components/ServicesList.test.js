import servicesListMock from './__mocks__/servicesListMock';
import { ServicesList, ServicesListItem } from 'components';
import { cleanup, render, screen } from '@testing-library/react';

const props = {
  data: { services: [] },
  error: false,
  loading: false,
}

describe('Component ServicesList',  () => {
  afterEach(cleanup)

  it('should render component when passing empty services list', () => {
    render(<ServicesList {...props} />);
    expect(screen.getByTestId('services-list')).toBeInTheDocument();
  })

  it('should render list of items when passing services list', () => {
    props.data.services = servicesListMock;
    render(<ServicesList data={{ services: servicesListMock }} />);

  });
})