import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { PageNotFound } from '../pages/404'
import { AuthPage } from '../pages/Auth'
import { DashboardPage } from '../pages/Dashbaord'
import { RootState } from '../store'
import { fetchUsrData } from '../store/Reducers/auth'

export const RootRoute: React.FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const stateDisFn = useCallback(() => {
    dispatch(fetchUsrData())
  }, [dispatch])
  useEffect(() => {
    stateDisFn()
  }, [stateDisFn])
  return (
    <BrowserRouter>
      <Switch>
        {isAuth ? (
          <Route path='/dashboard' component={DashboardPage} />
        ) : (
          <Route path='/' exact component={AuthPage} />
        )}

        <Route path='/404' component={PageNotFound} />
        <Redirect to='/404' />
      </Switch>
    </BrowserRouter>
  )
}
