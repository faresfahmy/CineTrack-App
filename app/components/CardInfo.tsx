import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import MotionItem from "./default/MotionItem";
import Link from "next/link";
const CardInfo = ({
  desc,
  title,
  textBtn,
  btnClasses,
  id,
  className
}: {
  desc: string;
  title: string;
  textBtn?: string;
  btnClasses?: string;
  id?:number;
  className?:string


}) => {
  return (
    <MotionItem
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className={` w-full flex flex-col items-start absolute left-20 top-20 max-w-md z-100 hero-info h-full `}
    >

      <h1 className=" text-rose-400 text-2xl font-semibold ">{title}</h1>
      <p className=" text-base  text-gray-200 line-clamp-3">{desc}</p>
      <Link href={id?`/movies/${id}`:'/'}>
      <Button className={`rounded-full mt-5 bg-rose-500 ${btnClasses || " text-gray-50"}`}>{textBtn || "Details"}</Button>
      </Link>
    </MotionItem>
  );
};

export default CardInfo;
