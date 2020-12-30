import Link from "next/link";
import { Container } from "react-bootstrap";
import { contactUsFeatured, contactUsFeaturedTitle } from './ContactUsFeatured.module.scss';

const ContactUsFeatured = ({ image = `/theme/home/bg3.jpg` }) => {
  return (
    <div className={`${contactUsFeatured} middle-sec text-center py-5`} style={{ backgroundImage: `url(${image})` }}>
      <Container className={`py-xl-5 py-md-3`}>
        <h4 className={`${contactUsFeaturedTitle} text-uppercase text-white py-3`}>Despierta tus 5 sentidos</h4>
        <Link href={`/about-us`}>
          <a className="scroll btn mt-sm-5 mt-4">Contacto</a>
        </Link>
      </Container>
    </div>
  )
}

export default ContactUsFeatured;