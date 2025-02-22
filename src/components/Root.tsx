import React from "react";
import { LanguageContext } from "../context/LanguageContext";
import { IntlProvider} from "react-intl";
import App from "../App";


const Root = () => {
    const { locale, messages } = React.useContext(LanguageContext);
    return (
        <IntlProvider locale={locale} messages={messages}>
            <App />
        </IntlProvider>
    );
};

export default Root;

