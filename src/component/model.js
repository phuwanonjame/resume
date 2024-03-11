import React from "react";

function Model({ handleOk, handleCancel }) {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-50 ">
            <div className="bg-white p-5 max-md:p-2 max-md:w-2/3 rounded-md border border-black animate-pulse">
                <div className="flex justify-center items-center">
                    <i className="fa-solid fa-circle-info text-5xl"></i>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <span>Are you sure?</span>
                </div>
                <footer className="mt-5 flex justify-center">
                    <button onClick={handleOk} className="bg-red-600 p-3 w-52 mr-5 hover:opacity-50">ok</button>
                    <button onClick={handleCancel} className="bg-black p-3 w-52 text-white hover:opacity-50">cancel</button>
                </footer>
            </div>
        </div>
    );
}

export default Model;
