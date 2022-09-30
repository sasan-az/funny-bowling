export function App({ renderComponent, foo, bar }) {
    console.log("app rerender");
    return <div className="App">{renderComponent({ foo, bar })}</div>;
}
