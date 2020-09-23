import { useI18n } from "hooks";
import { withQuery } from "hoc";
import { pathImagesApi } from 'utils';
import { useRouter } from 'next/router';
import { SliderCaption } from 'components';
import { Carousel } from 'react-bootstrap';
import { querySlidersData } from './Slider.queries';

import { slider, sliderBackground, sliderBackgroundLayer } from './Slider.module.scss';

const Slider = ({ loading, error, data }) => {
  const { lang } = useI18n();
  const { sliders = [] } = data;
  const { pathname } = useRouter();

  return (
    <Carousel indicators={false} className={slider}>
      {!loading && !error && sliders.map(({ title, subtitle, id, images }) =>
        <Carousel.Item key={id}>
          <div className={sliderBackground} style={{ backgroundImage: `url("${pathImagesApi(images.desktop.url)}")`}}/>
          <div className={sliderBackgroundLayer} />
          <img
            alt={title[lang]}
            className={"carousel-img"}
            src={pathImagesApi(images.desktop.url)}
          />
          <SliderCaption title={title[lang]} subtitle={subtitle[lang]} pathname={pathname}/>
        </Carousel.Item>
      )}
    </Carousel>
  )
}

export default withQuery(querySlidersData)(Slider);