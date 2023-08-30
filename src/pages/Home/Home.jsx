import { Link } from "react-router-dom";
import CreateEmployeeForm from "../../components/Form/CreateEmployeeForm";

const Home = () => {
  return (
    <div className="homepage my-2">
      <div className="title">
        <h1 className="text-lg mr-2">HRnet</h1>
        <Link className="text-blue-900 flex" to="/list">
         <h2 className=" p-1 rounded-md hover:bg-slate-100">View Current Employees</h2> 
        </Link>
      </div>
      <CreateEmployeeForm />
    </div>
  );
};

export default Home;
