export default function CartIcon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.94 74.31">
      <g>
        <g>
          <polyline
            className="cls-1"
            fill="none"
            stroke={color}
            style={{
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeWidth: "5px",
            }}
            points="2.5 2.5 15.12 2.5 24.86 47.86 71.99 47.86 79.44 13.56 20.02 13.56"
          />
          <circle className="cls-1" cx="32.25" cy="65.56" r="6.25" />
          <circle className="cls-1" cx="64.63" cy="65.56" r="6.25" />
        </g>
      </g>
    </svg>
  );
}
