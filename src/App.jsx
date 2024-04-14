import { useTranslation } from 'react-i18next';
export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
  <h1 className="text-4xl font-bold mb-4">{t("Hello React, Have a Good Day!")}</h1>
  <div className="flex space-x-4">
    <button
      onClick={() => i18n.changeLanguage("en")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      EN
    </button>
    <button
      onClick={() => i18n.changeLanguage("esp")}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      ESP
    </button>
    <button
      onClick={() => i18n.changeLanguage("urdu")}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      URDU
    </button>
    <button
      onClick={() => i18n.changeLanguage("arabic")}
      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    >
      ARABIC
    </button>
  </div>
</div>

    </>
  )
}

