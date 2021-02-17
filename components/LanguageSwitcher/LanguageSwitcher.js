import { useRouter } from "next/router";
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

import { SpanishLanguage, EnglishLanguage } from "components";
import { languaSwitcher, languaSwitcherMenu } from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const changeLanguage = (e, lang) => {
    router.push('/', '/', { locale: lang })
  }

  return (
    <Dropdown as={ButtonGroup} className={languaSwitcher} drop={'left'}>
      <Dropdown.Toggle id="dropdown-language" aria-label={t('Language')}>
        <>
          <span>{t('Language')}</span>
          <FontAwesomeIcon icon={faGlobeAmericas}/>
        </>
      </Dropdown.Toggle>
      <Dropdown.Menu className={languaSwitcherMenu}>
        <Dropdown.Item as="button" onClick={e => changeLanguage(e, 'es')}>
          <SpanishLanguage height={`24px`} width={`auto`}/>
          <span className={`ml-3`}>{t('Spanish')}</span>
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={e => changeLanguage(e, 'en')}>
          <EnglishLanguage height={`24px`} width={`auto`}/>
          <span className={`ml-3`}>{t('English')}</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LanguageSwitcher