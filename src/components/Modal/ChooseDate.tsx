import React from "react";
import {
  LocalizationProvider,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, createTheme } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fd5f16",
    },
  },
});
const nineAM = dayjs().set("hour", 9).startOf("hour");
const sixPM = dayjs().set("hour", 18).startOf("hour");
const nextSunday = dayjs().endOf("week").startOf("day");

const isWeekend = (date: Dayjs) => {
  const day = date.day();

  return day === 0 || day === 7;
};
const ChooseDate = ({ data, handleChange }) => {
  const handleDateChange = (newDate) => {
    handleChange(newDate);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <StaticDateTimePicker
            views={["day", "hours"]}
            defaultValue={nextSunday}
            shouldDisableDate={isWeekend}
            minTime={nineAM}
            maxTime={sixPM}
            value={data.date}
            orientation="landscape"
            onChange={handleDateChange}
          />
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
};

export default ChooseDate;
