import PeoplePage from "@containers/PeoplePage/PeoplePage";
import PersonPage from "@containers/PersonPage/PersonPage";
import HomePage from "@containers/HomePage/HomePage";
import FavoritesPage from "@containers/FavoritesPage/FavoritesPage";
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";

const routesConfig = [
    {
        path: '/',
        element: HomePage,
        exact: true,
    },
    {
        path: '/people',
        element: PeoplePage,
        exact: true,
    },
    // :id - это динамический параметр, поэтому указываем через двоеточие
    {
        path: '/people/:id',
        element: PersonPage,
        exact: true,
    },
    {
        path: '/favorites',
        element: FavoritesPage,
        exact: true,
    },
    // это написано для наглядности
    // если бы это не было прописано, роут с ненайденным путем перехватывался бы последним конфигом
    {
        path: '/not-found',
        element: NotFoundPage,
        exact: true,
    },
    // * означает, что этот роут будет для всех страниц
    // exact - false
    // если нет совпадения с написанными выше роутами, то выберется этот и будет показана странциа 404
    {
        path: '*',
        element: NotFoundPage,
        exact: false,
    }
]

export default routesConfig;