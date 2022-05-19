import { Route, Switch } from "react-router-dom"
import { Signin } from "../pages/Signin"
import { Signup } from "../pages/Signup"
import { Users } from "../pages/Users"

export const Routes = () => {

    return (
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/users" component={Users} />
        </Switch>
    )

}