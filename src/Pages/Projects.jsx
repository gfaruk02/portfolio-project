

// 
import Matrimony from "../components/Matrimony";
import Foods from "../components/Foods";
import Fashion from "../components/Fashion";

const Projects = () => {

  return (
    <div id="projects" className="mx-5 border-t-4 border-t-gray-400">
        <button className=" uppercase text-white py-2 mt-5 px-5 w-36 rounded-lg bg-sky-900">My Works</button>
    <h1 className="text-4xl lg:text-5xl pb-5 font-bold leadi sm:text-6xl my-3 uppercase text-white">recent projects
    </h1>
      <div className=' grid grid-cols-1 lg:grid-cols-3 gap-3'>
        <Matrimony></Matrimony>
        <Foods></Foods>
        <Fashion></Fashion>
      </div>
    </div>
  );
};

export default Projects;