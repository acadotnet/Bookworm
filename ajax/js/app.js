class Book{
    constructor(id, title, isbn){
        this._id = id;
        this._title = title;
        this._isbn = isbn;
    }

    getid(){
        return this._id;
    }

}


$(document).ready(function(){


    $.getJSON({
        url: "./data/books.json",
        success: function(d){
            console.log(d);
        },
        error: function(){

        }
    });



});
