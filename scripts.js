function getalldata(){
        //api handling
        $.ajax({
            type: "GET",
            url:"https://run.mocky.io/v3/671f062c-ac88-430f-b07a-c76f49ce7c2c" //API LINK
        })
        .done(function (data) {
            //assign api data to variable 
            var apiTextResponse=data[1];
            let allValues=[]
            for (let i=0;i<data.length;i++){
                allValues[i]=Object.values(data[i]);
            }
            let numOfLoops= Object.values(data[0]).length
            for (let j=0; j<numOfLoops; j++){
                
                let manager= ".manager";
                manager += j;
                manager = manager.concat(" ", "span");
                console.log (manager);
                console.log ($(manager));
            }
            
        })
        .fail(function () {
            //do anything if api fails to response
        });
}

getalldata();