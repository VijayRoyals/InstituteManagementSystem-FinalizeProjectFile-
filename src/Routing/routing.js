import { createBrowserRouter} from "react-router-dom";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// all crud operations imports
import AdmSideNav from '../Component/AdminConsole/AdmSideNav';
import M1 from "../Component/AdminConsole/M1";
import Dashboard from "../Component/dashboard";
import AdmSideNavRoute from "../Component/AdminConsole/AmdSideNavlayout";
import ParentAdmRouter from "../Component/AdminConsole/ParentAdmRouter";
import ParentFacRouter from '../Component/FacultyConsole/ParentFacRouter';
import ParentStdRouter from '../Component/StudentConsole/ParentStdRouter';
import M2 from '../Component/AdminConsole/M2';
import M3 from '../Component/AdminConsole/M3';
import M4 from '../Component/AdminConsole/M4';
import M2add from '../Component/AdminConsole/M2add';
import M2update from '../Component/AdminConsole/M2update';
import Contact from '../Component/AdminConsole/contactlist';

import M3add from '../Component/AdminConsole/M3add';
import M3update from '../Component/AdminConsole/M3update';
import M4add from '../Component/AdminConsole/M4add';
import M4update from '../Component/AdminConsole/M4update';
import ParentLP from '../Component/Landingpage/ParentLP';

// Landing Page Imports
import Header from '../Component/Landingpage/Header';
import HomePage from '../Component/Landingpage/HomePage';
import AboutUs from '../Component/Landingpage/AboutUs';
import ContactUs from '../Component/Landingpage/ContactUs';
import Departments from '../Component/Landingpage/Departments';
import LoginPage from '../Component/Landingpage/LoginPage';
import Placement from '../Component/Landingpage/Placement';
import RegistrationPage from '../Component/Landingpage/RegistrationPage';




const router = createBrowserRouter([

//    {path:"", element:<Header/>},
//    {path:"", element:<HomePage/>},

    {path:"", element:<ParentLP/>, 
    children:[
        
        {path:"", element:<HomePage/>},
        {path:"AboutUs", element:<AboutUs/>},
        {path:"ContactUs", element:<ContactUs/>},
        {path:"Departments", element:<Departments/>},
        {path:"LoginPage", element:<LoginPage/>},
        {path:"Placement", element:<Placement/>},
        {path:"RegistrationPage", element:<RegistrationPage/>}

    

    ]},

    

    {path:"admincrud", element:<ParentAdmRouter/>,
    children:[
        {path:"", element:<M1/>},
        {path:"M2", element:<M2/>},
        {path:"M3", element:<M3/>},
        {path:"M4", element:<M4/>},
        {path:"M2add", element:<M2add/>},
        {path:"M2update/:id", element:<M2update/>},
        {path:"M3add", element:<M3add/>},
        {path:"M3update/:id", element:<M3update/>},
        {path:"M4add", element:<M4add/>},
        {path:"M4update/:id", element:<M4update/>},
        {path:"contact", element:<Contact/>}

    ]},

    

    {path:"trainercrud", element:<ParentFacRouter/>,
    children:[
        {path:"", element:<M1/>},
    {path:"M2", element:<M2/>},
    {path:"M3", element:<M3/>},
    {path:"M4", element:<M4/>},
    {path:"M2add", element:<M2add/>},
    {path:"M2update/:id", element:<M2update/>},
    {path:"M3add", element:<M3add/>},
    {path:"M3update/:id", element:<M3update/>},
    {path:"M4add", element:<M4add/>},
    {path:"M4update/:id", element:<M4update/>}

    ]},
    

    {path:"Stdcrud", element:<ParentStdRouter/>,
    children:[
        {path:"", element:<M1/>},
    {path:"M2", element:<M2/>},
    {path:"M3", element:<M3/>},
    {path:"M4", element:<M4/>},
    {path:"M2add", element:<M2add/>},
    {path:"M2update/:id", element:<M2update/>},
    {path:"M3add", element:<M3add/>},
    {path:"M3update/:id", element:<M3update/>},
    {path:"M4add", element:<M4add/>},
    {path:"M4update/:id", element:<M4update/>}

    ]},




])


export default router;





































