// Navbar.js
const Navbar = () => {
    return (
      <nav className=" p-4 border-b-2 font-primary">
        <div className="container mx-auto flex justify-between items-center">
          {/* Dashboard Heading */}
          <h1 className="text-black text-2xl font-medium">Dashboard</h1>
          {/* Notifications and Account Info */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
              <svg width="73" height="65" viewBox="0 0 73 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="11.3027" y="18" width="30" height="30" rx="15" fill="#D23565" fillOpacity="0.1"/>
                <path d="M31.8078 34.8675L31.0578 33.6225C30.9003 33.345 30.7578 32.82 30.7578 32.5125V30.615C30.7578 28.8525 29.7228 27.33 28.2303 26.6175C27.8403 25.9275 27.1203 25.5 26.2953 25.5C25.4778 25.5 24.7428 25.9425 24.3528 26.64C22.8903 27.3675 21.8778 28.875 21.8778 30.615V32.5125C21.8778 32.82 21.7353 33.345 21.5778 33.615L20.8203 34.8675C20.5203 35.37 20.4528 35.925 20.6403 36.435C20.8203 36.9375 21.2478 37.3275 21.8028 37.515C23.2578 38.01 24.7878 38.25 26.3178 38.25C27.8478 38.25 29.3778 38.01 30.8328 37.5225C31.3578 37.35 31.7628 36.9525 31.9578 36.435C32.1528 35.9175 32.1003 35.3475 31.8078 34.8675Z" fill="#D23565"/>
                <path d="M28.4252 39.0075C28.1102 39.8775 27.2777 40.5 26.3027 40.5C25.7102 40.5 25.1252 40.26 24.7127 39.8325C24.4727 39.6075 24.2927 39.3075 24.1877 39C24.2852 39.015 24.3827 39.0225 24.4877 39.0375C24.6602 39.06 24.8402 39.0825 25.0202 39.0975C25.4477 39.135 25.8827 39.1575 26.3177 39.1575C26.7452 39.1575 27.1727 39.135 27.5927 39.0975C27.7502 39.0825 27.9077 39.075 28.0577 39.0525C28.1777 39.0375 28.2977 39.0225 28.4252 39.0075Z" fill="#D23565"/>
                <g filter="url(#filter0_d_749_14)">
                <rect x="30.9027" y="12.2" width="12" height="12" rx="6" fill="#D23565"/>
                <path d="M37.0326 20.2V16.876L36.3426 17.038V16.45L37.3566 16H37.8306V20.2H37.0326Z" fill="white"/>
                </g>
                <defs>
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="10"/>
                <feGaussianBlur stdDeviation="15"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.533333 0 0 0 0 0.2 0 0 0 0 1 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_749_14"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_749_14" result="shape"/>
                </defs>
              </svg>
              <div className="flex items-center space-x-4">              
              {/* Account Name */}
              <div className="flex flex-col">
                <span className="text-black font-normal">Anima Agrawal</span>
                <span className="text-gray-400 text-sm text-right">Company LLC</span>
              </div>
             {/* Profile Picture */}
             <svg  width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_749_29)">
               <path d="M19.7996 14.3532L17.7373 17.9256L15.675 21.4981L13.6182 25.0651L11.5559 21.4981L13.6182 17.9256L15.6805 14.3586L12.5519 8.93494H16.671L17.7427 10.7861L19.7996 14.3532ZM8.42729 8.93494H4.30273L9.49362 17.9256L11.5559 14.3586L8.42729 8.93494ZM25.9377 10.7861L24.866 8.93494H20.7468L23.8754 14.3532L21.8132 17.9256L19.7509 21.4981L21.8132 25.0651L23.8754 21.4981L25.9377 17.9256L28 14.3586L25.9377 10.7861Z" fill="#7F1F67"/>
               </g>
               <rect x="0.57901" y="1.21497" width="31.6973" height="32.1302" rx="8" fill="#E01461" fillOpacity="0.39"/>
               <defs>
               <clipPath id="clip0_749_29">
               <rect width="23.6973" height="16.1302" fill="white" transform="translate(4.30273 8.93494)"/>
               </clipPath>
               </defs>
            </svg>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  