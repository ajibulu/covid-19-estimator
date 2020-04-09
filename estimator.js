const covid19ImpactEstimator = (data) => {
  const input = data;
  const twoPowerNine,hospitalbedsByRequestedTime,availableBeds,casesForICUByRequestedTime,casesForVentilatorsByRequestedTime;dollarsInFlight; 
    impact: {
      currentlyInfected: input,
      infectionsByRequestedTime: input,
    periodType: input,
    population: input,
    region: {
      avgAge: input,
      avgDailyIncomeInUSD: input,
      avgDailyIncomePopulation: input,
      name: input,
    };
    severeImpact: {
      currentlyInfected:  input,
      infectionsByRequestedTime: input,
    },
    reportedCases: input,
    timeToElapse:  input,
    totalHospitalBeds: input

    }
  
  
 //********************Computation of Estimate
 
 //challenge 1
 
 twoPowerNine=math.pow(2,9);
 impact.currentlyInfected=reportedCases*10;
 severeImpact.currentlyInfected=reportedCases*50;
 impact.infectionsByRequestedTime=impact.currentlyInfected*twoPowerNine;
 severeImpact.infectionsByRequestedTime=severeImpact.currentlyInfected*twoPowerNine;

 //Challenge 2
 severeCasesByRequestedTime=severeImpact.infectionsByRequestedTime*0.15;
 availableBeds=totalHospitalBeds*0.35;
 hospitalBedsByRequestedTime=availableBeds-severeCasesByRequestedTime;


 // Challenge 3
casesForICUByRequestedTime=severeImpact.infectionsByRequestedTime*0.05;
casesForVentilatorsByRequestedTime=severeImpact.infectionsByRequestedTime*0.02;
dollarsInFlight=severeImpact.infectionsByRequestedTime*0.65*1.5*30;


return {
  data: input,
  severeCasesByRequestedTime,
  hospitalbedsByRequestTime,
  severeImpact: {},
  impact: {},
  casesForICUByRequestedTime,
  casesForVentilatorsByRequestedTime,
  dollarsInFlight

}

};
export default covid19ImpactEstimator;
