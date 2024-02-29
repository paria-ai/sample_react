const TextField = ({label,name ,formik,type="text"}) => {
    return (
        <div>
            <div className="flex justify-between items-center ">
                
                <input 
                type={type}
                placeholder={label}
                name={name}
                 className="border rounded p-3 w-96 inline-block bg-gray-900 border-slate-800 text-orange-300"
                 
                {...formik.getFieldProps(name)}
                />
            </div>
            {formik.errors[name] && formik.touched[name] && (
            <p className="text-rose-500 ">{formik.errors[name]}</p>)}
        </div>
      );
}
 
export default TextField;