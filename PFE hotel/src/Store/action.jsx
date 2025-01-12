export const getSurah = "getSurah";
export const getSurahDetails = "getSurahDetails";


export const getData = (surah) => ({
  type: getSurah,
  payload: surah,
})
export const getSurahDetailsData = (surahDetails) => ({
  type: getSurahDetails,
  payload: surahDetails,
  })
