import { useContext } from "react";
import ColorTheme from "./MyColorContext";

const FunctionContextB = () => {
    const {bkgB} = useContext(ColorTheme);

    return (
        <div>
            <h1 style={{ color: bkgB }}>
                Contexto B
            </h1>
        </div>
    );
}

export default FunctionContextB;