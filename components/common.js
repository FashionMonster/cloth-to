import React from 'react'

const FileBtn = ({ value }) => {
    return <label for="uploadBtn" className="bg-purple-700 text-white rounded w-32 text-center px-2 py-1 hover:bg-purple-800 hover:text-white">
                {value}<input type="file" id="uploadBtn" className="hidden" />
            </label>
}

const SubmitBtn = ({ value }) => {
    return <input type="submit" value={value}
        className="bg-purple-700 text-white rounded px-2 py-1
         hover:bg-purple-800 hover:text-white" />
}


export { FileBtn, SubmitBtn};