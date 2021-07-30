import React from "react";
import { useQuery } from "@apollo/client";
import Loader from "../loader/Loader";

const QueryLayout = ({ query, variables, Component, fetchPolicy, ...rest }) => {
  const { loading, error, data, refetch } = useQuery(query, {
    variables,
    fetchPolicy: fetchPolicy || "cache-and-network",
  });
  if (loading) return <Loader />;
  if (error) return <>{error.message}</>;
  return <Component {...data} {...rest} refetch={refetch} />;
};

export default QueryLayout;
