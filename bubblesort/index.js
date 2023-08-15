const arr = [40, 100, 1, 5, 25, 10];

function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort_Increment(){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
     document.getElementById("demo").innerHTML= arr;
}

function bubble_Sort_Decrement(){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] < arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    document.getElementById("demo").innerHTML = arr;
}