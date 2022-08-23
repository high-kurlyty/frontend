export default function MoveScrollIcon({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.37 51.74">
      <g>
        <g>
          <line
            className="cls-1"
            fill="none"
            stroke={color}
            style={{
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "5px",
            }}
            x1="2.5"
            y1="2.5"
            x2="25.87"
            y2="25.87"
          />
          <line
            className="cls-1"
            fill="none"
            stroke={color}
            style={{
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "5px",
            }}
            x1="25.87"
            y1="25.87"
            x2="2.5"
            y2="49.24"
          />
        </g>
      </g>
    </svg>
  );
}
