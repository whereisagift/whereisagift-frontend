"use client";
import { TypographyH1, TypographyH4 } from "@/ui";

import gift from "assets/gift.png";

const Home = () => {
  return (
    <div className="py-[10vh] px-[4vw]">
      <div className="flex not-md:flex-col justify-center items-center">
        <div className="flex flex-col justify-center not-md:w-[70vw] md:w-[50vw] lg:w-[20vw]">
          <TypographyH1 className="text-left">
            Создайте свой список желаний
          </TypographyH1>
          <TypographyH4>
            Дарить подарки легко и приятно, когда вы точно знаете, что нужно.
            Создайте и поделитесь своим вишлистом с друзьями и близкими!
          </TypographyH4>
        </div>
        <img
          alt="gift"
          src={gift.src}
          className="w-[40vh] h-[40vh] lg:w-[50vh] lg:h-[50vh] object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
