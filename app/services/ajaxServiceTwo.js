// var baseUrl = 'http://localhost:3000';

// $.ajax ({
//     url: baseUrl,
//     method: 'GET',
//     success:function(data){
//         printData(data);
//     },
//     error: function(){
//         alert('error');
//     }
// })

// var source = $("#template").html();
// var templateMissions = Handlebars.compile(source);

// function printData(datas){
//     for (var i = 0; i < datas.length; i++) {
//         var data = datas[i];
//         var dataStamp = {
//             name: data.name,
//             description: data.description,
//             img: data.imageUrl
//         }
//         var template = template(dataStamp)
//         $('.append-here').append(template);
//     }
// }