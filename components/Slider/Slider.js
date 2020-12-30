import { asset } from 'utils';
import { withQuery } from "hoc";
import { useRouter } from 'next/router';
import { SliderCaption } from 'components';
import { Carousel } from 'react-bootstrap';
import { querySlidersData } from './Slider.queries';
import { slider, sliderBackground, sliderBackgroundLayer } from './Slider.module.scss';

const Slider = ({ loading, error, data }) => {
  const { sliders = [] } = data;
  const { pathname } = useRouter();

  return (
    <Carousel indicators={false} className={slider}>
      {!loading && !error && sliders.map(({ title, subtitle, id, images }) =>
        <Carousel.Item key={id}>
          <div className={sliderBackground} style={{ backgroundImage: `url("${asset(images.desktop.url)}")`}}>
            <div className={sliderBackgroundLayer} />
          </div>
          <img
            alt={title[lang]}
            className={"carousel-img"}
            src={asset(images.desktop.url)}
          />
          <SliderCaption title={title[lang]} subtitle={subtitle[lang]} pathname={pathname}/>
        </Carousel.Item>
      )}
    </Carousel>
  )
}

export default withQuery(querySlidersData)(Slider);