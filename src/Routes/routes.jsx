import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";
import Home from "../components/Home/HomePage";

const routes = [
    {
        components: <Home />,
        to: '/',
    },
    {
        components: <About />,
        to: '/about',
    },
    {
        components: <ContactUs />,
        to: '/contactUs',
    },

    // {
    //     components: <Home />,
    //     to: '/',
    // }, {
    //     components: <Home />,
    //     to: '/',
    // }, {
    //     components: <Home />,
    //     to: '/',
    // },
];


export default routes;