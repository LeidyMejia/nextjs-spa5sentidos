import { Container } from 'react-bootstrap';
import useTranslation from "next-translate/useTranslation";

import { footer, copyRightGrids } from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className={footer}>
      <Container>
        <div className="footer-posi-spasinfo">

          <div className="social my-4">
            <ul>

            </ul>
          </div>
          <p className={copyRightGrids}>
            <span>© 2020 spa5sentidos.com. </span>
            <span>{ t('All Rights Reserved') }.</span>
          </p>
          <p className={copyRightGrids}>
            { t('Development by') } &nbsp;
            <a href="https://www.linkedin.com/in/smarulanda97" target="_blank"  rel="noopener">@smarulanda97.</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;