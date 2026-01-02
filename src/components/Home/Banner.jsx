import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center py-10">
      
      {/* Text Content */}
      <div className="flex-1 space-y-4 p-3 sm:text-left text-center">
        <h1 className={`${fontBangla.className}text-4xl md:text-5xl font-bold leading-tight`}>
          আপনার শিশুকে দিন একটি  
          <span className="text-primary"> উজ্জ্বল ভবিষ্যৎ</span>
        </h1>

        <p className="text-gray-600 md:text-xl text-base">
          মানসম্মত ও নিরাপদ খেলনার মাধ্যমে শিশুর শেখা, খেলা এবং সৃজনশীলতা বাড়ান।
        </p>

        <p className="text-base md:text-lg text-gray-500">
             Enjoy up to 15% discount on all toys 🎉
        </p>

         <button className=" btn btn-primary btn-outline">
           Explore Products
         </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <Image
          alt="Hero Kidz Banner Image"
          src="/assets/hero.png"
          width={500}
          height={400}
          priority
        />
      </div>
    </div>
    );
};

export default Banner;