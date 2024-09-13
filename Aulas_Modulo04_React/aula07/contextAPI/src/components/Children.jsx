import { useContext } from 'react';
import { Context } from './Context-API';
function MyChildren() {
    const context = useContext(Context);
    return <div>Nome: {context.name}</div>
}
export default MyChildren;