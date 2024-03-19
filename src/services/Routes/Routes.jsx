import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EnglishElement from "../../languages/English/English";
import PortugueseElement from "../../languages/Portuguese/Portuguese";
import HomePage from "../../pages/Home/Home";

const RouteElement = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage lang="en" />} />
                <Route path="/about" element={<EnglishElement />} />
                <Route path="/projects" element={<EnglishElement />} />
                <Route path="/skills" element={<EnglishElement />} />
                <Route path="/contact" element={<EnglishElement />} />

                <Route path="/pt" element={<HomePage lang="pt" />} />
                <Route path="/pt/sobre" element={<PortugueseElement />} />
                <Route path="/pt/projetos" element={<PortugueseElement />} />
                <Route path="/pt/habilidades" element={<PortugueseElement />} />
                <Route path="/pt/contato" element={<PortugueseElement />} />
            </Routes>
        </Router>
    );
}

export default RouteElement;