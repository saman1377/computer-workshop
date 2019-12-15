function linearSearch(array, toFind) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === toFind) return i;
    }
    return -1;
}

$(document).on('click', '#searchButton', function () {
    const list = getList();
    const key = $('#searchKey').val();

    if (list.length && key != '') {
        var start = window.performance.now();
        var b = linearSearch(list, key);
        var end = window.performance.now();
        var time = end - start;
        createResult(time, b)
        clean();
    }
})