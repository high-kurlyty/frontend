export default function CloseIcon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.3 37.3">
      <g>
        <g>
          <line
            className="cls-1"
            fill="none"
            stroke={color}
            style={{
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              strokeWidth: "5px",
            }}
            x1="2.5"
            y1="2.5"
            x2="34.8"
            y2="34.8"
          />
          <line
            className="cls-1"
            fill="none"
            stroke={color}
            x1="34.8"
            y1="2.5"
            x2="2.5"
            y2="34.8"
          />
        </g>
      </g>
    </svg>
  );
}
