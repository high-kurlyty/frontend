export default function HeartIcon({
  fill,
  stroke,
}: {
  fill: string;
  stroke: string;
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.22 65.55">
      <g>
        <g>
          <path
            className="cls-1"
            fill={fill}
            stroke={stroke}
            style={{
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "5px",
            }}
            d="M69.26,7.51C57.93-3.37,46.69,6.86,46.69,6.86l-8.08,7.69L30.53,6.86S19.28-3.37,8,7.51C-.43,15.56,2.62,24.29,5.5,29.05a33.91,33.91,0,0,0,4.31,5.2l28.8,28.8,28.8-28.8a35.11,35.11,0,0,0,4.31-5.2C74.59,24.29,77.65,15.56,69.26,7.51Z"
          />
        </g>
      </g>
    </svg>
  );
}
