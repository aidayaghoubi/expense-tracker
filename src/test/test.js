import store from "./store";
import { Dispatch, useState } from "react";
import * as actions from "./action";
import styledComponents from "styled-components";

const Backsvg1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="229"
    height="53"
    viewBox="0 0 229 53"
    fill="none"
  >
    <g filter="url(#filter0_d_9_105)">
      <path
        d="M14 18.1887L32.3447 30.7361C36.1549 33.3421 41.122 33.5316 45.1196 31.2234L66.4908 18.8841C70.4664 16.5887 75.4032 16.7625 79.2074 19.3319L83.5832 22.2873C86.8659 24.5044 91.0313 24.9587 94.7148 23.5012L117.825 14.3569C122.132 12.6523 127.037 13.5797 130.425 16.7396L133.649 19.7466C137.521 23.3582 143.302 24.0049 147.877 21.3383L164.574 11.605C168.384 9.38423 173.104 9.43184 176.868 11.729L215 35"
        stroke="#5A35CC"
      />
    </g>
    <path
      d="M204.5 51.5L23.5 52.5L18.9174 48.9357C16.1172 46.7578 14.4242 43.4526 14.2929 39.9076L13.5 18.5L31.3418 30.2756C35.7345 33.1748 41.3822 33.3653 45.9603 30.7688L66.2785 19.245C69.8427 17.2236 74.1919 17.1604 77.8132 19.0776L86.2883 23.5644C88.0167 24.4795 90.0491 24.6297 91.8933 23.9788L119.936 14.0816C121.901 13.388 124.059 13.4886 125.951 14.3618L129.5 16L136.438 21.3611C138.913 23.2738 142.276 23.5684 145.046 22.1152L166.471 10.8759C169.279 9.40259 172.656 9.51618 175.359 11.1749L215 35.5L214.812 41.5049C214.638 47.0748 210.073 51.5 204.5 51.5Z"
      fill="url(#paint0_linear_9_105)"
      fillOpacity="0.43"
    />
    <defs>
      <filter
        id="filter0_d_9_105"
        x="0.717724"
        y="0.472168"
        width="227.543"
        height="51.9546"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.352941 0 0 0 0 0.207843 0 0 0 0 0.8 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_9_105"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_9_105"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_9_105"
        x1="114.25"
        y1="8.5"
        x2="114.25"
        y2="51.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5A35CC" />
        <stop offset="1" stopColor="#5A35CC" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const Backsvg2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="206"
    height="45"
    viewBox="0 0 206 45"
    fill="none"
  >
    <path
      d="M29.4175 20.4464L8.32839 32.6719C5.27997 34.4391 5.91213 39.0144 9.32554 39.8888C9.61398 39.9627 9.90986 40.0036 10.2075 40.0108L190.643 44.3472C194.619 44.4428 198.384 42.562 200.696 39.3255L202.339 37.0261C203.746 35.0549 204.525 32.7038 204.572 30.2819L204.997 8.17032C204.999 8.05701 204.991 7.94374 204.972 7.83196C204.751 6.50772 203.234 5.85644 202.122 6.60866L190.194 14.6773C188.451 15.8568 186.356 16.4047 184.258 16.2298C182.459 16.0799 180.743 15.4055 179.324 14.29L167.5 5C164.713 2.83231 160.985 2.30595 157.707 3.61725L155.5 4.5L147 8.99999L125.515 20.1128C121.009 22.4437 115.524 21.6886 111.814 18.2268L104.473 11.3748C103.498 10.4646 102.378 9.72343 101.159 9.18169L99.0643 8.25081C95.8512 6.82274 92.1733 6.8758 89.0027 8.39596L57.5 23.5L57.2002 23.5999C54.4894 24.5035 51.5451 24.4102 48.897 23.3366L39.9444 19.7072C36.5095 18.3147 32.624 18.5875 29.4175 20.4464Z"
      fill="url(#paint0_linear_9_104)"
      fillOpacity="0.43"
    />
    <path
      d="M4 35L30.013 20.1724C33.4911 18.1899 37.7198 18.0885 41.2997 19.8807C46.215 22.3413 51.7282 25 53.1222 25C54.8121 25 74.8988 15.2917 89.3739 8.14875C93.8136 5.95792 99.1445 6.69375 102.808 10.0236L112.824 19.1264C116.676 22.6276 122.347 23.2457 126.863 20.6566L155.328 4.33836C159.84 1.75172 165.504 2.36598 169.357 5.85967L177.503 13.2468C181.812 17.154 188.302 17.4088 192.904 13.8514L205 4.5"
      stroke="#09C0D6"
    />
    <defs>
      <linearGradient
        id="paint0_linear_9_104"
        x1="110.609"
        y1="5.00001"
        x2="110.609"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#09C0D6" />
        <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const CircleSvg = () => (<svg xmlns="http://www.w3.org/2000/svg" width="100" height="99" viewBox="0 0 100 99" fill="none">
  <path d="M23.4773 41.0909V30.1818H24.1761V41.0909H23.4773ZM25.8295 33.4545C25.7784 33.0227 25.571 32.6875 25.2074 32.4489C24.8438 32.2102 24.3977 32.0909 23.8693 32.0909C23.483 32.0909 23.1449 32.1534 22.8551 32.2784C22.5682 32.4034 22.3438 32.5753 22.1818 32.794C22.0227 33.0128 21.9432 33.2614 21.9432 33.5398C21.9432 33.7727 21.9986 33.973 22.1094 34.1406C22.223 34.3054 22.3679 34.4432 22.544 34.554C22.7202 34.6619 22.9048 34.7514 23.098 34.8224C23.2912 34.8906 23.4688 34.946 23.6307 34.9886L24.517 35.2273C24.7443 35.2869 24.9972 35.3693 25.2756 35.4744C25.5568 35.5795 25.8253 35.723 26.081 35.9048C26.3395 36.0838 26.5526 36.3139 26.7202 36.5952C26.8878 36.8764 26.9716 37.2216 26.9716 37.6307C26.9716 38.1023 26.848 38.5284 26.6009 38.9091C26.3565 39.2898 25.9986 39.5923 25.527 39.8168C25.0582 40.0412 24.4886 40.1534 23.8182 40.1534C23.1932 40.1534 22.652 40.0526 22.1946 39.8509C21.7401 39.6491 21.3821 39.3679 21.1207 39.0071C20.8622 38.6463 20.7159 38.2273 20.6818 37.75H21.7727C21.8011 38.0795 21.9119 38.3523 22.1051 38.5682C22.3011 38.7812 22.5483 38.9403 22.8466 39.0455C23.1477 39.1477 23.4716 39.1989 23.8182 39.1989C24.2216 39.1989 24.5838 39.1335 24.9048 39.0028C25.2259 38.8693 25.4801 38.6847 25.6676 38.4489C25.8551 38.2102 25.9489 37.9318 25.9489 37.6136C25.9489 37.3239 25.8679 37.0881 25.706 36.9062C25.544 36.7244 25.331 36.5767 25.0668 36.4631C24.8026 36.3494 24.517 36.25 24.2102 36.1648L23.1364 35.858C22.4545 35.6619 21.9148 35.3821 21.517 35.0185C21.1193 34.6548 20.9205 34.179 20.9205 33.5909C20.9205 33.1023 21.0526 32.6761 21.3168 32.3125C21.5838 31.946 21.9418 31.6619 22.3906 31.4602C22.8423 31.2557 23.3466 31.1534 23.9034 31.1534C24.4659 31.1534 24.9659 31.2543 25.4034 31.456C25.8409 31.6548 26.1875 31.9276 26.4432 32.2741C26.7017 32.6207 26.8381 33.0142 26.8523 33.4545H25.8295Z" fill="#B89F9F" />
  <path d="M94 50C94 74.2528 74.1246 94 49.5 94C24.8753 94 5 74.2528 5 50C5 25.7472 24.8753 6 49.5 6C74.1246 6 94 25.7472 94 50Z" stroke="#E4E9F3" strokeWidth="10" />
  <path d="M94 50.5C94 74.2482 74.0244 94 50 94C25.9756 94 5 74.7482 5 51" stroke="#09C0D6" strokeWidth="10" strokeLinecap="round" />
  <circle cx="5" cy="50" r="2" fill="white" />
  <path d="M94.2694 49.5034C93.7971 22.4456 72.9872 4.86804 45.0002 5.85663" stroke="#5A35CC" strokeWidth="10" strokeLinecap="round" />
  <circle cx="45" cy="6" r="2" fill="white" />
  <circle cx="94" cy="50" r="2" fill="white" />
</svg>);

const IncomeSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <g clipPath="url(#clip0_7_52)">
      <path d="M3.5 11H2.5C2.10218 11 1.72064 10.842 1.43934 10.5607C1.15804 10.2794 1 9.89782 1 9.5V2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H3.5C3.63261 1 3.75979 0.947322 3.85355 0.853553C3.94732 0.759785 4 0.632608 4 0.5C4 0.367392 3.94732 0.240215 3.85355 0.146447C3.75979 0.0526784 3.63261 0 3.5 0L2.5 0C1.8372 0.000793929 1.20178 0.264441 0.73311 0.73311C0.264441 1.20178 0.000793929 1.8372 0 2.5L0 9.5C0.000793929 10.1628 0.264441 10.7982 0.73311 11.2669C1.20178 11.7356 1.8372 11.9992 2.5 12H3.5C3.63261 12 3.75979 11.9473 3.85355 11.8536C3.94732 11.7598 4 11.6326 4 11.5C4 11.3674 3.94732 11.2402 3.85355 11.1464C3.75979 11.0527 3.63261 11 3.5 11Z" fill="white" />
      <path d="M11.5 5.49999L3.6115 5.51599C3.65535 5.43454 3.7102 5.3595 3.7745 5.29299L5.714 3.35349C5.76175 3.30737 5.79985 3.2522 5.82605 3.1912C5.85225 3.13019 5.86605 3.06459 5.86662 2.9982C5.8672 2.93181 5.85455 2.86597 5.82941 2.80452C5.80427 2.74307 5.76714 2.68724 5.7202 2.6403C5.67325 2.59335 5.61742 2.55622 5.55598 2.53108C5.49453 2.50594 5.42869 2.49329 5.3623 2.49387C5.29591 2.49445 5.2303 2.50824 5.1693 2.53444C5.1083 2.56065 5.05312 2.59874 5.007 2.64649L3.0665 4.58599C2.69156 4.96105 2.48093 5.46967 2.48093 5.99999C2.48093 6.53032 2.69156 7.03894 3.0665 7.41399L5.006 9.35349C5.05212 9.40125 5.1073 9.43934 5.1683 9.46554C5.2293 9.49175 5.29491 9.50554 5.3613 9.50612C5.42769 9.5067 5.49353 9.49405 5.55498 9.46891C5.61642 9.44376 5.67225 9.40664 5.7192 9.35969C5.76614 9.31274 5.80327 9.25692 5.82841 9.19547C5.85355 9.13402 5.8662 9.06818 5.86562 9.00179C5.86505 8.9354 5.85125 8.86979 5.82505 8.80879C5.79885 8.74779 5.76075 8.69262 5.713 8.64649L3.7735 6.70699C3.71754 6.64937 3.66869 6.58525 3.628 6.51599L11.5 6.49999C11.6326 6.49999 11.7598 6.44732 11.8536 6.35355C11.9473 6.25978 12 6.1326 12 5.99999C12 5.86739 11.9473 5.74021 11.8536 5.64644C11.7598 5.55267 11.6326 5.49999 11.5 5.49999Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_7_52">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const Expense = () => (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <g clip-path="url(#clip0_7_63)">
    <path d="M3.5 11H2.5C2.10218 11 1.72064 10.842 1.43934 10.5607C1.15804 10.2794 1 9.89782 1 9.5V2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H3.5C3.63261 1 3.75979 0.947322 3.85355 0.853553C3.94732 0.759785 4 0.632608 4 0.5C4 0.367392 3.94732 0.240215 3.85355 0.146447C3.75979 0.0526784 3.63261 0 3.5 0L2.5 0C1.8372 0.000793929 1.20178 0.264441 0.73311 0.73311C0.264441 1.20178 0.000793929 1.8372 0 2.5L0 9.5C0.000793929 10.1628 0.264441 10.7982 0.73311 11.2669C1.20178 11.7356 1.8372 11.9992 2.5 12H3.5C3.63261 12 3.75979 11.9473 3.85355 11.8536C3.94732 11.7598 4 11.6326 4 11.5C4 11.3674 3.94732 11.2402 3.85355 11.1464C3.75979 11.0527 3.63261 11 3.5 11Z" fill="white" />
  </g>
  <path d="M2.48486 6.21885L10.1344 6.202C10.0919 6.28778 10.0387 6.3668 9.97638 6.43684L8.09562 8.47933C8.04931 8.5279 8.01237 8.586 7.98696 8.65024C7.96155 8.71448 7.94818 8.78357 7.94762 8.85349C7.94706 8.9234 7.95933 8.99274 7.98371 9.05745C8.00808 9.12216 8.04409 9.18095 8.08961 9.23039C8.13514 9.27983 8.18927 9.31893 8.24886 9.3454C8.30845 9.37188 8.37229 9.3852 8.43667 9.38459C8.50105 9.38399 8.56467 9.36946 8.62383 9.34186C8.68298 9.31427 8.73648 9.27415 8.78121 9.22386L10.6629 7.18138C11.0265 6.78641 11.2308 6.25079 11.2308 5.69231C11.2308 5.13382 11.0265 4.5982 10.6629 4.20323L8.78218 2.16075C8.73745 2.11046 8.68395 2.07034 8.6248 2.04275C8.56564 2.01515 8.50202 2.00063 8.43764 2.00002C8.37326 1.99941 8.30941 2.01273 8.24983 2.03921C8.19024 2.06568 8.13611 2.10478 8.09058 2.15422C8.04506 2.20366 8.00905 2.26245 7.98468 2.32716C7.9603 2.39187 7.94803 2.46121 7.94859 2.53112C7.94915 2.60104 7.96252 2.67013 7.98793 2.73437C8.01334 2.79861 8.05028 2.85671 8.09659 2.90529L9.97735 4.94777C10.0316 5.00845 10.079 5.07598 10.1184 5.14891L2.48486 5.16576C2.35627 5.16576 2.23294 5.22123 2.14202 5.31998C2.05109 5.41873 2 5.55266 2 5.69231C2 5.83195 2.05109 5.96588 2.14202 6.06463C2.23294 6.16338 2.35627 6.21885 2.48486 6.21885Z" fill="white" />
  <defs>
    <clipPath id="clip0_7_63">
      <rect width="12" height="12" fill="white" />
    </clipPath>
  </defs>
</svg>)

const Wrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    /* background-color: blue; */
    margin: 0 auto;

   & .result{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
   


    }
    & .balance{
      width: 47%;
      background-color: #F5F8FE;
      height: 330px;
      transform: translate(0px, -9px);
      border-radius: 15px;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
      border-radius: 14px;
      position: relative ;
      & svg{
        position: absolute;
      left: 56px;
      height: auto;
      width: 196px;
      top: 77px;

      }
      & #balance-amount{
        position: absolute;
        left: 107px;
        top: 161px;
        font-size: 19px;
        font-size: 21px;
        font-weight: 700;
      }
      & #balence-text{
        margin: 29px 24px;
        font-size: 18px;
        font-weight: 700;
      }
      & .circle-info{
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        transform: translate(25%,-95%);
        
        & p:first-child::after{
          content: "";
          position: absolute;
          height: 15px;
          width: 15px;
          background-color: #5A35CC;
          bottom: 0px;
          left: -18px;
          border-radius: 50%;
        }
        & p:last-child::after{
          content: "";
          position: absolute;
          height: 15px;
          width: 15px;
          background-color: #09C0D6;
          bottom: 0px;
          left: -18px;
          border-radius: 50%;
        }
        & p:last-child::before{
          content: "";
          position: absolute;
          height: 1px;
          width: 21px;
          background-color: #8f9293;
          bottom: 6px;
          left: -46px;
         transform: rotate(90deg)
        }
        & p{
          margin: 0 27px;
          position: relative;

      
        }
      }
    }
     & #income{
      width: 50%;
      height: 300px;
      justify-content: space-between;
      display: flex;
      flex-direction: column;

    & div:first-child svg{
      width: 356px;
      left: -6px;
    }
    & div:first-child{

      & p{
        color: #09C0D6;
      }
      
    }
    & div{
      width: 100%;
      background-color: #f5f8fe;
      height: 140px;
      background: #F5F8FE;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
      border-radius: 14px;
      position:relative;
      & p{
        margin: 15px 21px;
        font-weight: 700;
        font-size: 18px;
        color: #5a35cc;
        
      }

      & svg{
        width: 403px;
        height: auto;
        position: absolute;
        left: -27px;
        bottom: 0;

      }
    }
    }

    & .info{
      margin-top:15px; 
      width: 100%;
      font-size: 20px;

      & .history{
        width: 100%;
        & #history-title{
          margin: 0px 0px 0px 5px;
          font-size: 18px;
          font-weight: 600;
        }
        & #icon{
          & svg{
            height: auto;
            width: 25px
          }
        }
        & .items{
          display: flex;
          width: 93%;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          background: #F5F8FE;
          box-shadow: 1px 1px 4px rgb(0 0 0 / 12%);
          border-radius: 6px;
          padding: 0 19px;
          background: #e1e4e9;
          box-shadow: 1px 1px 4px rgb(0 0 0 / 12%);
          border-radius: 6px;
          padding: 0 19px;
          margin: 13px 0;

          & p{
            ont-size: 18px;
            font-weight: 700;
            color: #000000b3;
            & span{
              margin-left: 6px;
              color: #0a0808;
          
            }
          }


        }
      }

    }
    
    & .title{
      width: 100%;
      margin: 15px 0px 0px 25px;
      font-size: 18px;
      font-weight: 600;
    }

    & .controls{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    & .inputs{
      width: 45%;
      & input:focus{
        outline: none;
      }

      & input{
       width: 100%;
       font-size: 17px;
      height: 56px;
      background: #F5F8FE;
      box-shadow: 1px 1px 4px rgb(0 0 0 / 12%);
      border-radius: 6px;
      border: none;
      margin: 11px 0;
      padding-left: 15px;
      
      }
    }
    & .options {
      width: 50%;

      & .select{
         display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 11px 0;

        & div:first-child{
          background: #09C0D6;
        }

      & div{
        background: #5A35CC;
        transition: 0.5s;
        cursor: pointer;
        box-shadow: 1px 1px 4px rgb(0 0 0 / 12%);
        border-radius: 6px;
        width: 49%;
        height: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 500;
      }
      }
     
    
  }
  & .btn{
    margin: 11px 0;
      & button{
        width: 100%;
        cursor: pointer;
        height: 58px;
        margin-top: 10px;
        border: none;
        background: #45375e;
        color: #fff;
        border-radius: 6px;
        box-shadow: 1px 1px 4px rgb(0 0 0 / 12%);
        font-size: 18px;

        &:hover{
          background: #5f468d;
        }
      }
  
    }
`;


const split = (number) => {
  const ada = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return ada;
};


const Testing = () => {
  // const income = () => {
  //   store.dispatch(actions.income(value));
  //   setValue("");
  // };

  // const onDone = (id) => {
  //     console.log(id)
  //   store.dispatch(actions.done(id));
  // };
  // const expense = (id) => {
  //   store.dispatch(actions.expense(id));
  // };

  const [action, setAction] = useState(true);
  const [items, setItems] = useState({});
  const [state, setState] = useState(store.getState());
  const [error , setError] = useState(false)


  store.subscribe(() => {
    setState(store.getState());
  });

  const onTitleHndler = (props) => {
    if (props.e.target.value.trim()) {
      if (props.name === "amount") {
        setItems((prev) => {
          return {
            ...prev,
            amount: props.e.target.value.trim(),
          };
        });
      } else {
        setItems((prev) => {
          return {
            ...prev,
            title: props.e.target.value.trim(),
          };
        });
      }
    }
  };

  const setToggleHandler = (e) => {
    if (action === e) {
      setAction(!e)
    } else {
      setAction(e)
    }

  };

  const onSubmit = () => {
    if(items.amount.length && items.title.length){

      if (action === true) {
        store.dispatch(actions.income(items));
        setItems({amount :"" , title:""});
      } else {
        store.dispatch(actions.expense(items));
        setItems({amount :"" , title:""});
      }

    }
    else{
      if(!items.amount){
        setError("amount")
      }else if(!items.title){
        setError("title")
      }
    }
    
  };
  console.log(items , "d");

  const convertToDate = (data) => {
    const today = new Date(data);

    return "45454";
  };

  return (
    <Wrapper>
      <div className="result">
        <div className="balance">
          <div id="balance-amount">{split(state.wholeAmount)}</div>
          <p id="balence-text">
          
            Balance statistic
          </p>
          <CircleSvg />
          <div className="circle-info">
            <p>expense</p>

            <p>income</p>
          </div>
        </div>
        <div id="income">
          <div>
            <Backsvg2 />
            <p>Income : $<span>{split(state.income)}</span></p>

          </div>
          <div>
            <Backsvg1 />
            <p>Expense : $<span>{split(state.expense)}</span></p>

          </div>
        </div>
      </div>

      <div className="title">add new expense</div>
      <div className="controls">
        <div className="inputs">
          <input
            value={items?.title}
            placeholder="add title"
            onChange={(e) => onTitleHndler({ e, name: "title" })}
          />
          <input
            placeholder="add amount"
            type="number"
            value={items?.amount}
            onChange={(e) => onTitleHndler({ e, name: "amount" })}
          />
        </div>
        <div className="options">
          <div className="select">
            <div onClick={() => setToggleHandler(true)}
              style={{
                backgroundColor: action === false ? "#C1D2D5" : "#09C0D6"
              }}
            >income</div>
            <div onClick={() => setToggleHandler(false)}
              style={{
                backgroundColor: action === false ? "#5A35CC" : "#C1D2D5"
              }}
            >expense</div>
          </div>
          <div className="btn">
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>

      </div>


      <div className="info">
        <div className="history">
          <p id="history-title">history :</p>
          <div>
            {state?.history?.map((el, i) => {
              return (<div key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div key={i} className="items">
                  <p>{el.values.value.title} : 
                  <span> ${el.values.value.amount}</span>
                  </p>
                  
                </div>
                <div id="icon"
                  style={{
                    backgroundColor: el.action === "income" ? "#09C0D6" : "#5A35CC",
                    height: "65px",
                    borderRadius: " 9px",
                    width: "63px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: " -2px 0 0 8px"
                  }}
                >
                  {el.action === "income" ? <IncomeSvg /> : <Expense />}
                </div>
              </div>
              );
            })}
          </div>

        </div>


      </div>
    </Wrapper >
  );
};
export default Testing;
