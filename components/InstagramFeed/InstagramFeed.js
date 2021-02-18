import Script from 'react-load-script';
import { Container, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

const InstagramFeed = () => {
  const { t } = useTranslation('common');

  const handleLoadScript = () => {
    const interval = setInterval(() => {
      const buttonFreeWidget = document.querySelector('.eapps-link');
      if (buttonFreeWidget) {
        buttonFreeWidget.remove();
        clearInterval(interval);
      }
    }, 1000);
  }

  return (
    <>
      <Container fluid={'xl'} as={'section'} className={'mt-5'}>
        <h2 className="text-capitalize font-weight-bold text-center title mb-sm-5 mb-4">
          { t('Follow us on Instagram') }
        </h2>
        <Row>
          <Col>
            <div className="elfsight-app-cbdcfb04-79f1-478c-b662-23542ada80d4"/>
          </Col>
        </Row>
      </Container>
      <Script
        onLoad={handleLoadScript}
        url="https://apps.elfsight.com/p/platform.js"
      />
    </>
  )
}

export default InstagramFeed;