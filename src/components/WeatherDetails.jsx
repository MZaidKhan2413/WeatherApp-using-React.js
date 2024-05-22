export default function WeatherDetails({ heading, value }) {
  return (
    <div className="fs-6 text-center text-secondary p-1 p-md-3">
      {heading} <br />
      <span className="text-dark fs-5">{value}</span>
    </div>
  );
}
