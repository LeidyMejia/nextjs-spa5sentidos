import PropTypes from 'prop-types';
import { pathImagesApi } from "utils";
import { Col, Image } from "react-bootstrap";

const ServicesListItem = ({ service }) => {
  return (
    <Col sm={6} lg={3} className="service-grid mt-4" >
      <a href="">
        <Image src={pathImagesApi(service.images.featured.url)} alt={service.title_es} fluid/>
      </a>
      <h4 className="text-capitalize text-dark my-sm-4 my-3">{service.title_es}</h4>
      <p className={"text-justify"}>{service.summary_es.slice(0, 250)}</p>
      <div className="row pt-3">
        <div className="col-12 text-center">
           <a className="btn btn-sm btn-spa" href="">Ver más</a>
           <a className="btn btn-sm btn-spa-soli" target="_BLANK">
             Pide tu cita
           </a>
         </div>
       </div>
    </Col>
  )
};

ServicesListItem.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title_es: PropTypes.string.isRequired,
    title_en: PropTypes.string.isRequired,
    slug_es: PropTypes.string.isRequired,
    slug_en: PropTypes.string.isRequired,
    summary_es: PropTypes.string.isRequired,
    summary_en: PropTypes.string.isRequired,
    images: PropTypes.shape({
      featured: PropTypes.shape({
        url: PropTypes.string.isRequired
      })
    })
  })
}

export default ServicesListItem;
