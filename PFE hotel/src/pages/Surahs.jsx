import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Store/action";
import Surah from "../components/Surah";

const Surahs = () => {
  const dispatch = useDispatch();
  const quranData = useSelector((state) => state.surah);

  useEffect(() => {
    const getDataFromAPI = async () => {
      const response = await fetch("https://api.alquran.cloud/v1/surah");
      const data = await response.json();
      dispatch(getData(data)); // Dispatch action creator
    };
    getDataFromAPI();
  }, [dispatch]);

  return (
    <div className=" bg-slate-800 ">
      <h1 className="text-3xl font-bold text-white text-center  ">
        القرآن الكريم
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-12 gap-7 ">
        {quranData?.data?.length > 0 ? (
          quranData.data.map((q) => <Surah surah={q} key={q.number} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Surahs;
