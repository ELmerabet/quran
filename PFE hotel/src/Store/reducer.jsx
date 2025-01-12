import { getSurah, getSurahDetails } from "./action";

const initialState ={
  surah: { data:[] },
  surahDetails: null
}

const dataReducer = (state = initialState, action) =>{
  switch (action.type){
    case getSurah:
      return {
        ...state,
        surah: action.payload
      };
    case getSurahDetails:
      return{
        ...state,
        surahDetails: action.payload,
      }
    default:
      return state;
  }
}
export default dataReducer;