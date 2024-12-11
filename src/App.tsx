import './scss/app.scss'
import {MainLayout} from "./components/mainlayouts/MainLayout";
import {Home} from "./pages/Home";

export const App = () => {
    return (
        <div>
            <MainLayout/>
            <Home/>
        </div>
    );
};
