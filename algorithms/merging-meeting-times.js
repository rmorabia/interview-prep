// From InterviewCake

function mergeRanges(meetings) {

  meetings.sort((a, b) => a.startTime - b.startTime)

  const finalArray = []
  let currentEnd = meetings[0].endTime
  let currentStart = meetings[0].startTime

  if (meetings.length === 1) {
    return meetings
  }

  meetings.forEach(meeting => {
    if (meeting.startTime > currentEnd) {
      finalArray.push({
        startTime: currentStart,
        endTime: currentEnd
      })
      currentEnd = meeting.endTime
      currentStart = meeting.startTime
    } else if (meeting.endTime > currentEnd) {
      currentEnd = meeting.endTime
    } else if (meeting.startTime < currentStart) {
      currentStart = meeting.startTime
    }
  })
  
  // Push last value of currentEnd and currentStart
  finalArray.push({
    startTime: currentStart,
    endTime: currentEnd
  })
  return finalArray;
}


















// Tests

let desc = 'meetings overlap';
let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
let expected = [{ startTime: 1, endTime: 4 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings touch';
actual = mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]);
expected = [{ startTime: 5, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meeting contains other meeting';
actual = mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]);
expected = [{ startTime: 1, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings stay separate';
actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'multiple merged meetings';
actual = mergeRanges([
  { startTime: 1, endTime: 4 },
  { startTime: 2, endTime: 5 },
  { startTime: 5, endTime: 8 },
]);
expected = [{ startTime: 1, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings not sorted';
actual = mergeRanges([
  { startTime: 5, endTime: 8 },
  { startTime: 1, endTime: 4 },
  { startTime: 6, endTime: 8 },
]);
expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'oneLongMeetingContainsSmallerMeetings';
actual = mergeRanges([
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 5 },
  { startTime: 6, endTime: 8 },
  { startTime: 9, endTime: 10 },
  { startTime: 10, endTime: 12 }
]);
expected = [
  { startTime: 1, endTime: 12 }
];
assertArrayEquals(actual, expected, desc);

desc = 'sample input';
actual = mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]);
expected = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
];
assertArrayEquals(actual, expected, desc);

function assertArrayEquals(a, b, desc) {
  // Sort the keys in each meeting to avoid
  // failing based on differences in key order.
  orderedA = a.map( function(meeting) {
    return JSON.stringify(meeting, Object.keys(meeting).sort());
  });
  orderedB = b.map( function(meeting) {
    return JSON.stringify(meeting, Object.keys(meeting).sort());
  });
  const arrayA = JSON.stringify(orderedA);
  const arrayB = JSON.stringify(orderedB);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${JSON.stringify(a)} != ${JSON.stringify(b)}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}
