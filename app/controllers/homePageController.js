const ITEMS_PER_PAGE =9;

const  foodService  = require("../services/foodService");
// const  {listFoods}  = require("../services/foodService");

class homePageController {
  
  renderHomePage =async(req, res, next) =>{  
    let { currentPage } = req.query;
    if (!currentPage || isNaN(currentPage)) currentPage = 1;
    else{
      currentPage = parseInt(currentPage);
    }

    const numberFoodPerPage=2;
    
    const count =await foodService.getNumberOfFoods();
    const foods  =await foodService.getFoodsByFoodPerPage(currentPage,numberFoodPerPage);
    // console.log("FOOD O TRANG NAY: ",foods)
    const totalPages = Math.ceil(count / 2);//ITEMS_PER_PAGE=2
    const nextPage = currentPage + 1;
    const previousPage = currentPage - 1;
    const pages= Array.from(Array(totalPages).keys()).map(i => i + 1);

      res.render("index",{foods,currentPage,pages,nextPage,previousPage})   
      //res.render("index",{foods,currentPage,pages,nextPage,previousPage})
    
    // res.render("index", { foods,countFoods,totalPages,pages: Array.from(Array(totalPages).keys()).map(i => i + 1),nextPage, previousPage,} );
  }

  renderUserPage(req, res){

    const MYUserName= req.params.UserName;
    Food.find({})
      .then((foods) => {
        foods = foods.map((food) => food.toObject());
        res.render("index", { foods, MYUserName} );
      })
      .catch((err) => next(err));
  }


  renderAbout(req, res, next) {
    res.render("homePage/about");
  }

  renderBooktable(req, res, next) {
    res.render("homePage/booktable");
  }

  renderMenu =async(req, res, next)=> {
    let { currentPage } = req.query;
    let { currentCategory } = req.query;
    if (!currentPage || isNaN(currentPage)) currentPage = 1;
    else{
      currentPage = parseInt(currentPage);
    }

    const numberFoodPerPage=3;
    
    const count =await foodService.getNumberOfFoods();
    // const foods  =await foodService.getFoodsByFoodPerPage(currentPage,numberFoodPerPage);
    const foods  =await foodService.getFoodsByCategory(currentCategory);
    const totalPages = Math.ceil(count / 2);//ITEMS_PER_PAGE=2
    const nextPage = currentPage + 1;
    const previousPage = currentPage - 1;
    const pages= Array.from(Array(totalPages).keys()).map(i => i + 1);

    //res.render("index")   
    res.render("homePage/menu",{foods,currentPage,pages,nextPage,previousPage});
  }

  filterMenu =async(req, res, next)=> {
    const category = req.params.category;
    console.log("CaTTETETTE",category);
    let { currentPage } = req.query;
    if (!currentPage || isNaN(currentPage)) currentPage = 1;
    else{
      currentPage = parseInt(currentPage);
    }
    // const numberFoodPerPage=10;
    const foods  =await foodService.getFoodsByCategory(category);
    const count=foods.length;
    const totalPages = Math.ceil(count / 2);//ITEMS_PER_PAGE=2
    const nextPage = currentPage + 1;
    const previousPage = currentPage - 1;
    const pages= Array.from(Array(totalPages).keys()).map(i => i + 1);

    //res.render("index")   
    res.render("homePage/menu",{foods,currentPage,pages,nextPage,previousPage});
  }
  
  renderShoppingCart =async(req, res, next)=> {
    const slug =req.params.slug;
    const food =await foodService.getFoodDetailBySlut(slug);
    
    var foodOnLocalStorage = JSON.stringify(food);

//save it with local storage
    // global.localStorage.setItem('CartList', foodOnLocalStorage);

    
//get 'animal' and rehydrate it  (convert it back JSON)
    // var rehydratedAnimal = JSON.parse(window.localStorage.getItem('animal'));
    
    // console.log('slu o COMMENT LA :',slug);
    // console.log('FOOD ID la: ', foodId);
    // console.log('CONTENT cua COMMENT la :',comments);


    // res.render("food/foodDetail", {food, comments});
    // const numberFoodPerPage=2;
    // const currentPage=2;
    // // const count =await foodService.getNumberOfFoods();
    // const foods  =await foodService.getFoodsByFoodPerPage(currentPage,numberFoodPerPage);

    res.render("homePage/shoppingCart",{food});
  }


}

module.exports = new homePageController();
