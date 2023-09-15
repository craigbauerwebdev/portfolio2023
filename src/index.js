const { render } = wp.element;
import App from "./App";
import { Provider } from "./Context/pageData";

if (document.getElementById("portfolio-app")) {
  render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById("portfolio-app")
  );
}
