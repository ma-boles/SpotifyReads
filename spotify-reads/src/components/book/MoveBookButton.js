import React from "react";
import { useShelfContext } from "../ShelfContext";


export default function MoveBookButton({ book, shelfName
    , targetShelf, actionType, currentShelf, onMoveBook, onRemove }) {
        const { handleMoveBook } = useShelfContext();
        const { handleRemoveBook } = useShelfContext();

    const handleButtonClick = () => {
        if(actionType === 'move') {
            // add logic for moving a book
            handleMoveBook(book, currentShelf, targetShelf);
        } else if (actionType === 'remove') {
            //logic for removing book
            handleRemoveBook(book, shelfName);
        }
    };

    return(
        <div>
            <button onClick={handleButtonClick} className="w-full p-2 m-0 inline-flex cursor-pointer text-left border-none bg-transparent hover:bg-neutral-600">
                {actionType === 'move' ? (<img src="/plus-solid.svg" alt="add" className="mt-1 pr-2 h-3 book--icon"></img>) : (<img src="/trash-solid.svg" alt="remove" className="mt-1 pr-2 h-3 book--icon"></img>)}
                {actionType === 'move' ? `Add to ${targetShelf}`: 'Remove'}
            </button>
        </div>
    );
};