import i18next from 'i18next';

const metaTitleEn = 'Andriamahay IRIMANANA | Portfolio | Developer Frontend'
const metaTitleFr = 'Andriamahay IRIMANANA | Portfolio | Développeur Frontend'
const metaDescEn = 'Experienced front-end developer specializing in responsive, user-friendly web apps. Skilled in HTML, CSS, JavaScript, and React.js. Expert in transforming designs into clean, maintainable code. Collaborative team player focused on high-quality digital experiences. Explore my portfolio to see my work.'
const metaDescFr = "Développeur front-end expérimenté spécialisé dans les applications web réactives et conviviales. Compétent en HTML, CSS, JavaScript et React.js. Expert en transformation de designs en code propre et maintenable. Joueur d'équipe collaboratif, axé sur des expériences numériques de haute qualité. Explorez mon portfolio pour voir mon travail."
const metaKeyEn = 'Andriamahay, Andriamahay IRIMANANA, Andriamahay IRIMANANA Portfolio, Andriamahay IRIMANANA Developer Frontend'
const metaKeyFr = 'Andriamahay, Andriamahay IRIMANANA, Portfolio Andriamahay IRIMANANA, Développeur Frontend Andriamahay IRIMANANA'


let metaTitleP = (i18next.language == 'en') ? metaTitleEn : metaTitleFr;
let metaDescP = (i18next.language == 'en') ? metaDescEn : metaDescFr;
let metaKeyP = (i18next.language == 'en') ? metaKeyEn : metaKeyFr;

export { metaTitleP, metaDescP, metaKeyP}