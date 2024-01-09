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
                <li><a href="#Popular">پرطرفدار</a></li>
                <li><a href="#ice-coffe">قهوه سرد</a></li>
                <li><a href="#shakes">شیک</a></li>
                <li>نوشیدنی</li>
                <li>چای</li>
                <li>شیرینی</li>
                <li>کوکی ها</li>
            </ul>
        </section>
    )
}
