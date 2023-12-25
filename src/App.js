import { NotificationContainer } from "react-notifications";
import "./App.css";
import LayoutRoutes from "./router/layoutRoutes";
import 'react-notifications/lib/notifications.css';
function App() {
  return (
    <div className="App">
      <NotificationContainer/>
      <LayoutRoutes/>
    </div>
  );
}

export default App;
