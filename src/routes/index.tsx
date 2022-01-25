import {
    Routes as ReactRoutes,
    Route
} from 'react-router-dom';
import Dashboard from '../Dashboard';
import { View } from '../View';

export function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/view/:id" element={<View />}/>
        </ReactRoutes>
    )
}