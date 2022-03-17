
function show(name,date,id,bp,roy){
  // console.log(name);
  // console.log(date);
    $.get("https://api-mainnet.magiceden.dev/v2/collections/"+name+"/stats", function (data) {
    $("#currentfp-"+id).append(
      '<span>' +
        data.floorPrice/1000000000+
        '</span>'
    );
    let fp=data.floorPrice/1000000000
    let temp=((fp-(fp*(roy/100)))-bp);
    temp=temp.toFixed(2)
    if(temp>=0){
      $("#currentpl-"+id).append(
        '<span class="green">' +
          temp+
          '</span>'
      );
    }
    else{
      $("#currentpl-"+id).append(
        '<span class="red">' +
          temp+
          '</span>'
      );
    }

  });

    let newdate;
    newdate=date.substring(4,15);
    console.log(newdate);
    $("#date-"+id).append(
      '<span>' +
        newdate+
        '</span>'
    );


  // }


}