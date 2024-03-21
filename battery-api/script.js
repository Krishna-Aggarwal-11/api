const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

const battery = ()=>{
  if("getBattery" in navigator){
    navigator.getBattery().then(battery=>{

      function updateAllBatteryDetails(){
        updateLevelChange();
        updateChargingInfo();
        updateChargingTimeInfo();
        updateDischargingInfo();
      }
      updateAllBatteryDetails();
      battery.addEventListener("chargingchange" , ()=>{
        updateChargingInfo();

      });

      function updateChargingInfo(){
        const isCharging = battery.charging ? "yes" : "no" ;
        batteryCharging.innerHTML = isCharging ;
      }

      // cahrging time 
      battery.addEventListener("chargingtimechange" , ()=>{
        updateChargingTimeInfo();
      });

      function updateChargingTimeInfo(){
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }
      // discharging time
      battery.addEventListener("dischargingtimechange" , ()=>{
        updateDischargingInfo();
      });

      function updateDischargingInfo(){
      batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds"
      }

      //Battery level change 
      battery.addEventListener("levelchange", ()=>{
        updateLevelChange()
      })

      function updateLevelChange(){
        const level = battery.level * 100  + "%"
        batteryLevel.innerHTML = level;
      }


    })
  }
}




battery();