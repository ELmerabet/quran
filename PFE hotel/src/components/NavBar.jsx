
import { MdMenuBook } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { FaBookQuran } from "react-icons/fa6";
import { GiPrayerBeads } from "react-icons/gi";
import { SiAudiobookshelf } from "react-icons/si";


import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className="bg-[#ffb703] text-white shadow-lg shadow-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="flex-shrink-0">
              <img
                src="./logo.png"
                alt=""
                className="w-16 h-16"
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center gap-1"
                >
                  <FaBookQuran className="inline-block mr-1" size={18} />
                  القرآن الكريم
                </Link>
                <Link
                  to="/Hadith"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center gap-1"
                >
                  <MdMenuBook className="inline-block mr-1" size={18} />
                  الحديث
                </Link>
                <Link
                  to="/SalatTime"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center gap-1"
                >
                  <IoTimeSharp className="inline-block mr-1" size={18} />
                  موعدالصلاة
                </Link>
                <Link
                  to="/Adkar"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center gap-1"
                >
                  <GiPrayerBeads className="inline-block mr-1" size={18} />
                  أذكار
                </Link>
                <Link
                  to="/QuranAudio"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center gap-1"
                >
                  <SiAudiobookshelf className="inline-block mr-1" size={18} />
                  القرآن صوت
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
