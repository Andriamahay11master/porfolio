import { useTranslation } from "react-i18next";
import dataProjectList from "../data/projects";
import { dataListSkills } from "../data/skills";
import { dataFooter } from "../data/footer";
import { dataForm } from "../data/contact";
import { dataBlockContentRight } from "../data/banner";
import { dataNav } from "../data/nav";
import {
  dataAbout,
  dataBlockInfo,
  dataContact,
  dataProject,
} from "../data/section";

export const useTranslatedData = () => {
  const { t } = useTranslation();

  const translatedNav = dataNav.map((n) => ({
    ...n,
    name: t(n.name),
  }));

  const translatedBlockContentRight = {
    title: t(dataBlockContentRight.title),
    desc: t(dataBlockContentRight.desc),
    valBtn: t(dataBlockContentRight.valBtn),
    linkBtn: dataBlockContentRight.linkBtn,
    srcImage: dataBlockContentRight.srcImage,
    width: dataBlockContentRight.width,
    height: dataBlockContentRight.height,
    altImage: t(dataBlockContentRight.altImage),
  };

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

  const translatedBlockInfo = {
    title: t(dataBlockInfo.title),
    desc: t(dataBlockInfo.desc),
    linkBtn: dataBlockInfo.linkBtn,
    valBtn: t(dataBlockInfo.valBtn),
    image: dataBlockInfo.image,
    altImage: t(dataBlockInfo.altImage),
  };
  const translatedAbout = {
    id: dataAbout.id,
    title: t(dataAbout.title),
    desc: t(dataAbout.desc),
  };

  const translatedProject = {
    id: dataProject.id,
    title: t(dataProject.title),
    desc: t(dataProject.desc),
  };

  const translatedContact = {
    id: dataContact.id,
    title: t(dataContact.title),
    desc: t(dataContact.desc),
  };

  return {
    nav: translatedNav,
    blockContentRight: translatedBlockContentRight,
    projects: translatedProjects,
    skills: translatedSkills,
    footer: translatedFooter,
    form: translatedForm,
    blockInfo: translatedBlockInfo,
    about: translatedAbout,
    project: translatedProject,
    contact: translatedContact,
  };
};
