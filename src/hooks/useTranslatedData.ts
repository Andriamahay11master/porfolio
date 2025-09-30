import { useTranslation } from "react-i18next";
import dataProjectList from "../data/projects";
import { dataListSkills } from "../data/skills";

export const useTranslatedData = () => {
  const { t } = useTranslation();

  const translatedProjects = dataProjectList.map((p) => ({
    ...p,
    title: t(p.titleKey),
    desc: t(p.descKey),
    btn: t(p.btnKey),
    altImage: t(p.altKey),
  }));

  const translatedSkills = {
    title: t(dataListSkills.title),
    data: dataListSkills.data.map((skill) => t(skill)),
  };

  return {
    projects: translatedProjects,
    skills: translatedSkills,
  };
};
