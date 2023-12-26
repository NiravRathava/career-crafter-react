import { NotificationContainer } from "react-notifications";
import "./App.css";
import LayoutRoutes from "./router/layoutRoutes";
import "react-notifications/lib/notifications.css";
import Container from "@mui/material/Container";
function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <NotificationContainer />
        <LayoutRoutes />
      </Container>
    </div>
  );
}

export default App;
