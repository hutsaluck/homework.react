import {UsersComponent} from "./component/UsersComponent.tsx";
import {StoredName} from "./component/StoredName.tsx";

function App() {

    return (
        <div className="flex gap-8 p-8">
            <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
                <StoredName />
            </div>
            <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
                <UsersComponent />
            </div>
        </div>

    )
}

export default App
