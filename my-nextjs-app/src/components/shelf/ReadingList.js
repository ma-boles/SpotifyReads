import React, { useContext, useEffect, useState } from "react";
import Book from "../book/Book";
import EllipsisButton from "../book/EllipsisButton";
import { useShelfContext } from "@/app/contexts/ShelfContext";
import '@/app/styles/styles.css'


export default function ReadingList({ id, books, book, onMoveBook, onRemove, shelfName, currentShelf, targetShelf }) {
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
            <div className="readinglist--section bg-transparent ">
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
                shelfName="readingList"
                onRemove={handleRemoveClick}
                onMoveBook={handleMoveClick}
                onEllipsisClick={(isEllipsisVisible) => 
                handleEllipsisClick(book.id, isEllipsisVisible)}/>
                </div>
            ))}
            </div>
        </div>
    );
}
