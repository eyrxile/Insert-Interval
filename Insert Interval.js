var insert = function(intervals, newInterval) {
    const result = [];
    let i = 0;
    const n = intervals.length;

    while(i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while(i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    while(i < n) {
        result.push(intervals[i]);
        i++;
    }
    return result;
};

//Example usage:
const intervals1 = [[1,3],[6,9]];
const newInterval1 = [2,5];
console.log(insert(intervals1, newInterval1));

const intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval2 = [4,8];
console.log(insert(intervals2, newInterval2));