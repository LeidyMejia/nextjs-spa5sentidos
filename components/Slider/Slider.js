import { memo } from 'react';
import { withQuery } from 'hoc';
import { Carousel } from 'react-bootstrap';
import { SliderCaption } from 'components';
import { isMobile } from 'react-device-detect';
import { querySlidersData } from './Slider.queries';
import { asset, translatableProperties } from 'utils';
import useTranslation from 'next-translate/useTranslation';
import { slider, sliderItem, sliderBackgroundLayer } from './slider.module.scss';

const Slider = ({ loading, error, data }) => {
  const { sliders = [] } = data;
  const { lang } = useTranslation();

  return (
    <Carousel indicators={false} className={slider}>
      {!loading && !error && sliders.map(slide => {
        const { images, id } = slide;
        const { url: imageUrl } = isMobile ? images.mobile : images.desktop;
        const { title, subtitle } = translatableProperties(slide, lang, ['title', 'subtitle'])

        return (
          <Carousel.Item key={id} className={sliderItem}>
            <div className={sliderBackgroundLayer} />
            <img alt={title} className={'carousel-img'} src={asset(imageUrl)}/>
            <SliderCaption title={title} subtitle={subtitle} pathname={'/'}/>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default withQuery(querySlidersData)(memo(Slider));