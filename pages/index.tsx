import React from "react";
import { Heroes } from "@/lib/type";
import { NextPage } from "next";
import { Home } from "@/component/home";

interface attractions {
  id: number;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  img: string;
}
const getData = async () => {
  const res = await fetch("https://api.opendota.com/api/heroStats");
  const data: Heroes[] = await res.json();
  return data;// ใช้เพื่อเรียกข้อมูลจาก API แล้วส่งไปให้ Page

}// ใช้เพื่อเรียกข้อมูลจาก API แล้วส่งไปให้ Page

type homepageProps = {
  heroes: Heroes[];
}

const HomePage: NextPage<homepageProps> = (props) => <Home heroes={props.heroes} />


export const getServerSideProps = async () => {
  const data = await getData();
  return {
    props: { heroes: data }, // จะส่ง props ชื่อ heroes ไปให้ Page
  }
}// ใช้เพื่อเรียกข้อมูลจาก API แล้วส่งไปให้ Page

export default HomePage;

