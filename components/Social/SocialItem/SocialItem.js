import PropTypes from 'prop-types';
import Link from "next/link";
import Image from "next/image";
import { asset, translatableProperties } from 'utils';
import useTranslation from 'next-translate/useTranslation';
import { socialItem, socialItemLink } from './SocialItem.module.scss';

const SocialItem = ({ item }) => {
  const { icon = {} } = item;
  const { lang } = useTranslation();
  const { url, label } = translatableProperties(item, lang, ['url', 'label'])

  return (
    <li className={socialItem}>
      <Link href={url}>
        <a target="_blank" className={socialItemLink} rel="noopener">
          { icon &&
            <Image
              src={asset(icon.url)}
              height={32}
              width={32}
              alt={label}
            />
          }
        </a>
      </Link>
    </li>
  )
}

SocialItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label_en: PropTypes.string.isRequired,
    label_es: PropTypes.string.isRequired,
    url_en: PropTypes.string.isRequired,
    url_es: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      ext: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired,
  })
}

export default SocialItem;