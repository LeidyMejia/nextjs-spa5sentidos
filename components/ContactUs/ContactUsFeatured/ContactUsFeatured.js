import { Link } from 'components';
import { Container } from 'react-bootstrap';
import { contactUsFeatured, contactUsFeaturedTitle } from './ContactUsFeatured.module.scss';

const ContactUsFeatured = ({ image = `/theme/home/bg3.jpg` }) => {
  return (
    <section className={`${contactUsFeatured} middle-sec text-center py-5`} style={{ backgroundImage: `url(${image})` }}>
      <Container className={`py-xl-5 py-md-3`}>
        <h2 className={`${contactUsFeaturedTitle} text-uppercase text-white py-3`}>Despierta tus 5 sentidos</h2>
        <Link href={`/about-us`} text={'Contact us'} color={'primary'}/>
      </Container>
    </section>
  )
}

export default ContactUsFeatured;