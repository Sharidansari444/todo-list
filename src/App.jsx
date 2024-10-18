
import Create from "./components/Create";
import Show from "./components/Show";


const App = () => {
    return (
        
        <div className=" bg-dark h-100 "> 
            <h1>ToDo List</h1>
            <Create />
            <hr className=" bg-info p-2" />
            <Show />
        </div>
    );
};

export default App;