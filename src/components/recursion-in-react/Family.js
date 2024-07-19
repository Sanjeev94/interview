import React, { useState } from 'react'
// import { familyTree } from './data';

export default function Family({familyTree}) {
    const [isVisible, setIsVisible] = useState(false);
    const expand = () => {
        setIsVisible(!isVisible);
    };
    
  return (
    <div style={{paddingLeft: 10}}>
        {/* console.log(familyTree); */}
        <span onClick={expand}>{familyTree.name}</span>

        {isVisible ? (
            familyTree?.children?.map((child) => {
                return (
                    <div style={{paddingLeft: 10}}>
                        {/* <span>{child.name}</span> */}
                        <Family familyTree={child} />
                    </div>
                );
            })
        ) : (
            <></>
        )}
    </div>
  );
}

