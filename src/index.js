const { render } = wp.element;
import App from "./App";
console.log("what???");
if (document.getElementById("portfolio-app")) {
  render(<App />, document.getElementById("portfolio-app"));
}
