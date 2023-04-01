const styles = {
    boxWidth: "xl:max-w-[1280px] w-full font-bold text-gray-800  text-2xl",
    boxWidth2: "xl:max-w-[1440px] w-full ml-4",

  
    heading1: "font-serif-sans font-bold xs:text-[35px] text-gray-800 flex justify-center items-center text-center",
    heading2: "font-serif-sans font-bold xs:text-[35px] text-gray-800 flex justify-center items-center text-center -mb-10 py-20",
    
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: " flex justify-center items-center",
    flexStart: "justify-center items-start",
    flexCenter2: "flex items-center",

   
    

    paddingB: "sm:px-20",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;