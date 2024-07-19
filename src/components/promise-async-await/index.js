import React, { useEffect } from 'react'

function PromiseAsyncAwait() {
    const promiseExample = () => {
        const friend = new Promise((resolve, reject) => {
            let isChocalteEveryday = false;
            if(isChocalteEveryday){
                resolve('Promise Resolved');
            }
            else{
                reject('Promise broken');
            }
        });

        friend
        .then((resolve) => {
            console.log(`${resolve}`);
        })
        .catch((reject) => {
            console.log(`${reject}. No more Freiendship`);
        });
    };

    useEffect(() => {
        promiseExample();
    }, []);
  return (
    <div></div>
  )
}

export default PromiseAsyncAwait