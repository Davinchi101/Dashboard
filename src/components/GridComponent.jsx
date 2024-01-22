import { IoIosArrowDown } from "react-icons/io";

{/* I encountered difficulties while working on the responsive design. */}
const GridComponent = () => {
  return (
    <div className="grid grid-cols-7 sm:grid-cols-7 grid-rows-5 sm:grid-row-2 gap-4 px-8 pt-8 pb-8  font-primary">
      <div className="col-span-2 row-span-1 bg-white p-3 rounded-lg">
        <div className="flex justify-between">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="36"
              height="36"
              rx="8"
              fill="#D23565"
              fillOpacity="0.12"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.3983 19.5743C22.9605 19.5743 23.4325 20.0384 23.3465 20.5936C22.8421 23.8603 20.0456 26.2857 16.6728 26.2857C12.9412 26.2857 9.91669 23.2612 9.91669 19.5305C9.91669 16.4568 12.2518 13.5936 14.8807 12.9462C15.4456 12.8068 16.0246 13.2041 16.0246 13.7857C16.0246 17.7261 16.157 18.7454 16.9053 19.2998C17.6535 19.8541 18.5334 19.5743 22.3983 19.5743Z"
              stroke="#D23565"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.0772 16.293C26.1219 13.7614 23.0122 9.68072 19.2228 9.75089C18.928 9.75616 18.6921 10.0018 18.6789 10.2956C18.5833 12.3772 18.7122 15.0746 18.7842 16.2974C18.8061 16.6781 19.1052 16.9772 19.485 16.9991C20.7421 17.0711 23.5377 17.1693 25.5894 16.8588C25.8684 16.8167 26.0728 16.5746 26.0772 16.293Z"
              stroke="#D23565"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button className="text-gray-400 px-4 py-2 rounded flex items-center">
            This Week{" "}
            <span className="ml-1 font-medium	text-base	">
              {" "}
              <IoIosArrowDown />
            </span>
          </button>
        </div>
        <div className="flex mt-10 text-gray-500">
          <div>
            <p className="mb-1 font-medium	text-base">Sales</p>
            <span className="text-black font-medium	text-base ">
              ₦0.00
              <span className="text-[#16a34a] ml-1 font-light">+0.00%</span>
            </span>
          </div>
          <div className="ml-32 ">
            <p className="mb-1 font-medium	text-base">Volume</p>
            <p className="text-black font-medium	text-base">0</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-1 col-start-3 bg-white p-3 rounded-lg">
        <div className="flex justify-between">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="36"
              height="36"
              rx="8"
              fill="#FFCC91"
              fillOpacity="0.16"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9929 20.6723C19.0671 20.6723 21.6946 21.1382 21.6946 22.999C21.6946 24.8598 19.0846 25.339 15.9929 25.339C12.9179 25.339 10.2913 24.8773 10.2913 23.0157C10.2913 21.154 12.9004 20.6723 15.9929 20.6723Z"
              stroke="#1C1D22"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9929 18.0165C13.9746 18.0165 12.3379 16.3807 12.3379 14.3623C12.3379 12.344 13.9746 10.7082 15.9929 10.7082C18.0104 10.7082 19.6471 12.344 19.6471 14.3623C19.6546 16.3732 18.0296 18.009 16.0188 18.0165H15.9929Z"
              stroke="#1C1D22"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.7359 17.068C23.0701 16.8805 24.0976 15.7355 24.1001 14.3497C24.1001 12.9838 23.1043 11.8505 21.7984 11.6363"
              stroke="#1C1D22"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.4962 20.2768C24.7887 20.4693 25.6912 20.9227 25.6912 21.856C25.6912 22.4985 25.2662 22.9152 24.5795 23.176"
              stroke="#1C1D22"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button className="text-gray-400 px-4 py-2 rounded flex items-center">
            This Week{" "}
            <span className="ml-1 font-medium	text-base	">
              <IoIosArrowDown />
            </span>
          </button>
        </div>
        <div className="flex mt-10 text-gray-500">
          <div>
            <p className="mb-1">Customers</p>
            <span className="text-black font-medium	text-base ">
              0.00{" "}
              <span className="text-[#16a34a] ml-1 font-light">+0.00%</span>
            </span>
          </div>
          <div className="ml-32 ">
            <p className="mb-1">Active</p>
            <p className="text-black font-medium	text-base">
              0<span className="text-[#16a34a] ml-1 font-light">+0.00%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-3 row-span-1 col-start-5 bg-white p-3 rounded-lg">
        <div className="flex justify-between">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="36"
              height="36"
              rx="8"
              fill="#FFCC91"
              fillOpacity="0.16"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.7614 25.9167H14.8049C12.2496 25.9167 10.2893 24.9937 10.8461 21.279L11.4945 16.2447C11.8377 14.3911 13.02 13.6817 14.0574 13.6817H22.5395C23.5921 13.6817 24.7058 14.4445 25.1024 16.2447L25.7508 21.279C26.2237 24.5742 24.3167 25.9167 21.7614 25.9167Z"
              stroke="#130F26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.8759 13.4987C21.8759 11.5103 20.2639 9.89835 18.2756 9.89835V9.89835C17.3181 9.89429 16.3984 10.2718 15.7199 10.9474C15.0414 11.6231 14.66 12.5411 14.66 13.4987V13.4987"
              stroke="#130F26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.7469 17.2515H20.7088"
              stroke="#130F26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8881 17.2515H15.8499"
              stroke="#130F26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button className="text-gray-400 px-4 py-2 rounded flex items-center">
            This Week{" "}
            <span className="ml-1 font-semibold	">
              <IoIosArrowDown />
            </span>
          </button>
        </div>
        <div className="flex mt-10 text-gray-500  text-base font-medium">
          <div>
            <p>All Orders</p>
            <p className="text-black  mt-2">0</p>
          </div>
          <div className="ml-14">
            <p>Pending</p>
            <p className="text-black  mt-2">0</p>
          </div>
          <div className="ml-20">
            <p>Completed</p>
            <p className="text-black mt-2">
              0<span className="text-[#16a34a] ml-1 font-light">+0.00%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-2 row-start-2 bg-white p-5 rounded-lg">
        <div className="flex justify-between">
          <p className="text-base	font-medium	">Marketing</p>
          <button className="text-gray-400  rounded flex items-center">
            This Week{" "}
            <span className="ml-1 font-semibold	">
              <IoIosArrowDown />
            </span>
          </button>
        </div>
        <div className="flex justify-between items-center mt-3 text-sm text-[#A6A8B1]">
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="8" height="8" rx="4" fill="#D23565" />
          </svg>
          <p>Acquisition</p>
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="8" height="8" rx="4" fill="#97A5EB" />
          </svg>
          <p>Purchase</p>
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="8" height="8" rx="4" fill="#FFCC91" />
          </svg>
          <p>Retention</p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <svg
            width="205"
            height="205"
            viewBox="0 0 205 205"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M205 102.5C205 159.109 159.109 205 102.5 205C45.8908 205 0 159.109 0 102.5C0 45.8908 45.8908 0 102.5 0C159.109 0 205 45.8908 205 102.5ZM56.7908 102.5C56.7908 127.744 77.2555 148.209 102.5 148.209C127.744 148.209 148.209 127.744 148.209 102.5C148.209 77.2555 127.744 56.7908 102.5 56.7908C77.2555 56.7908 56.7908 77.2555 56.7908 102.5Z"
              fill="#EEF0FA"
            />
          </svg>
        </div>
      </div>
      <div className="col-span-2 row-span-1 col-start-3 row-start-2 bg-[#D23565] p-3 rounded-lg">
        <div>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="36"
              height="36"
              rx="8"
              fill="white"
              fillOpacity="0.16"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.8491 21.1101C25.8491 24.0917 24.0916 25.8492 21.1099 25.8492H14.6249C11.6357 25.8492 9.87491 24.0917 9.87491 21.1101V14.6101C9.87491 11.6326 10.9699 9.87508 13.9524 9.87508H15.6191C16.2174 9.87591 16.7807 10.1567 17.1391 10.6359L17.8999 11.6476C18.2599 12.1259 18.8232 12.4076 19.4216 12.4084H21.7799C24.7691 12.4084 25.8724 13.9301 25.8724 16.9726L25.8491 21.1101Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.2342 20.0525H21.5133"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex mt-11 text-white text-base	font-medium">
          <div>
            <p>All Products</p>
            <p className="mt-2">
              0
              <span className="text-gray-200 ml-1 font-extralight">+0.00%</span>
            </p>
          </div>
          <div className="ml-14">
            <p>Active</p>
            <p className="mt-2">
              0
              <span className="text-gray-200 ml-1 font-extralight">+0.00%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-1 bg-white p-3 rounded-lg">
        <div className="flex justify-between">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="36"
              height="36"
              rx="8"
              fill="#FFCC91"
              fillOpacity="0.16"
            />
            <g clipPath="url(#clip0_1336_117)">
              <path
                d="M24.6667 26.3333C25.1269 26.3333 25.5 25.9602 25.5 25.5C25.5 25.0398 25.1269 24.6667 24.6667 24.6667C24.2064 24.6667 23.8333 25.0398 23.8333 25.5C23.8333 25.9602 24.2064 26.3333 24.6667 26.3333Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 26.3333C15.9602 26.3333 16.3333 25.9602 16.3333 25.5C16.3333 25.0398 15.9602 24.6667 15.5 24.6667C15.0398 24.6667 14.6667 25.0398 14.6667 25.5C14.6667 25.9602 15.0398 26.3333 15.5 26.3333Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.83334 8.83334H12.1667L14.4 19.9917C14.4762 20.3753 14.6849 20.72 14.9896 20.9653C15.2943 21.2105 15.6756 21.3408 16.0667 21.3333H24.1667C24.5578 21.3408 24.939 21.2105 25.2437 20.9653C25.5484 20.72 25.7571 20.3753 25.8333 19.9917L27.1667 13H13"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1336_117">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(8 8)"
                />
              </clipPath>
            </defs>
          </svg>
          <button className="text-gray-400 px-4 py-2 rounded flex items-center">
            This Week{" "}
            <span className="ml-1 font-semibold	">
              <IoIosArrowDown />
            </span>
          </button>
        </div>
        <div className="flex mt-10 text-gray-500">
          <div>
            <p className="mb-1 font-light text-[#dc2626]">
              Abandonent Cart
            </p>
            <span className="text-black font-medium text-base">
              0%<span className="text-[#16a34a] ml-1 font-light">+0.00%</span>
            </span>
          </div>
          <div className="ml-28">
            <p className="mb-1 font-light">Customers</p>
            <p className="text-black font-medium text-base">0</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 row-span-4 col-start-5 row-start-2 bg-white p-5 rounded-lg">
        <p className="font-medium	text-base">Recent Orders</p>
        <div className="flex flex-col items-center mt-32">
          <svg
            width="141"
            height="140"
            viewBox="0 0 141 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="0.5"
              width="139"
              height="139"
              rx="69.5"
              fill="#F4F5FA"
            />
            <rect
              x="1"
              y="0.5"
              width="139"
              height="139"
              rx="69.5"
              stroke="#E1E2E9"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M92.7832 80.7868L90.8609 65.3002C89.6899 59.7741 86.3757 57.5 83.2161 57.5H57.8293C54.6255 57.5 51.2009 59.6149 50.2066 65.3002L48.2623 80.7868C46.6714 92.1574 52.5265 95 60.1713 95H80.8962C88.5189 95 94.1972 90.8839 92.7832 80.7868ZM63.2425 70.3714C62.0222 70.3714 61.033 69.3533 61.033 68.0973C61.033 66.8414 62.0222 65.8232 63.2425 65.8232C64.4627 65.8232 65.452 66.8414 65.452 68.0973C65.452 69.3533 64.4627 70.3714 63.2425 70.3714ZM75.5051 68.0973C75.5051 69.3533 76.4943 70.3714 77.7145 70.3714C78.9348 70.3714 79.924 69.3533 79.924 68.0973C79.924 66.8414 78.9348 65.8232 77.7145 65.8232C76.4943 65.8232 75.5051 66.8414 75.5051 68.0973Z"
              fill="#BEC0CA"
            />
            <path
              opacity="0.4"
              d="M82.9347 56.9358C82.9425 57.1297 82.9053 57.3228 82.8258 57.5H79.233C79.1634 57.3199 79.1266 57.1288 79.1242 56.9358C79.1242 52.1421 75.2247 48.256 70.4144 48.256C65.6041 48.256 61.7046 52.1421 61.7046 56.9358C61.7376 57.1224 61.7376 57.3134 61.7046 57.5H58.0247C57.9918 57.3134 57.9918 57.1224 58.0247 56.9358C58.3043 50.2648 63.8125 45 70.5124 45C77.2122 45 82.7204 50.2648 83 56.9358H82.9347Z"
              fill="#BEC0CA"
            />
          </svg>
          <h1 className="font-medium text-xl mt-8">No Orders Yet?</h1>
          <p className="mt-4 text-center text-[#8B8D97]">
            Add products to your store and start <br />
            selling to see orders here.
          </p>
          <button className="flex bg-[#D23565] p-2 rounded-2xl mt-10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6.7C17.07 7.046 17.826 8.001 17.917 9.122"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-3 text-white">New Product</span>
          </button>
        </div>
      </div>
      <div className="col-span-4 row-span-2 bg-white p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-base font-medium">
            <p>Summary</p>
            <button className="ml-5 flex items-center bg-[#fceff4] px-3 py-1 rounded-xl text-[#D23565]">
              Sales
              <IoIosArrowDown className="ml-1" />
            </button>
          </div>
          <div className="flex items-center">
            <p className="mr-3">last 7 days</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex flex-col font-extralight text-xs text-[#A6A8B1] ml-3">
            <p className="py-4">100k</p>
            <p className="py-4">80k</p>
            <p className="py-4">60k</p>
            <p className="py-4">40k</p>
            <p className="py-4">20k</p>
          </div>
          <div className="flex justify-between ml-3">
            <div className="mx-8">
              <svg
                width="14"
                height="241"
                viewBox="0 0 14 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.357178"
                  width="13"
                  height="241"
                  rx="6.5"
                  fill="#EEF0FA"
                />
              </svg>
              <span className="font-extralight text-xs text-[#A6A8B1]">
                Sept 10
              </span>
            </div>
            <div className="mx-8">
              <svg
                width="14"
                height="241"
                viewBox="0 0 14 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.357178"
                  width="13"
                  height="241"
                  rx="6.5"
                  fill="#EEF0FA"
                />
              </svg>
              <span className="font-extralight text-xs text-[#A6A8B1]">
                Sept 11
              </span>
            </div>
            <div className="mx-8">
              <svg
                width="14"
                height="241"
                viewBox="0 0 14 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.357178"
                  width="13"
                  height="241"
                  rx="6.5"
                  fill="#EEF0FA"
                />
              </svg>
              <span className="font-extralight text-xs text-[#A6A8B1]">
                Sept 12
              </span>
            </div>
            <div className="mx-8">
              <svg
                width="14"
                height="241"
                viewBox="0 0 14 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.357178"
                  width="13"
                  height="241"
                  rx="6.5"
                  fill="#EEF0FA"
                />
              </svg>
              <span className="font-extralight text-xs text-[#A6A8B1]">
                Sept 13
              </span>
            </div>
            <div className="mx-8">
              <svg
                width="14"
                height="241"
                viewBox="0 0 14 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.357178"
                  width="13"
                  height="241"
                  rx="6.5"
                  fill="#EEF0FA"
                />
              </svg>
              <span className="font-extralight text-xs text-[#A6A8B1]">
                Sept 14
              </span>
            </div>
            <div className="mx-8">
              <svg
                width="14"
                height="241"
                viewBox="0 0 14 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.357178"
                  width="13"
                  height="241"
                  rx="6.5"
                  fill="#EEF0FA"
                />
              </svg>
              <span className="font-extralight text-xs text-[#A6A8B1]">
                Sept 15
              </span>
            </div>
            <div className="mx-8">
              <svg
                width="14"
                height="241"
                viewBox="0 0 14 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.357178"
                  width="13"
                  height="241"
                  rx="6.5"
                  fill="#EEF0FA"
                />
              </svg>
              <span className="font-extralight text-xs text-[#A6A8B1]">
                Sept 16
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
