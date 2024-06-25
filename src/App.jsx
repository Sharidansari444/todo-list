
import Create from "./components/Create";
import Show from "./components/Show";
import css from "./App.module.css";

const App = () => {
    return (
        
        <div className={css.appcontainer}>
            <h1>ToDo List</h1>
            <Create />
            <hr style={{background:"rgb(8, 148, 155)", height:"10px"}} />
            <Show />
        </div>
    );
};

export default App;