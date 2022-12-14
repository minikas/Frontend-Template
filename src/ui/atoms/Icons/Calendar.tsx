import * as React from "react";

function SvgCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        opacity={0.5}
        d="M12.401 3a.4.4 0 01-.4-.4V1a1 1 0 112 0v1.6a.4.4 0 01-.4.4h-1.2zm-8 0a.4.4 0 01-.4-.4V1a1 1 0 112 0v1.6a.4.4 0 01-.4.4h-1.2z"
      />
      <path d="M15.001 18h-12a3 3 0 01-3-3V1.4a.4.4 0 01.4-.4h2.4a.2.2 0 01.2.2v1.6a.2.2 0 01-.2.2h-.8v1h14V3h-.8a.2.2 0 01-.2-.2V1.2a.2.2 0 01.2-.2h2.4a.4.4 0 01.4.4V15a3 3 0 01-3 3zm-13-12v9a1 1 0 001 1h12a1 1 0 001-1V6h-14zm11.6 8h-5.2a.4.4 0 01-.4-.4v-1.2a.4.4 0 01.4-.4h5.2a.4.4 0 01.4.4v1.2a.4.4 0 01-.4.4zm-7.2 0h-1.8c-.331 0-.6-.179-.6-.4v-1.2c0-.221.269-.4.6-.4h1.8c.331 0 .6.18.6.4v1.2c0 .22-.269.4-.6.4zm7-4h-1.8c-.331 0-.6-.179-.6-.4V8.4c0-.22.269-.4.6-.4h1.8c.331 0 .6.179.6.4v1.2c0 .221-.269.4-.6.4zm-3.8 0h-5.2a.4.4 0 01-.4-.4V8.4a.4.4 0 01.4-.4h5.2a.4.4 0 01.4.4v1.2a.4.4 0 01-.4.4zm1.2-7h-3.6a.2.2 0 01-.2-.2V1.2a.2.2 0 01.2-.2h3.6a.2.2 0 01.2.2v1.6a.2.2 0 01-.2.2z" />
    </svg>
  );
}

export default SvgCalendar;
