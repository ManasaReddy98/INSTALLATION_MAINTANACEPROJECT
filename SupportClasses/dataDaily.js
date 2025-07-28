const progressTime=10;
export const dataDaily = {
    labels: ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "2:00", "3:00", "4:00", "5:00", "6:00"],
    datasets: [
      {
        data: [10 * progressTime, 20 * progressTime, 15 * progressTime, 40 * progressTime, 50 * progressTime, 45 * progressTime,
        40 * progressTime, 30 * progressTime, 50 * progressTime, 30 * progressTime, 20 * progressTime, 50 * progressTime],
        //color: (opacity = 1) => 'blue',
       // color: (opacity = 1) => '#25428f', // optional
        strokeWidth: 2 // optional
      }
    ],
   // legend: ["Voltage"] // optional
  };