import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EnglishElement from "../../languages/English/English";
import PortugueseElement from "../../languages/Portuguese/Portuguese";

const RouteElement = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<EnglishElement />} />
                <Route path="/pt" element={<PortugueseElement />} />
            </Routes>
        </Router>
    );
}

export default RouteElement;