import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { InputContext } from '../context/context';
import Antonym from './Antonym';
import Example from './Example';
import MeaningList from './MeaningList';
import Synonym from './Synonym';

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const ResultList = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { inputValue } = useContext(InputContext)

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`)
      setResponse(res.data)
      setError(null)
    } catch (err) {
      console.log(err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue)
    }
  }, [inputValue])

  if (loading) {
    return (
      <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
        <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
      </div>
    )
  }

  if (error) {
    return <h3 className="text-center mt-10 font-semibold text-gray-500">No Definition Found</h3>
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {response && (
        <div>
          <h3 className="text-2xl font-bold mt-4">Meaning & Definition</h3>
          <MeaningList definition={response}/>
          <h3 className="text-2xl font-bold mt-4">Example:</h3>
          <Example definition={response}/>
          <h3 className="text-2xl font-bold mt-4">Synonym:</h3>
          <Synonym definition={response}/>
          <h3 className="text-2xl font-bold mt-4">Antonym:</h3>
          <Antonym definition={response}/>
        </div>
      )}

    </div>
  )
}

export default ResultList