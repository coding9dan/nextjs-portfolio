import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next/types";
import Arrow from "../../public/arrow.svg";
import React from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Code in Life | Game",
  description: "JavaScript Game page",
};

const Game = () => {
  return (
    <>
      <Navbar page="game" />

      <section className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
        <div className="h-[90vh] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <div
            className="h-full w-full px-10 py-6 bg-cover bg-center bg-no-repeat rounded-2xl"
            style={{ backgroundImage: `url('/game.png')` }}
          >
            <div className="flex justify-between">
              <div>
                <h2 className="font-medium text-lg text-white">
                  JavaScript game
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-300">
                  Trying to get remove of all the bugs so you can save the
                  carrots
                </p>
              </div>
              <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
                <Link href="https://jsgame.happyforever.com" target="_blank">
                  <Arrow className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Game;
