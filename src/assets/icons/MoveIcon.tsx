export default function MoveIcon({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.54 59.76">
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
            x1="29.88"
            y1="29.88"
            x2="5.66"
            y2="5.66"
          />
          <line
            className="cls-1"
            fill="none"
            stroke={color}
            style={{
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              strokeWidth: "5px",
            }}
            x1="5.66"
            y1="54.1"
            x2="29.88"
            y2="29.88"
          />
        </g>
      </g>
    </svg>
  );
}
