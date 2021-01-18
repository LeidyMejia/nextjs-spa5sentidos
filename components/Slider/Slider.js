import { memo } from 'react';
import { Carousel } from 'react-bootstrap';
import useTranslation from "next-translate/useTranslation";

import { withQuery } from "hoc";
import { SliderCaption } from 'components';
import { querySlidersData } from './Slider.queries';
import { asset, translatableProperties } from 'utils';
import { slider, sliderBackground, sliderBackgroundLayer } from './Slider.module.scss';

const Slider = ({ loading, error, data }) => {
  const { sliders = [] } = data;
  const { lang } = useTranslation();

  return (
    <Carousel indicators={false} className={slider}>
      {!loading && !error && sliders.map(slide => {
        const { images, id } = slide;
        const { title, subtitle } = translatableProperties(slide, lang, ['title', 'subtitle'])

        return (
          <Carousel.Item key={id}>
            <div className={sliderBackground} style={{ backgroundImage: `url("${asset(images.desktop.url)}")`}}>
              <div className={sliderBackgroundLayer} />
            </div>
            <img alt={title} className={"carousel-img"} src={asset(images.desktop.url)}/>
            <SliderCaption title={title} subtitle={subtitle} pathname={'/'}/>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default withQuery(querySlidersData)(memo(Slider));