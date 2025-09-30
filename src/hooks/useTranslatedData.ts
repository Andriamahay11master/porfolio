import { useTranslation } from "react-i18next";
import dataProjectList from "../data/projects";

export const useTranslatedData = () => {
  const { t } = useTranslation();

  return dataProjectList.map((p) => ({
    ...p,
    title: t(p.titleKey),
    desc: t(p.descKey),
    btn: t(p.btnKey),
    altImage: t(p.altKey),
  }));
};
