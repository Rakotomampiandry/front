import { BsKey } from "react-icons/bs"; 
import { FaRegUser } from "react-icons/fa"; 
import { CiUser } from "react-icons/ci"; 
import { GiHospitalCross } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import TextField from '@mui/material/TextField';
import React from "react";

export default function Login() {
    return (
        <div className="bg-slate-50 w-[1315px] h-[671px]">
            <div className="py-32 px-[640px]">
                <GiHospitalCross className="text-green-500 w-10 h-10" />
            </div>
            <div className="fixed inset-0 flex justify-center items-center text-emerald-950">
                <div className="w-[450px] h-[350px] text-center bg-white shadow-xl px-20 absolute rounded-xl" >
                    <h1 className=" text-[28px] font-semibold mt-8">CHU Tambohobe</h1>
                    <p className="text-[14px] font-serif">Access et systèm laboratoire</p>
                    <table>
                        <tr>
                            <th><FaRegUser className="text-[20px] mt-7 mr-2"/></th>
                            <th><TextField id="outlined-basic" label="Email" variant="standard" className="w-[250px] my-4" /></th>
                        </tr>
                        <tr>
                            <th><BsKey className="text-[20px] mt-7 mr-2"/></th>
                            <th><TextField id="standard-basic" label="Mot de passe" variant="standard" className="w-[250px]" /></th>
                        </tr>
                    </table>
                    <button className="bg-green-500 hover:bg-green-700 transition duration-300 text-white font-medium w-[275px] py-2 px-4 rounded-2xl my-6">Valider</button>
                </div>
            </div>
        </div>
    )
}