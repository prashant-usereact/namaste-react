const heading = React.createElement("div", { className: "para" }, [
  React.createElement("h1", { className: "heading" }, "Hello Prashant Roy"),
  React.createElement("h2", { className: "heading" }, "Hello World"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
