export default function Component({ foo }) {
  console.log("component rerender");

  return (
    <div>
      <h5>{foo}</h5>
    </div>
  );
}
