import { Route, Routes } from 'react-router-dom';

import SignIn from '../Authentication/SignIn/SignIn';
import SignUp from '../Authentication/SignUp/SignUp';
import Calendar from '../Calendar';
import Chart from '../Chart';
import DashBoard from '../Dashboard/DashBoard';
import FormElements from '../Form/FormElements';
import FormLayout from '../Form/FormLayout';
import Profile from '../Profile';
import Students from '../Students';
import Parents from '../Parents';
import Cours from '../Cours';
import Enseignant from '../Enseignant';
import Convocations from '../Convocations';
import Settings from '../Settings';
import Tables from '../Tables';
import Alerts from '../UiElements/Alerts';
import Buttons from '../UiElements/Buttons';

//ADMIN
//import AdminUser from './Admin/AdminUser';
import AdminUserForm from '../Admin/AdminUserForm';
import AdminRole from '../Admin/AdminRole';
import AdminRoleForm from '../Admin/AdminRoleForm';
import AdminPermission from '../Admin/AdminPermission';
import AdminPermissionForm from '../Admin/AdminPermissionForm';
import UserGrid from '../Admin/AdminUser';
import AddFaults from '../Admin/Faults/AddFaults';
import FaultsGrid from '../Admin/Faults/FaultsGrid';
import AddReglement from '../Admin/ReglementInterieur/AddReglement';
import ReglementGrid from '../Admin/ReglementInterieur/ReglementGrid';

import { connect,useSelector } from 'react-redux'
import { ReduxProps } from '../../redux/configureStore';

interface AppSwitchProps {
    isLoggedIn: boolean
}


const AppSwitch: React.FC<AppSwitchProps> = (props) => {

    const state = useSelector((state: ReduxProps) => state);
    console.log('isLoggedIn' + props.isLoggedIn);
    console.log('state loggedIn' + state.loggedIn);
    

    if((props.isLoggedIn && props.isLoggedIn ===true) || (state.loggedIn && state.loggedIn === true)){
        return(
        <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/students" element={<Students />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/enseignant" element={<Enseignant />} />
            <Route path="/convocations" element={<Convocations />} />
            <Route path="/forms/form-elements" element={<FormElements />} />
            <Route path="/forms/form-layout" element={<FormLayout />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/ui/alerts" element={<Alerts />} />
            <Route path="/ui/buttons" element={<Buttons />} />
            <Route path="/admin/users" element={<UserGrid />} />
            <Route path="/admin/newuser" element={<AdminUserForm />} />
            <Route path="/admin/roles" element={<AdminRole />} />
            <Route path="/admin/newrole" element={<AdminRoleForm />} />
            <Route path="/admin/permissions" element={<AdminPermission />} />
            <Route path="/admin/newpermission" element={<AdminPermissionForm />} />
            <Route path="/faults/addfaults" element={<AddFaults/>} />
            <Route path="/faults/faults" element={<FaultsGrid />} />
            <Route path="/reglement/addreglement" element={<AddReglement/>} />
            <Route path="/reglement/reglements" element={<ReglementGrid />} />

        </Routes>
        )
    } else {
        return(
            <Routes>
                <Route path="/" element={<SignIn/>} />
                <Route path="/auth/signin" element={<SignIn/>} />
                <Route path="/auth/signup" element={<SignUp/>} />
            </Routes>
        )
    }
}

function mapStateToProps(state: ReduxProps): ReduxProps {
    return { 
        user: state.user,
        environment: state.environment,
        loggedIn: state.loggedIn,
    };
  } 
  
export default connect(mapStateToProps)(AppSwitch)