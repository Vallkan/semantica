
x = $(".big").text();
console.log(x.length);

y = $(".bold").text();
console.log(y.length);

$("#readmore").click(function() {
    $(".maintext").removeClass("overflowyes").addClass("overflowno");
    $("#readmore").addClass("hide");
    $("#rollup").removeClass("hide");
});

$("#rollup").click(function() {
    $(".maintext").removeClass("overflowno").addClass("overflowyes");
    $("#readmore").removeClass("hide");
    $("#rollup").addClass("hide");
});


if (x.length <= 280) {
    $("#readmore").addClass("hide");
    $(".maintext").addClass("overflowno");
}
if (x.length > 280) {
    $(".maintext").addClass("overflowyes");
}

if (y.length < 30) {
    $("#readmor").addClass("hide");
    $(".header").addClass("overflowno");
}

if (y.length >= 30) {
    $(".header").addClass("overflowyes");
}

$("#readmor").click(function() {
    $(".header").removeClass("overflowyes").addClass("overflowno");
    $("#readmor").addClass("hide");
    $("#rollupp").removeClass("hide");
});

$("#rollupp").click(function() {
    $(".header").removeClass("overflowno").addClass("overflowyes");
    $("#readmor").removeClass("hide");
    $("#rollupp").addClass("hide");
});