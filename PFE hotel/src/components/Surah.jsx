import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
export const Surah = ({ surah }) => {
  return (
    <Link to={`/surah/${surah.number}`}>
      <div className=" text-white mx-8 rounded border  hover:border-[#219ebc]  p-3">
        <div key={surah.number} className="">
          <div className="grid grid-cols-2 mb-1">
            <h1 className="font-bold text-2xl hover:underline">{surah.name}</h1>
            <p className="">{surah.number} </p>
          </div>
          <div className="grid grid-cols-2">
            <p>{surah.englishName}</p>
            <p> {surah.numberOfAyahs} آيات</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Surah;
