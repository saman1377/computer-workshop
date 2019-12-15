function createList(inp, out) {
    const v = $(inp).val().trim();
    if (v != "") {
        $(out).append(
            `<span data="${v}" class="lists-content badge badge-pill badge-info ml-2 mt-2">
                ${v}
                <i class="fas fa-times float-right ml-2 remove-me"></i>
            </span >`
        );
        $(inp).val('');
    }
}

function getList() {
    let a = $('.lists-content');
    let b = [];

    for(let i = 0; i < a.length; i++) 
        b.push($(a[i]).attr('data'));

    return b;
}

function clean() {
    $('.lists-content').remove();
}

function createResult(time, data) {
    $('.card').first().hide();
    $('.header-body').append(
        `<div class="card col-md-12 r-card">
            <div class="card-body">
                <h5 class="card-title">binary search result</h5>
                <label>Time: ${time}</label>
                <br/>
                <label>${(data != -1) ? 'Found' : 'not Found'}</label>
                <div class="col-md-12 text-right">
                    <button id="goBack" type="button" class="btn btn-info">Back</button>
                </div>
            </div>
        </div>`
    )
}

$(document).on('click', '#goBack', function () {
    $('.r-card').remove();
    $('.card').show();
    $('input').val('');
})

$(document).on('keyup', '#listCreator', function (e) {
    if (e.keyCode === 13) createList('#listCreator', '.lists')
})

$(document).on('click', '.remove-me', function () {
    $(this).parent().remove();
})

$(".number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
        // Allow: Ctrl+A, Command+A
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40) ||
        // Allow: copy
        e.keyCode === 86 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: paste
        e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: cute
        e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true) || e.keyCode === 190) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});