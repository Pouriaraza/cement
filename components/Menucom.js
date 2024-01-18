"use client"
import { useState, useEffect } from 'react';
import React from 'react'

export default function Menucom() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // اگر اسکرول به 400 رسید، ویژگی position را تغییر دهید
            if (window.scrollY > 150) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        // گوش دادن به رویداد اسکرول
        window.addEventListener('scroll', handleScroll);

        // حذف گوش دادن به رویداد اسکرول هنگام از بین می‌رود
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // برای اطمینان از اجرای useEffect تنها یک بار در زندگی کامپوننت

    return (
        <section style={{ position: isFixed ? 'fixed' : 'static', top: '0', background: "#fff", width: "100%" }}>
            <ul>
                <li><a href='#Coffee'>قهوه</a></li>
                <li><a href='#Hotdrink'>نوشیدنی های گرم</a></li>
                <li><a href='#Tea'>چای و دمنوش</a></li>
                <li><a href="#Icecoffe">قهوه سرد</a></li>
                <li><a href='#Mactels'>ماکتل ها</a></li>
                <li><a href='#Icecream'>بستنی ها</a></li>
                <li><a href="#shakes">میلک شیک</a></li>
                <li><a href='#Fruitwater'>آب میوه طبیعی</a></li>
                <li><a href='#Breakfast'>صبحانه</a></li>
                <li><a href='#food'>غذا</a></li>
                <li><a href='#drinks'>نوشیدنی</a></li>
                <li><a href='#Smoke'>قلیان ها</a></li>
                <li><a href='#Vipsmoke'>قلیان های vip</a></li>
            </ul>
        </section>
    )
}
