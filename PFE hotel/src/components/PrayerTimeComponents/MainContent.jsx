import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Prayer from "./Prayer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";

import "moment/dist/locale/ar-dz";
moment.locale("ar");
export default function MainContent() {
  // STATES
  const [nextPrayerIndex, setNextPrayerIndex] = useState(2);
  const [timings, setTimings] = useState({
    Fajr: "04:20",
    Dhuhr: "11:50",
    Asr: "15:18",
    Sunset: "18:03",
    Isha: "19:33",
  });

  const [remainingTime, setRemainingTime] = useState("");

  const [selectedCity, setSelectedCity] = useState({
    displayName: "طنجة",
    apiName: "Tanger",
  });

  const [today, setToday] = useState("");

  const avilableCities = [
    {
      displayName: "طنجة",
      apiName: "Tanger",
    },
    {
      displayName: "الرباط",
      apiName: "Rabat",
    },
    {
      displayName: "وجدة",
      apiName: "wajda",
    },
  ];

  const prayersArray = [
    { key: "Fajr", displayName: "الفجر" },
    { key: "Dhuhr", displayName: "الظهر" },
    { key: "Asr", displayName: "العصر" },
    { key: "Sunset", displayName: "المغرب" },
    { key: "Isha", displayName: "العشاء" },
  ];
  const getTimings = async () => {
    const response = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?country=MA&city=${selectedCity.apiName}`
    );
    setTimings(response.data.data.timings);
  };
  useEffect(() => {
    getTimings();
  }, [selectedCity]);

  useEffect(() => {
    let interval = setInterval(() => {
      setupCountdownTimer();
    }, 1000);

    const t = moment();
    setToday(t.format("MMM Do YYYY | h:mm"));

    return () => {
      clearInterval(interval);
    };
  }, [timings]);

  // const data = await axios.get(
  // 	"https://api.aladhan.com/v1/timingsByCity?country=SA&city=Riyadh"
  // );

  const setupCountdownTimer = () => {
    const momentNow = moment();

    let prayerIndex = 2;

    if (
      momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
    ) {
      prayerIndex = 1;
    } else if (
      momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
    ) {
      prayerIndex = 2;
    } else if (
      momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Sunset"], "hh:mm"))
    ) {
      prayerIndex = 3;
    } else if (
      momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
    ) {
      prayerIndex = 4;
    } else {
      prayerIndex = 0;
    }

    setNextPrayerIndex(prayerIndex);

    // now after knowing what the next prayer is, we can setup the countdown timer by getting the prayer's time
    const nextPrayerObject = prayersArray[prayerIndex];
    const nextPrayerTime = timings[nextPrayerObject.key];
    const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");

    let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

    if (remainingTime < 0) {
      const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
      const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
        moment("00:00:00", "hh:mm:ss")
      );

      const totalDiffernce = midnightDiff + fajrToMidnightDiff;

      remainingTime = totalDiffernce;
    }

    const durationRemainingTime = moment.duration(remainingTime);

    setRemainingTime(
      `${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}`
    );
  };
  const handleCityChange = (event) => {
    const cityObject = avilableCities.find((city) => {
      return city.apiName == event.target.value;
    });
    console.log("the new value is ", event.target.value);
    setSelectedCity(cityObject);
  };

  return (
    <div className="m-16">
      {/* TOP ROW */}
      <Grid container>
        <Grid xs={6}>
          <div>
            <h2>{today}</h2>
            <h1>{selectedCity.displayName}</h1>
          </div>
        </Grid>

        <Grid xs={6}>
          <div>
            <h2>متبقي حتى صلاة {prayersArray[nextPrayerIndex].displayName}</h2>
            <h1>{remainingTime}</h1>
          </div>
        </Grid>
      </Grid>
      {/*== TOP ROW ==*/}

      <Divider style={{ borderColor: "white", opacity: "0.1" }} />

      {/* PRAYERS CARDS */}
      <Stack
        direction="row"
        justifyContent={"space-around"}
        style={{ marginTop: "50px" }}
      >
        <Prayer
          name="الفجر"
          time={timings.Fajr}
          image="https://islam.ru/sites/default/files/img/obshestvo/2013/08/2islam_by_khaled_etman-d35n1ra.jpg"
        />
        <Prayer
          name="الظهر"
          time={timings.Dhuhr}
          image="https://stihi.ru/pics/2020/01/20/10074.jpg"
        />
        <Prayer
          name="العصر"
          time={timings.Asr}
          image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490289943.jpg?k=64634a0fbdb66cd5d6ddde2c8a69ae8ddccfd6d5d33aba46828035a2d706f062&o=&hp=1"
        />
        <Prayer
          name="المغرب"
          time={timings.Sunset}
          image="https://dynamic.tourtravelworld.com/package-images/photo-big/dir_18/524798/236152.jpg"
        />
        <Prayer
          name="العشاء"
          time={timings.Isha}
          image="https://upload.wikimedia.org/wikipedia/commons/f/fb/%D8%B5%D9%88%D8%B1%D8%A9_%D9%84%D9%8A%D9%84%D9%8A%D8%A9_%D9%84%D9%85%D8%B3%D8%AC%D8%AF_%D8%A7%D9%84%D8%B1%D9%81%D8%A7%D8%B9%D9%8A.jpg"
        />
      </Stack>
      {/*== PRAYERS CARDS ==*/}

      {/* SELECT CITY */}
      <Stack
        direction="row"
        justifyContent={"center"}
        style={{ marginTop: "40px" }}
      >
        <FormControl style={{ width: "20%" }}>
          <InputLabel id="demo-simple-select-label">
            <span style={{ color: "white" }}>المدينة</span>
          </InputLabel>
          <Select
            style={{ color: "white" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            onChange={handleCityChange}
          >
            {avilableCities.map((city) => {
              return (
                <MenuItem value={city.apiName} key={city.apiName}>
                  {city.displayName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Stack>
    </div>
  );
}
