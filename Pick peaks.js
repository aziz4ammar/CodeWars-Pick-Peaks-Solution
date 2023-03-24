function pickPeaks(arr) {
    let peaks = {
      pos: [],
      peaks: []
    };
  
    for (let i = 1; i < arr.length - 1; i++) {
      let lnum = arr[i - 1];
      let rnum = arr[i + 1];
  
      if (lnum < arr[i] && rnum < arr[i]) {
        peaks.pos.push(i);
        peaks.peaks.push(arr[i]);
      } else if (lnum < arr[i] && rnum === arr[i]) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[i]) {
            peaks.pos.push(i);
            peaks.peaks.push(arr[i]);
            break;
          } else if (arr[j] > arr[i]) {
            break;
          }
        }
      }
    }
  
    return peaks;
  }