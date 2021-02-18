import Link from 'next/link';
import { Social } from 'components';
import { Container } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import { footer, copyRightGrids } from './Footer.module.scss';

const Footer = ({ socialMenu }) => {
  const { t } = useTranslation('common');

  return (
    <footer className={footer}>
      <Container>
        <div className="footer-posi-spasinfo">
          <Social menu={socialMenu} />
          <p className={copyRightGrids}>
            <span>© 2020 spa5sentidos.com. </span>
            <span>{ t('All Rights Reserved') }.</span>
          </p>
          <p className={copyRightGrids}>
            { t('Development by') } &nbsp;
            <Link href="https://www.linkedin.com/in/smarulanda97">
              <a target="_blank"  rel="noopener">@smarulanda97.</a>
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;