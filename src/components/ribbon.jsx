import { LANGUAGES } from "../constants/index";
import { useTranslation } from "react-i18next";

export default function Ribbon() {
    const { i18n, t } = useTranslation();
    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
      };

    return (
        <div className="flex items-center justify-center flex-col gap-2 py-4 bg-[color:#d9d9d93d]">
            <div className="flex flex-row items-center justify-center gap-3">
                <p>
                    {t("ribbon_copy")} <span className="ribbon_offer">{t("ribbon_offer")}</span>
                </p>
                <a href="#" className="font-bold underline">{t("ribbon_cta")}</a>
            </div>
            <select defaultValue={i18n.language} onChange={onChangeLang} className="bg-transparent">
                {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                    {label}
                </option>
                ))}
            </select>
        </div>
    )
  }
  