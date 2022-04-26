$.ajax({
    url: '/api/check-food/1',
    type: 'GET'

})
.then(data => {
    console.log(data);
    for(let i = 0; i <data.length; i++) {
        const element = data[i];
        console.log("ajax Service element HERRERERERER :",element);
    }
})
.catch(err => {
    console.log("api loi");
})