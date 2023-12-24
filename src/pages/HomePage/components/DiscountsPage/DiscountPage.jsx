import React, { useRef, useState } from "react";
// import cls from "./style.module.css"
import "./style.css"

// Images
import defaultImage from "../../../../assets/images/default-img.jpg";
import russianFlag from "../../../../assets/images/r-flag.png";
import engFlag from "../../../../assets/images/eng-fla.jpg";
import uzbFlag from "../../../../assets/images/uzb-flag.png";

// Translation
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";

export default function DiscountPage() {
  const uploadFileRef = useRef();

  // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)  we use it for selects url(https://blog.openreplay.com/multilingual-sites-in-react/#:~:text=The%20language%20can%20be%20changed,js%20file.&text=import%20React%2C%20%7BuseState%7D%20from,language)%3B%20%2F%2F%20i18n.)
  
  const {t} = useTranslation()
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        // setSelectedLanguage(lang);
        localStorage.setItem("lang", lang);
  }

  return (
    <div className="w-full h-full bg-white  rounded-lg">
      <div className="p-4 border-b border-[#d3d3d3]">
        <h2 className="font-semibold">{t("general-settings")}</h2>
      </div>

      <div className="px-4 py-1 border-b border-[#d3d3d3]">
        <div className="flex gap-4">
          <div onClick={()=> {
            changeLanguage("ru")
          }} className="language__type relative flex items-center gap-2 py-4 cursor-pointer">
            <img src={russianFlag} className="w-[30px] h-[30px] rounded-full" />
            <h3>{t("lang.rus")}</h3>
          </div>
          <div onClick={()=> {
            changeLanguage("en")
          }} className="language__type relative flex items-center gap-2 py-4 cursor-pointer">
            <img src={engFlag} className="w-[30px] h-[30px] rounded-full" />
            <h3>{t("lang.eng")}</h3>
          </div>
          <div onClick={()=> {
            changeLanguage("uz")
          }} className="language__type relative flex items-center gap-2 py-4 cursor-pointer">
            <img src={uzbFlag} className="w-[30px] h-[30px] rounded-full" />
            <h3>{t("lang.uzb")}</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start gap-14 p-4">
        <div className="w-1/4 flex flex-col items-centr gap-4 px-4">
          <img src={defaultImage} onClick={()=> {
            uploadFileRef.current.click()
          }} className="w-full h-[300px] rounded-lg cursor-pointer" />
          <h3 className="text-[1.2rem] font-semibold text-center text-blue-700">
            {t("product-image")}
          </h3>
          <input accept="image/png" type={uploadFileRef} className="hidden" />
        </div>
        <div className="w-3/4">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label for="title" className="font-semibold text-lg">
                {t("name")}
              </label>
              <input
                type="text"
                id="title"
                className="text-lg border-2 border-[#d3d3d3] px-4 py-2 rounded-lg"
              />
            </div>

            <div className="flex justify-center gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label for="data" className="font-semibold text-lg">
                  {t("date")}
                </label>
                <input
                  type="date"
                  id="data"
                  className="text-lg border-2 border-[#d3d3d3] px-4 py-2 rounded-lg"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label for="data" className="font-semibold text-lg">
                {t("date")}
                </label>
                <input
                  type="date"
                  id="data"
                  className="text-lg border-2 border-[#d3d3d3] px-4 py-2 rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label for="description" className="text-lg font-semibold">
              {t("description")}
              </label>
              <textarea
                id="description"
                className="h-[250px] text-lg px-4 py-2 border-2 border-[#d3d3d3] rounded-lg"
              />
            </div>

            <div className="">
              <button
                className="self-start px-8 py-4 bg-slate-100 rounded-lg hover:bg-slate-400"
                onClick={() => {
                  uploadFileRef.current.click();
                }}
              >
                {t("upload-file")}
              </button>
              <input type="file" ref={uploadFileRef} className="hidden" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
