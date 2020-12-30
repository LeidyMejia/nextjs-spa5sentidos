import { ServicesListItem } from 'components';

const ServicesList = ({ loading, data = {}, error }) => {
  const { services = [] } = data;

  return (
    <div className={`row text-sm-left text-center justify-content-center`} data-testid={'services-list'}>
      {(!loading && !error) && (
        services.map(service => <ServicesListItem key={service.id} service={service}/>)
      )}
    </div>
  )
};

export default React.memo(ServicesList);
