import  i18n  from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
 resources : {
    en: {
        translation: {
            "Hello React, Have a Good Day!": "Hello React, Have a Good Day!"
        }
    },
    esp: {
        translation: {
            "Hello React, Have a Good Day!": "Hola React, Que tengas un buen día!"
        }
    },
    urdu: {
        translation: {
            "Hello React, Have a Good Day!": "ہیلو ریئکٹ، اچھا دن ہو!"
        }
    },
    arabic: {
        translation: {
            "Hello React, Have a Good Day!": "مرحبا رياكت، اتمنى لك يوما سعيدا!"
        }
    }
 },
 lng: "en",
});