import React, { useEffect } from 'react'

function PromiseAsyncAwait() {
    // promise
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
    // promise

    const promiseOne = (paramOne) => {
        return new Promise((resolve, reject) => {
            if(paramOne === "Sanjeev") {
                resolve("Promise Resolved");
            }
            else {
                reject("Promise Rejected");
            }
        });
    };
    const promiseTwo = (paramTwo) => {
        return new Promise((resolve, reject) => {
            if(paramTwo === "Promise Resolved") {
                resolve("Sanjeev good boy");
            }
            else {
                reject("bad boy");
            }
        });
    };
   // promise
    const PromiseMain = () => {
        promiseOne("Sanjeev")
        .then((fresponse) => {
            console.log(fresponse);
            return promiseTwo(fresponse);
        })
        .then((sresponse) => {
            console.log(sresponse);
        })
        .catch((err) => {
            console.log(err)
        });
    };
    // await
    const asyncMain = async () => {
       try {
        let res = await promiseOne("Sanjeev");
       console.log(res);
       let resTwo = await promiseTwo(res);
       console.log(resTwo);
       }
       catch{
        console.log("promise rejected");
       }
    };
    useEffect(() => {
        asyncMain();
    }, []);

  return (
    <div></div>
  )
}

export default PromiseAsyncAwait