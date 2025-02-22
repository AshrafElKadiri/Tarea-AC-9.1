import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FormattedMessage } from 'react-intl';

const LanguageSelector = () => {
  const { changeLanguage, locale } = useContext(LanguageContext);

  return (
    <div>
      <label htmlFor="language-select">
        <FormattedMessage id="app.languageSelector" />
      </label>{' '}
      <select
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
        value={locale}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
