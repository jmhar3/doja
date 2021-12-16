import {useState} from 'react';

export default function Generator() {
    const first = (i) => {
        switch (i.slice(0, 1).toLowerCase()) {
            case 'a':
                return "Silver"
                break;
            case 'b':
                return "Holy"
                break;
            case 'c':
                return "Haze"
                break;
            case 'd':
                return "Ice"
                break;
            case 'e':
                return "Wedding"
                break;
            case 'f':
                return "Blue Dreams"
                break;
            case 'g':
                return "Master's"
                break;
            case 'h':
                return "Grape"
                break;
            case 'i':
                return "Cotton Candy"
                break;
            case 'j':
                return "Doja"
                break;
            case 'k':
                return "Kryptonite"
                break;
            case 'l':
                return "Platinum"
                break;
            case 'm':
                return "Brooklyn"
                break;
            case 'n':
                return "L.A."
                break;
            case 'o':
                return "Blue"
                break;
            case 'p':
                return "Sour"
                break;
            case 'q':
                return "Girl Scout"
                break;
            case 'r':
                return "Tangerine"
                break;
            case 's':
                return "Bubba"
                break;
            case 't':
                return "Blueberry"
                break;
            case 'u':
                return "Afghan"
                break;
            case 'v':
                return "Strawberry"
                break;
            case 'w':
                return "Lucifer"
                break;
            case 'x':
                return "Grandaddy"
                break;
            case 'y':
                return "Grandma's"
                break;
            case 'z':
                return "White"
                break;
            default:
                return "Purple"
        }
    }

    const last = (i) => {
        switch (i.slice(0, 1).toLowerCase()) {
            case 'a':
                return "Cookies"
                break;
            case 'b':
                return "Kush"
                break;
            case 'c':
                return "Skunk"
                break;
            case 'd':
                return "Bubble"
                break;
            case 'e':
                return "Cake"
                break;
            case 'f':
                return "Gold"
                break;
            case 'g':
                return "OG"
                break;
            case 'h':
                return "Glue"
                break;
            case 'i':
                return "Princess"
                break;
            case 'j':
                return "Candy"
                break;
            case 'k':
                return "Afgani"
                break;
            case 'l':
                return "Mistress"
                break;
            case 'm':
                return "Purps"
                break;
            case 'n':
                return "Cheese"
                break;
            case 'o':
                return "Dreams"
                break;
            case 'p':
                return "Poison"
                break;
            case 'q':
                return "OG Kush"
                break;
            case 'r':
                return "Widow"
                break;
            case 's':
                return "Cough"
                break;
            case 't':
                return "Haze"
                break;
            case 'u':
                return "Pink"
                break;
            case 'v':
                return "Gold"
                break;
            case 'w':
                return "Diesel"
                break;
            case 'x':
                return "Sativa"
                break;
            case 'y':
                return "Waui"
                break;
            case 'z':
                return "Rhino"
                break;
            default:
                return "Kush";
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
        setName(`${first(state.first)} ${last(state.last)}`)
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
                    placeholder="First Name"
                />
                <input
                    name="last"
                    onChange={handleChange}
                    value={state.last}
                    type="text"
                    placeholder="Last Name"
                />
                <input type="submit" />
            </form>
            { name ?
            <h3>{name}</h3>
            : null }
        </section>
    )
};