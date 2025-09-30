import { useTranslation } from "react-i18next";
import dataProjectList from "../data/projects";
import { dataListSkills } from "../data/skills";
import { dataFooter } from "../data/footer";
import { dataForm } from "../data/contact";

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

  const translatedFooter = {
    title: t(dataFooter.title),
    desc: t(dataFooter.desc),
    copyright: t(dataFooter.copyright),
  };

  const translatedForm = {
    name: t(dataForm.name),
    email: t(dataForm.email),
    message: t(dataForm.message),
    valBtn: t(dataForm.valBtn),
    valText: t(dataForm.valText),
    valTxtBtn: t(dataForm.valTxtBtn),
    placeholderName: t(dataForm.placeholderName),
    placeholderEmail: t(dataForm.placeholderEmail),
    placeholderMessage: t(dataForm.placeholderMessage),
  };

  return {
    projects: translatedProjects,
    skills: translatedSkills,
    footer: translatedFooter,
    form: translatedForm,
  };
};