// import MySliderComp from "../components/MySliderComp";
// import MyImagesComp from "../components/MyImages";

// import PageNotFound from "../components/PageNotFound";
// import ReactHooksComp from "../Hooks/ReactHooksComp";
// import UseStateHookComp from "../Hooks/UseStateHookComp";
// import UseEffectHookComp from "../Hooks/UseEffectHookComp";
// import MaindashboardComp from "../Layout/MaindashboardComp";
// import NavComp from "../Layout/NavComp";
// import VirtualDomComp from "../components/VirtualDomComp";
// import FormValComp from "../components/FormValComp";
// import ProductDashboardComp from "../Component/AdminConsole/ProductDashboardComp";
// import ProductAddComp from "../Component/AdminConsole/ProductAddComp";
// import ProductUpdateComp from "../Component/AdminConsole/ProductUpdateComp";
// import LoginPage from "../Layout/LoginPage";
// import SignOutComp from "../Layout/Signout";
// import ProtectedRoutingComp from "./ProtectedRoutingComp";
// import RegisterPageComp from "../Layout/RegisterPageComp";
// import LogoutPageComp from "../Layout/LogoutPageComp";
// import ProductUserComp from "../Component/AdminConsole/ProductDashUser";
// import CardComp from "../List/OilPageComp";


// const router = createBrowserRouter([
//     {path:"",element:<LoginPage/>},
//     {path:"Login",element:<LoginPage/>},
//     {path:"Register",element:<RegisterPageComp/>},
//     {path:"Logout",element:<LogoutPageComp/>},
//     // {path:"",element:<ProductUserComp/>},
//     // {path:"Logout",element:<SignOutComp/>},
//     // {path:"SignOut",element:<SignOut/>},
//     // {path:"",element:<LoginPage/>},
//     {path:"Maindashboard",
//         // element:<MaindashboardComp/>
//         element:<ProtectedRoutingComp Component={MaindashboardComp}/>,children:[
//         {path:"nav",element:<NavComp/>},
//         {path:"Oil",element:<CardComp/>},
//         // {path:"Copyright",element:</>},
//         {path:"",element:<MySliderComp/>},
//         {path:"myslider",element:<MySliderComp/>},
//         {path:"ProductDashboard",element:<ProductDashboardComp/>},
//         {path:"ProductUpdate/:id",element:<ProductUpdateComp/>},
//         {path:"ProductAdd",element:<ProductAddComp/>},
//         // {path:"SignOut",element:<SignOut/>},
//         {path:"myimages",element:<MyImagesComp/>},
//         {path:"FormValComp",element:<FormValComp/>},
//         {path:"VirtualDom",element:<VirtualDomComp/>},
//         {path:"UseState",element:<UseStateHookComp/>},
//         {path:"ReactHooks",element:<ReactHooksComp />,children:[
//             {path:"UseState",element:<UseStateHookComp/>},
//             {path:"UseEffect",element:<UseEffectHookComp/>},
//         ]},
//     ]},
//     {path:"ProductUser",
//         element:<MaindashboardComp/>
//         ,children:[
//         {path:"nav",element:<NavComp/>},
//         // {path:"Copyright",element:</>},
//         {path:"",element:<MySliderComp/>},
//         {path:"myslider",element:<MySliderComp/>},
//         {path:"ProductDashboard",element:<ProductDashboardComp/>},
//         // {path:"ProductUpdate/:id",element:<ProductUpdateComp/>},
//         // {path:"ProductAdd",element:<ProductAddComp/>},
//         // {path:"SignOut",element:<SignOut/>},
//         {path:"myimages",element:<MyImagesComp/>},
        
        
//         {path:"FormValComp",element:<FormValComp/>},
//         {path:"VirtualDom",element:<VirtualDomComp/>},
//         {path:"Oil",element:<CardComp/>},
//         {path:"UseState",element:<UseStateHookComp/>},
//         {path:"ReactHooks",element:<ReactHooksComp />,children:[
//             {path:"UseState",element:<UseStateHookComp/>},
//             {path:"UseEffect",element:<UseEffectHookComp/>},
//         ]},
//     ]},
    
 
//     {path:"*",element:<PageNotFound/>},

// ])


// export default router;

