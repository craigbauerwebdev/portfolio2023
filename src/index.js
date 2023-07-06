const { render } = wp.element;
import App from "./App";

if (document.getElementById("portfolio-app")) {
  render(<App />, document.getElementById("portfolio-app"));
}
