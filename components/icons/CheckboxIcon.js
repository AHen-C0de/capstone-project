export default function CheckboxIcon({ fillColor }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="5"
        width="10"
        height="10"
        stroke={fillColor}
        strokeWidth="2"
      />
      <path
        d="M4 8L6.5 11.5L14.5 1"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
