import React from 'react'
import { useTranslation } from 'react-i18next'

//Styles
import cls from "./style.module.css" 

// React Router Dom
import { Link } from 'react-router-dom'



export default function SideBar() {

    const {t} = useTranslation()

    return (
    <div className='w-[20%] h-screen fixed left-0 bg-white'>
        <div className='w-full h-full flex flex-col justify-start items-start gap-4 py-8 px-4'>
            <Link to="/discounts" className={cls.link}>{t("side-bar.stock")}</Link>
            <Link to="/reviews" className={cls.link}>{t("side-bar.reviews")}</Link>
            <Link to="/banners" className={cls.link}>{t("side-bar.banners")}</Link>
            <Link to="/pop__up" className={cls.link}>{t("side-bar.pop-up")}</Link>
            <Link to="/notification" className={cls.link}>{t("side-bar.notifications")}</Link>
            <Link to="/reasons__reject" className={cls.link}>{t("side-bar.rejects")}</Link>
            <Link to="/reasons__finish" className={cls.link}>{t("side-bar.terminations")}</Link>
        </div>
    </div>
  )
}
