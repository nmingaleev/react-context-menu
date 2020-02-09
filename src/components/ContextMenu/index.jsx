import React, { useEffect, useState } from 'react';

import './index.css';

const ContextMenu = ({ parentRef, items }) => {
    const [isVisible, setVisibility ] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        const parent = parentRef.current;
        if (!parent) {
            return;
        }

        const showMenu = (event) => {
            event.preventDefault();

            setVisibility(true);
            setX(event.clientX);
            setY(event.clientY);
        };

        const closeMenu = () => {
            setVisibility(false);
        };

        parent.addEventListener('contextmenu', showMenu);
        window.addEventListener('click', closeMenu);

        return function cleanup() {
            parent.removeEventListener('contextmenu', showMenu);
            window.removeEventListener('click', closeMenu);
        };
    });

    const style = {
        top: y,
        left: x,
    };

    return isVisible ?  (
        <div className='context-menu' style={style}>
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        onClick={item.onClick}
                        className='context-menu__item'
                    >
                        {item.text}
                    </div>
                );
            })}
        </div>
    ) : null;
};

export default ContextMenu;