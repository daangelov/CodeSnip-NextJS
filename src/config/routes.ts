interface Route {
  name: string,
  href: string,
}

interface Routes {
  Home: Route,
  About: Route,
  Login: Route,
  Signup: Route,
}

export const ROUTES: Routes = {
  Home: {
    name: 'Начало',
    href: '/',
  },
  About: {
    name: 'За Проекта',
    href: '/about',
  },
  Login: {
    name: 'Вход',
    href: '/login',
  },
  Signup: {
    name: 'Регистрация',
    href: '/signup',
  },
};
