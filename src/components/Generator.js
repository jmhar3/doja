import {useState} from 'react';

export default function Generator() {
    const first = (i) => {
        switch (i.slice(0, 1).toLowerCase()) {
            case 'a':
                return "Doja"
                break;
            case 'b':
                return "Doja"
                break;
            case 'c':
                return "Doja"
                break;
            case 'd':
                return "Doja"
                break;
            case 'e':
                return "Doja"
                break;
            case 'f':
                return "Doja"
                break;
            case 'g':
                return "Doja"
                break;
            case 'h':
                return "Doja"
                break;
            case 'i':
                return "Doja"
                break;
            case 'j':
                return "Doja"
                break;
            case 'k':
                return "Doja"
                break;
            case 'l':
                return "Doja"
                break;
            case 'm':
                return "Doja"
                break;
            case 'n':
                return "Doja"
                break;
            case 'o':
                return "Doja"
                break;
            case 'p':
                return "Doja"
                break;
            case 'q':
                return "Doja"
                break;
            case 'r':
                return "Doja"
                break;
            case 's':
                return "Doja"
                break;
            case 't':
                return "Doja"
                break;
            case 'u':
                return "Doja"
                break;
            case 'v':
                return "Doja"
                break;
            case 'w':
                return "Doja"
                break;
            case 'x':
                return "Doja"
                break;
            case 'y':
                return "Doja"
                break;
            case 'z':
                return "Doja"
                break;
            default:
                return "Doja"
        }
    }

    const last = (i) => {
        switch (i.slice(0, 1).toLowerCase()) {
            case 'a':
                return "Doja"
                break;
            case 'b':
                return "Doja"
                break;
            case 'c':
                return "Doja"
                break;
            case 'd':
                return "Doja"
                break;
            case 'e':
                return "Doja"
                break;
            case 'f':
                return "Doja"
                break;
            case 'g':
                return "Doja"
                break;
            case 'h':
                return "Doja"
                break;
            case 'i':
                return "Doja"
                break;
            case 'j':
                return "Doja"
                break;
            case 'k':
                return "Doja"
                break;
            case 'l':
                return "Doja"
                break;
            case 'm':
                return "Doja"
                break;
            case 'n':
                return "Doja"
                break;
            case 'o':
                return "Doja"
                break;
            case 'p':
                return "Doja"
                break;
            case 'q':
                return "Doja"
                break;
            case 'r':
                return "Doja"
                break;
            case 's':
                return "Doja"
                break;
            case 't':
                return "Doja"
                break;
            case 'u':
                return "Doja"
                break;
            case 'v':
                return "Doja"
                break;
            case 'w':
                return "Doja"
                break;
            case 'x':
                return "Doja"
                break;
            case 'y':
                return "Doja"
                break;
            case 'z':
                return "Doja"
                break;
            default:
                return "";
        }
    }

    const [state, setState] = useState({first: "", last: ""});

    const [name, setName] = useState(null);

    const handleChange = e => setState({
        ...state,
        [e.target.name]: e.target.value
    });

    const generateName = e => {
        e.preventDefault();
        setName(first(state.first) + last(state.last))
        console.log(name)
    }

    return (
        <section>
            <h2>Weed Name Generator</h2>
            <form onSubmit={generateName}>
                <input
                    name="first"
                    onChange={handleChange}
                    value={state.first}
                    type="text"
                />
                <input
                    name="last"
                    onChange={handleChange}
                    value={state.last}
                    type="text"
                />
                <input type="submit" />
            </form>
            { name ?
            <h3>{name}</h3>
            : null }
        </section>
    )
};