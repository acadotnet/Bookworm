



class Catalog{
    constructor(){
        this._books = []
    }

    addBook(book){
        this._books.push(book);
    }

    build(target){

        var $tbody = $(target);

        $.each(this._books, function(b, book){
            $tbody.append(book.toTableRow());
        });
    }
}


class Book{
    constructor(id, title, isbn, coverUrl){
        this._id = id;
        this._title = title;
        this._isbn = isbn;
        this._coverUrl = coverUrl;
        this._authors = [];
    }

    addAuthor(authorName){
        this._authors.push(authorName);
    }

    toTableRow(){

        var $tr = $('<tr>');
        $tr.append('<td>' + this._id + '</td>'); //<td>1</td>
        $tr.append('<td><img src="' + this._coverUrl + '" /></td>');
        $tr.append('<td><a href="./details.html?bookId=' + this._id + '">' + this._title + '</a></td>');
        $tr.append('<td>' + this._authors + '</td>');
        $tr.append('<td>' + this._isbn + '</td>');

        return $tr;
    }
}


$(document).ready(function(){

    $.getJSON({
        url: "./data/books.json",
        success: function(d){

            var catalog = new Catalog();

            $.each(d.books, function(i, book){
                var b = new Book(book.id, book.title, book.isbn, book.coverUrl);
                // $.each(book.author, function(a, author){
                //     b.addAuthor(author)
                // });
                catalog.addBook(b);
            });

            catalog.build("#tableBody");
        },
        error: function(){

        }
    });
});
