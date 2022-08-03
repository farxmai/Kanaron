import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { tokenParser } from 'services/authHandlers'
import { typePolicies } from 'apollo/typePolicies'
import { possibleTypes } from 'apollo/possibleTypes'
import { typeDefs } from 'qql/typeDefs'
import { user } from 'cache'

import ThemeProvider from 'theme'
import Router from 'router/Router'
import Layout from 'pages/Layout'
import './App.css'
import { Box, TextField } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'

const App = () => {
  const token = localStorage.getItem('token')
  const userData = token ? tokenParser(token) : null
  user(userData)

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
    typeDefs,
    cache: new InMemoryCache({
      addTypename: false,
      possibleTypes,
      typePolicies,
    }),
  })

  return (
    <Box style={{ backgroundColor: 'white', padding: 10 }}>
      <TextField
        size='small'
        // onChange={setTime('timeFrom')}
        // disabled={!disabled}
        // className={classes.timePicker}
        type='time'
        // value={el.timeFrom}
        InputProps={{
          adornedEnd: <ArrowBack />,
        }}
      />
    </Box>
  )
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <BrowserRouter>
          <Layout user={userData}>
            <Router user={userData} />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
