// 选择排序
function SelectionSort(arr) {
  var len = arr.length;
  var minIndex,temp;
  console.time("选择排序耗时");
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.timeEnd("选择排序耗时")
  return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(SelectionSort(arr));