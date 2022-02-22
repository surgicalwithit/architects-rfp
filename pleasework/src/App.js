import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
    
  } from "react-router-dom";

import InvitePage from './pages/Invite';
import EventsPage from './pages/Events';
import ArchimatchPage from './pages/Archimatch';
import MainNavigation from "./components/layouts/MainNavigation";

function App() {
    return (
    <div>
        <MainNavigation />
        <Routes>
        <Route path="/" element={<ArchimatchPage />}/>
        <Route path="/invite" element={<InvitePage />}/>
        <Route path="/events" element={<EventsPage />}/>
        </Routes>
    </div>
    )
}

export default App;