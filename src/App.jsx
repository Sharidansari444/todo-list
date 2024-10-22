
import Create from "./components/Create";
import Show from "./components/Show";


const App = () => {
    return (
        
        <div className=" bg-dark overflow-y-scroll " style={{height :" 100vh"}}> 
            <h1>ToDo List</h1>
            <Create />
            <hr className=" bg-info p-2" />
            <Show />
        </div>
    );
};

export default App;