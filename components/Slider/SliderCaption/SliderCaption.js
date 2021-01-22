import PropTypes from 'prop-types';
import { Carousel } from "react-bootstrap";

import styled, { sliderBubbles } from "./SliderCaption.module.scss";

const SliderCaption = ({ title, subtitle, pathname }) => (
  <Carousel.Caption className={styled.sliderCaption}>
    <div className={styled.sliderLeftSpaBeauty}>
      <div className="banner-text-effectbeautysls">
        <div className="center-outer">
          <div className="center-inner">
            <div className={sliderBubbles}>
              { pathname === '/'  ? <h1>{title}</h1> : <h2>{title}</h2> }
            </div>
          </div>
        </div>
      </div>
      { subtitle && <h4 className="sec-text-beautysls pt-lg-5 pt-4 pb-sm-4 pb-3">{subtitle}</h4> }
    </div>
  </Carousel.Caption>
)

SliderCaption.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default SliderCaption;