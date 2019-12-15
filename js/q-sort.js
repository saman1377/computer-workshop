var items = [5, 3, 7, 6, 2, 9];
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

$(document).on('click', '#searchButton', function () {
    const list = getList();

    if (list.length) {
        var start = window.performance.now();
        var sortedArray = quickSort(list, 0, list.length - 1);
        var end = window.performance.now();
        var time = end - start;
        createResultSort(time, sortedArray)
        clean();
    }
})

function createResultSort(time, data) {
    $('.card').first().hide();
    let xdata = '';
    for(let i = 0; i < data.length; i++) {
        xdata += data[i] + ',';
    }
    $('.header-body').append(
        `<div class="card col-md-12 r-card">
            <div class="card-body">
                <h5 class="card-title">binary search result</h5>
                <label>Time: ${time}</label>
                <br/>
                <label>${xdata.slice(0, -1)}</label>
                <div class="col-md-12 text-right">
                    <button id="goBack" type="button" class="btn btn-info">Back</button>
                </div>
            </div>
        </div>`
    )
}