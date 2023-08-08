function mergeSort(arr) {
    if(arr.length <= 1) 
        return arr;
    
    let mid = parseInt(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    
    return merge(left,right);
}

function merge(left, right) {
    let arr = [];
    console.log(left + " | " + right);
    while(left.length > 0 || right.length > 0) {
        if(left.length == 0)  {
            arr = arr.concat(right);
            right = [];
        }
        else if(right.length == 0) {
            arr = arr.concat(left);
            left = [];
        }
        else {
            let element = left[0] < right[0] ? left.shift() : right.shift();
            console.log(element);
            arr.push(element);
        }
    }
    
    return arr;
}
