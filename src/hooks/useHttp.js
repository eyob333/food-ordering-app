import { useState, useCallback, useEffect } from "react"

async function sendHttpRequest(url, config){
    const response =  await fetch(url, config)
    const resData = await response.json()

    if (!response.ok){
        throw new Error( resData.message || "Some thing went wrong!")
    }
    return resData
}

function useHttp(url, config, initialData){
    const [data, setData] =  useState(initialData)
    const [error, setError] =  useState()
    const [isLoading, setIsLoading] =  useState(false)

    function resetData(){
        setData(initialData)
    }


    const sendHttp = useCallback( async function sendHttp(data){ 
        setIsLoading(true)
        try{
            const resData = await sendHttpRequest(url, {...config, body: data}) // i wanna see how this function be haves when i use "await"
            setData(resData)
        }
        catch (err) {
            setError(err || 'Something Went Wrong, faild to send request!')
        }
        setIsLoading(false)
    }, [url, config])

    useEffect( () => {
        if ( config && (config.method === 'GET' || !config.method || !config) ){
            sendHttp()
        }
    }, [sendHttp, config])

    return {
        data,
        error,
        isLoading,
        sendHttp,
        resetData
    }
}

export default useHttp