const progressTime=10;
export const dataToday = {
    labels: ["12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00"],
    datasets: [
      {
        data: [10 * progressTime, 20 * progressTime, 15 * progressTime, 40 * progressTime, 50 * progressTime, 45 * progressTime,
        40 * progressTime, 30 * progressTime, 50 * progressTime, 30 * progressTime, 20 * progressTime, 50 * progressTime],
        //color: (opacity = 1) => 'blue',
       // color: (opacity = 1) => '#fd6564', // optional
        strokeWidth: 2 // optional
      }
    ],
   // legend: ["Voltage"] // optional
  };