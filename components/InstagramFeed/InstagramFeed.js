import { useNearScreen } from 'hooks';
import Script from 'react-load-script';
import { Container, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

const InstagramFeed = () => {
  const { t } = useTranslation('common');
  const [show, ref] = useNearScreen();

  return (
    <>
      <Container fluid={'xl'} as={'section'} className={'mt-5'} >
        <h2 className="text-capitalize font-weight-bold text-center title mb-sm-5 mb-4" ref={ref}>
          { t('Follow us on Instagram') }
        </h2>
        <Row>
          <Col>
            { show ? <div className="elfsight-app-cbdcfb04-79f1-478c-b662-23542ada80d4"/> : null }
          </Col>
        </Row>
      </Container>
      <Script url="https://apps.elfsight.com/p/platform.js"/>
    </>
  )
}

export default InstagramFeed;