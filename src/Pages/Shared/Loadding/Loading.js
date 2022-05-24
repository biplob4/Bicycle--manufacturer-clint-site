import React from 'react';

const Loading = () => {
    return (
            <div style={{zIndex:'3'}} className="flex items-center justify-center ">
                <div className="w-10 h-10 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
    );
};

export default Loading;