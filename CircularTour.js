function circularTour(p, n) {
    let queue = [];
    let index = 0;
    let current = 0;
    while (index < n) {
        let petrol = p[index][0];
        let distance = p[index][1];
        if (petrol - distance < 0 && queue[queue.length - 1] >= 0) {
            queue[queue.length - 1] += petrol - distance;

        } else if (petrol - distance < 0 && queue[queue.length - 1] < 0) {
            current = index + 1;
            queue.push(petrol - distance);

        } else if (petrol - distance >= 0 && queue[queue.length - 1] >= 0) {
            queue[queue.length - 1] += petrol - distance;
        } else {
            queue.push(petrol - distance);
            current = index;
        }
        index++;
    }
    if (current >= n) {
        return -1;
    } else {
        let element = queue.pop();
        for (let val of queue) {
            if (element + val < 0) {
                return -1;
            }
            element = element + val;
        }
        if (element >= 0)
            return current;
        else
            return -1;
    }
}


console.log(circularTour([[62, 49], [8, 18], [98, 70], [39, 70], [40, 29], [71, 19], [93, 86], [43, 81], [34, 55], [44, 8], [51, 1], [86, 22], [21, 89], [41, 91], [48, 35], [84, 26], [95, 62], [31, 43], [64, 92], [21, 21], [39, 55], [93, 43], [23, 31], [86, 35], [95, 9], [9, 81], [3, 45], [85, 46], [88, 23], [58, 26], [3, 36], [49, 93], [87, 97]], 33))