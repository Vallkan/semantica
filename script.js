

/*
x = $(".big").val();
console.log(x.length);

if (x.length <= 240) {
    $("#readmore").addClass(".hide");
}
if (x.length > 240) {
    $(".maintext").addClass(".overflowyes");
}

$("#readmore").click(function() {
    $(".maintext").removeClass(".overflowyes");
    $(".maintext").addClass(".overflowno");
});

$("#rollup").click(function() {
    $(".maintext").removeClass(".overflowno");
    $(".maintext").addClass(".overflowyes");
});

