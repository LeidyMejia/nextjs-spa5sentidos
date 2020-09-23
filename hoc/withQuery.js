import React from 'react'
import {useQuery} from "graphql-hooks";

export const withQuery = (query) => (WrappedComponent) => {
   return (props) => {
      const { loading, error, data = {} } = useQuery(query)
      return <WrappedComponent {...props} loading={loading} error={error} data={data}/>
   }
}