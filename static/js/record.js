
function show(name,date){
  console.log(name);
  console.log(date);
    $.get("https://api-mainnet.magiceden.dev/v2/collections/"+name+"/stats", function (data) {
    $("#nft-info-container-"+name).append(
      '<span>' +
        data.floorPrice+
        '</span>'
    );
    let newdate;
    newdate=date.substring(4,15);
    console.log(newdate);
    $("#date-"+name).append(
      '<span>' +
        newdate+
        '</span>'
    );
  // }
});

}