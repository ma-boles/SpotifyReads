import React, { useContext, useEffect, useState } from "react";
import { useShelfContext } from "../contexts/ShelfContext";
import Book from "./Book";
import EllipsisButton from "./EllipsisButton";



export default function BookShelf({ id, book, books, onMoveBook, onRemove, currentShelf, targetShelf, shelfName }){
    const { handleMoveBook } = useShelfContext();
    const { handleRemoveBook } = useShelfContext();

    useEffect(() => {
        console.log('Received books:', books);
    }, [books]);

    const [ bookEllipsisVisibility, setBookEllipsisVisibility ] = useState({});

    const handleEllipsisClick =(bookId, isEllipsisVisible) => {
        setBookEllipsisVisibility((prevVisibility) => ({
            ...prevVisibility,
            [bookId]: isEllipsisVisible,
        }));
    };

    const handleMoveClick = (book) => {
        handleMoveBook(book, currentShelf, targetShelf);
    };

    const handleRemoveClick = (book) => {
        handleRemoveBook(book, shelfName);
    };
    
    return (
        <div>
            <div className="inline-flex m-8 mb-12 overflow-auto justify-center bookshelf--section">
                {books.map((book) => (
                    <div key={book.id} className="text-center">
                        <Book 
                        key={book.id} 
                        id={book.id}
                        book={book} 
                        onMoveBook={handleMoveClick} 
                        shelfName={shelfName}
                        />

                        <EllipsisButton 
                        book={book}
                        id={id}
                        shelfName="bookshelf"
                        onRemove={handleRemoveClick}
                        onMoveBook={handleMoveClick}
                        onEllipsisClick={(isEllipsisVisible) => 
                        handleEllipsisClick(book.id, isEllipsisVisible)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
