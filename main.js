const getSleepHours = day => {
    if (day === 'monday')
    return 8;
    };
    
    const getActualSleepHours = () => 
      getSleepHours('monday')
      +  getSleepHours('tuesday')
      +  getSleepHours('wednesday')
      +  getSleepHours('thursday')
      +  getSleepHours('friday')
      +  getSleepHours('saturday')
      +  getSleepHours('sunday');
      return getActualSleepHours
    
    
    
    console.log(getSleepHours('monday'));