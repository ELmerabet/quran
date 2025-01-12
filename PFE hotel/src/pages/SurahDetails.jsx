import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurahDetailsData } from "../Store/action";
import { useParams } from "react-router";

const SurahDetails = () =>{
  const dispatch = useDispatch();
  const { surahNumber } = useParams();
  const surahDetails = useSelector((state) => state.surahDetails);
  useEffect(() => {
    const fetchSurahDetails = async() => {
      try{
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
        const data = await response.json();
        dispatch(getSurahDetailsData(data.data));
      } catch(e){
        console.error("Error fetching", e);
      }
    }
    fetchSurahDetails();
}, [dispatch, surahNumber]);
if (!surahDetails) return <p>Loading ...</p>
return (
  <div className="bg-slate-800 text-white text-center ">
    <h1 className="text-3xl font-bold pt-9">
      {surahDetails.name} ({surahDetails.englishName})
    </h1>
    <p>{surahDetails.englishNameTranslation}</p>
    <div className="mt-10 ">
      {surahDetails.ayahs.map((ayah) => (
        <div className="my-6 " key={ayah.numberInSurah}>
          <p className="font-alqalam text-2xl  ">
            {ayah.text}
            <span className="p-2 px-3 rounded-[50%] border border-gray-500 items-center justify-center text-sm font-bold text-gray-600">
              {ayah.numberInSurah}{" "}
            </span>
          </p>
          <hr className="mt-2 mx-28"/>
        </div>
      ))}
    </div>
  </div>
);
}
export default SurahDetails;