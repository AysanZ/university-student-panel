import React from 'react';
import { MdEmail, MdLanguage, MdLocationOn } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import {
    BsFillPersonFill,
    BsFillTelephoneFill,
    BsCalendarDateFill,
  } from "react-icons/bs";

export const item = [
    {
        "icon" : <BsFillPersonFill size={25} />,
        "title" : "Name"
    },
    {
        "icon" : <FaBuilding size={25} />,
        "title" : "Faculty"
    },
    {
        "icon" : <BsFillTelephoneFill size={25} />,
        "title" : "Mobile"
    },
    {
        "icon" : <MdEmail size={25} />,
        "title" : "Email"
    },
    {
        "icon" : <BsFillPersonFill size={25} />,
        "title" : "Gender"
    },
    {
        "icon" : <BsCalendarDateFill size={25} />,
        "title" : "Date of Birth"
    },
    {
        "icon" : <MdLanguage size={25} />,
        "title" : "Language"
    },
    {
        "icon" : <MdLocationOn size={25} />,
        "title" : "Address"
    }
]

export const data =
   { src : "./avatar2.jpg",
    Name : "Bruce Willis",
    Faculty: "Computer Science",
    Mobile: "+91 89657 48512",
    Email: "daisy@gmail.com",
    Gender: "Male",
    DOB: "22 Apr 1995",
    Language: "English, French, Bangla",
    Address: "480, Estern Avenue, New York"
    }
 
   

