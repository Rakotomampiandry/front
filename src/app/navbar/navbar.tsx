import { MdExitToApp } from "react-icons/md"; 
import { GiHistogram } from "react-icons/gi"; 
import { FaUserInjured } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { MdSick } from "react-icons/md";
import { Tab, Tabs, Tooltip, styled, tooltipClasses } from "@mui/material";
import Link from "next/link";
import React from "react";
import { AiFillCar, AiFillHome } from "react-icons/ai";
import { FaPowerOff, FaProductHunt, FaUser } from "react-icons/fa";

export default function navbar() {

    return (
        <div className="bg-slate-50 w-[1315px] h-[690px]">
            <div className="w-[80px] h-full bg-white drop-shadow-lg rounded">

                <img src="/Images/laboratoryy_32.png" className="pl-5 pt-4" />
                <p className="text-[12px] pl-[6px] pt-2 font-bold text-green-900">Laboratoire</p>
                <hr className="w-14 ml-[10px] mt-2" />

                <div className="text-center mt-6">
                    <Link href="">
                        <Tooltip title="Hospitalisé / Externe" placement="right" arrow>
                            <button><FaUserInjured className="text-[25px]" /></button>
                            <p className="text-[10px] font-semibold">Patient</p>
                        </Tooltip>
                    </Link>
                </div>

                <div className="text-center mt-6">
                    <Tooltip title="Prélèvement / Echantillont" placement="right" arrow>
                        <Link href="">
                            <button><GiTestTubes className="text-[25px]" /></button>
                            <p className="text-[10px] font-semibold">Test</p>
                        </Link>
                    </Tooltip>
                </div>

                <div className="text-center mt-6">
                    <Link href="">
                        <Tooltip title="Ressource / Matériel" placement="right" arrow>
                            <button><MdMedicalServices className="text-[25px]" /></button>
                            <p className="text-[10px] font-semibold">Materiel</p>
                        </Tooltip>
                    </Link>
                </div>

                <div className="text-center mt-6">
                    <Tooltip title="Technichien Laboratoire" placement="right" arrow>
                        <Link href="">
                            <button><FaUserMd className="text-[25px]" /></button>
                            <p className="text-[10px] font-semibold">Personnel</p>
                        </Link>
                    </Tooltip>
                </div>

                <div className="text-center mt-6 border-l-4 border-gray-950">
                    <Tooltip title="Tableau de bord" placement="right" arrow>
                        <Link href="">
                            <button><GiHistogram className="text-[25px]"/></button>
                            <p className="text-[10px] font-semibold">Statistique</p>
                        </Link>
                    </Tooltip>
                </div>

                <hr className="w-14 ml-[10px] mt-44" />

                <div className="text-center mt-4">
                    <Tooltip title="se deconnecter" placement="right" arrow>
                        <Link href="">
                            <button><MdExitToApp className="text-[25px] text-red-600"/></button>
                            <p className="text-[10px] font-semibold text-red-600">Quitter</p>
                        </Link>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}