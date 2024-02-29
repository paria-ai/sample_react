import { useFormik } from "formik";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TextField from './../components/common/TextField';
const initialValues={
    email:"",
    password:""
};
const Login = () => {
    const formik=useFormik({
        initialValues,
        onSubmit:(values)=>{},
    });
        return ( 
             
            <div className="container m-7">
            <form className="shadow-md mt-10 border rounded-md p-10 mx-auto max-w-lg bg-slate-600 border-slate-800"
            onSubmit={formik.handleSubmit}>
                <h2 className="text-center font-bold text-3xl mb-10 text-orange-300 ">Login</h2>
                < MdEmail className="text-orange-300 my-3"/>
                <TextField label={"email"} name={"email"} formik={formik}  />
                < FaLock className="text-orange-300 my-3"/>
                <TextField label={"password"} name={"password"} formik={formik}  type="password"/>
                <button type="submit" className="bg-orange-300 m-auto font-bold text-gray-900 p-2 mt-4 hover:bg-slate-800 hover:text-slate-50 hover:rounded-lg w-48  max-w-80" 
            disabled={!formik.isValid}>Login</button>
            </form>
            </div>
         );
}
 
export default Login;