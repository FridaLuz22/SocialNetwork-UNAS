// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        initSesion: 'Sign in',
        register: 'Sign up',
        emailAddress: 'Email Address',
        password: 'Password',
        email: 'example@unas.edu.pe',
        lblpass: 'Forgot your password?',
        terms: 'I accept the terms and conditions',
        Recuerdame: 'Remenber me',
        noregi: 'You do not have an account? Sign up!',
        yourfname: 'Your full name',
        fname: 'Full name',
        telf: 'Phone',
        ntelf: 'Phone number',
        siregi: 'Do you already have an account? Log in!'
      },
    },
    es: {
      translation: {
        initSesion: 'Iniciar Sesión',
        register: 'Registrarse',
        emailAddress: 'Correo Electrónico',
        password: 'Contraseña',
        email: 'ejemplo@unas.edu.pe',
        lblpass: '¿Olvidaste la contraseña?',
        terms: 'Acepto los términos y condiciones',
        Recuerdame: 'Recuérdame',
        noregi: '¿No tienes una cuenta? Regístrate!',
        yourfname: 'Tu nombre completo',
        fname: 'Nombre completo',
        telf: 'Teléfono',
        ntelf: 'Número de teléfono',
        siregi: '¿Ya tienes una cuenta? Inicia Sesión!'
      },
    },
    ch: {
      translation: {
        initSesion: '登录',
        register: '报到',
        emailAddress: '电子邮件',
        password: '密码',
        email: '示例@unas.edu.pe',
        lblpass: '忘记密码了吗？',
        terms: '我接受条款及条件',
        Recuerdame: '你的全名',
        noregi: '你没有帐户？ 报名！',
        yourfname: '你的全名',
        fname: '全名',
        telf: '电话',
        ntelf: '电话号码',
        siregi: '你是不是已经有一个账号？ 登录！'
      },
    },
  },
  lng: 'es', // Idioma predeterminado
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
