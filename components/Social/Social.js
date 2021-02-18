import { memo } from 'react';
import PropTypes from 'prop-types';
import { SocialItem } from 'components';
import { socialList } from './Social.module.scss';

const Social = ({ menu }) => {
  return (
    <div className={`${socialList}`}>
      <ul>
        {menu.items.map(item => <SocialItem item={item} key={item.id} />)}
      </ul>
    </div>
  )
}

Social.propTypes = {
  menu: PropTypes.shape({
    id: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  })
}

export default memo(Social);