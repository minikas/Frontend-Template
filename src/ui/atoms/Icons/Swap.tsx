import * as React from "react";

function SvgSwap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 23 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        opacity="0.5"
        d="M22.6152 21.2607L17.2598 26.0469V22.8389L7.35986 22.8789C4.22986 22.8789 2.54199 19.9527 2.54199 17.2007C2.54199 14.6207 4.03186 12.0181 7.35986 12.0181H15.916L15.6401 13.5239L12.0039 14.9238H7.35986C7.03108 14.912 6.70396 14.9761 6.40381 15.1108C6.10366 15.2456 5.83857 15.4471 5.62891 15.7007C5.24912 16.1928 5.04945 16.8004 5.06299 17.4219C5.03342 17.7465 5.07035 18.0734 5.17139 18.3833C5.27242 18.6932 5.43567 18.9793 5.65088 19.2241C5.86609 19.4689 6.12895 19.6672 6.42334 19.8071C6.71773 19.947 7.03709 20.0258 7.36279 20.0381L17.2632 19.9971L17.3628 16.6499L22.6128 21.2617L22.6152 21.2607Z"
      />
      <path d="M0.536621 5.69897L5.89209 0.912842V4.12085L15.792 4.08081C18.922 4.08081 20.6099 7.00703 20.6099 9.75903C20.6099 12.339 19.12 14.9417 15.792 14.9417H8.95703L15.792 12.0417C16.1208 12.0536 16.4479 11.99 16.748 11.8552C17.0482 11.7205 17.3133 11.5184 17.5229 11.2649C17.9027 10.7728 18.1024 10.1652 18.0889 9.5437C18.1184 9.21911 18.0815 8.89215 17.9805 8.58228C17.8794 8.2724 17.7162 7.98624 17.501 7.74146C17.2858 7.49668 17.0229 7.29833 16.7285 7.15845C16.4341 7.01857 16.1148 6.94022 15.7891 6.92798L5.88867 6.96899L5.78906 10.3157L0.539062 5.70386L0.536621 5.69897Z" />
    </svg>
  );
}

export default SvgSwap;