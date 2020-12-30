import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { SpanishLanguage, EnglishLanguage } from "components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { languaSwitcher, languaSwitcherMenu } from './LanguageSwitcher.module.scss'

const LanguageSwitcher = ({ t }) => {
  const { changeLanguage: onClick, isCurrent } = useI18n();
  const changeLanguage = async (e, lang) => {
    e.preventDefault();
    onClick(lang)
  }

  const Title = () => (
    <Fragment>
      <span>{t('Language')}</span>
      <FontAwesomeIcon icon={faGlobeAmericas}/>
    </Fragment>
  )

  return (
    <Dropdown as={ButtonGroup} className={languaSwitcher} drop={'left'}>
      <Dropdown.Toggle id="dropdown-language">
        <Title />
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

LanguageSwitcher.propTypes = {
  t: PropTypes.func.isRequired
}

export default LanguageSwitcher