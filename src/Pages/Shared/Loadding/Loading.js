import React from 'react';

const Loading = () => {
    return (
            <div style={{zIndex:'3'}} className="flex items-center justify-center ">
                <div className="w-14 h-14 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
    );
};

export default Loading;