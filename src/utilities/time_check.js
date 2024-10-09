const parseMeetingString = (meetingStr) => {
    if (!meetingStr || typeof meetingStr !== 'string') {
      return { days: [], time: null }; 
    }
    
    const [days, time] = meetingStr.split(' ');
    const dayPattern = /M|Tu|W|Th|F/g; 
    const matchedDays = days ? days.match(dayPattern) : []; 
    return { days: matchedDays || [], time: time || null };
  };
  
const parseTime = (timeStr) => {
    if (!timeStr || typeof timeStr !== 'string') {
      return null; 
    }
    
    const [hours, minutes] = timeStr.split(':').map(Number);
    
    return (hours * 60 + minutes) || null; 
};
  
  
const daysOverlap = (days1, days2) => {
    if (!days1.length || !days2.length) {
      return false; 
    }
    
    return days1.some(day => days2.includes(day));
};
  

const timesOverlap = (time1, time2) => {
    if (!time1 || !time2) {
      return false; 
    }
    
    const [start1, end1] = time1.split('-').map(parseTime);
    const [start2, end2] = time2.split('-').map(parseTime);
    if (start1 === null || end1 === null || start2 === null || end2 === null) {
      return false;
    }
  
    return start1 < end2 && start2 < end1;
};
  
 
export const hasConflict = (course1, course2) => {
    if (!course2) {
        return false; 
      }
    const parsedCourse1 = parseMeetingString(course1.meets);
    const parsedCourse2 = parseMeetingString(course2.meets);
    
    return (
      daysOverlap(parsedCourse1.days, parsedCourse2.days) &&
      timesOverlap(parsedCourse1.time, parsedCourse2.time)
    );
};
  
