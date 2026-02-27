# React_3

- Creating react using vite

            npm install -g  create-vite

- Next create an application

            '''' 
            npm create vite@latest my-react-app -- --template react 
            ''''

- If you get a message press y to mean yes. use vite experimentally but do not install npm yet

- Sfter this install the dependancy go inside the react app 
            
            '''
             cd my-react-app 
             ''' 

- Run npm iside 
            
            ''' 
            npm install 
            ''' 
- If you find 0 vulnerability continue

            ''' 
            npm run dev 
            ''' 
            
- This takes us to the react and vite intro portal

# Lesson of thte day
**1.  JSX intro**
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

- With JSX you can write expressions inside curly braces { }.

            const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

- To write HTML on multiple lines, put the HTML inside parentheses:

                const myElement = (
                <ul>
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                </ul>
                );

- The HTML code must be wrapped in ONE top level element.

                const myElement = (
                <div>
                    <p>I am a paragraph.</p>
                    <p>I am a paragraph too.</p>
                </div>
                );

-Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
    A fragment looks like an empty HTML tag: <></>.

           const myElement = (
            <>
                <p>I am a paragraph.</p>
                <p>I am a paragraph too.</p>
            </>
            );

- HTML elements must be properly closed.. Close empty elements with />

            const myElement = <input type="text" />;

- The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

- Use attribute className instead.

            const myElement = <h1 className="myclass">Hello World</h1>;

- Comments in JSX are written with {/* */}

            const myElement = <h1>Hello {/* Wonderful */} World </h1>;

-JSX works perfect inside React components
             
                import { createRoot } from 'react-dom/client'

                function Car() {
                return (
                    <>
                    <h2>My Car</h2>
                    <p>It is a Ford Mustang.</p>
                    </>
                );
                }

                createRoot(document.getElementById('root')).render(
                <Car />
                );

- You can also do other operations

        function Car() {
        const brand = "Ford";
        const model = "Mustang";
        return (
            <>
            <h2>My Car</h2>
            <p>It is a {brand} {model}.</p>
            </>
        );
        }

        createRoot(document.getElementById('root')).render(
        <Car />
        )

**2 jsx expressions**
- Can be used with variables. 

            function Car() {
            const hp = 218 * 1.36;
            return (
                <>
                <h1>My car</h1>
                <p>It has {hp} horsepower</p>
                </>
            );
            }


- Can be used with functions

                function kwtohp(kw) {
                return kw * 1.36;
                }

                function Car() {
                return (
                    <>
                    <h1>My car</h1>
                    <p>It has {kwtohp(218)} horsepower</p>
                    </>
                );
                }

- can be used to access object properties

                function Car() {
                const myobj = {
                    name: "Fiat",
                    model: "500",
                    color: "white"
                };
                return (
                    <>
                    <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
                    </>
                );
                }


**3. JSX Attributes**
- class is used in HTML but in javascript it is reserved. Hence we use className to mean class in JSX

- Use JSX Expressions as attributes also

                function Car() {
                const x = "myclass";
                return (
                    <h1 className={x}>Hello World</h1>
                );
                }

- Use camel case while writting events

                function Car() {
                const myfunc = () => {
                    alert('Hello World');
                };
                return (
                    <button onClick={myfunc}>Click me</button>
                );
                }

- To pass no value you must specify the false as an expression

                <button onClick={myfunc} disabled>Click me</button>  --> cannnot press button
                <button onClick={myfunc} disabled={true}>Click me</button>  --> cannnot press button
                <button onClick={myfunc} disabled={false}>Click me</button>  --> can press  butto

-The style attribute in JSX only accepts a JavaScript object with camelCased CSS property names, rather than a CSS string (as in HTML).

                function Car() {
                const mystyles = {
                    color: "red",
                    fontSize: "20px",
                    backgroundColor: "lightyellow",
                };

                return (
                    <>
                    <h1 style={mystyles}>My car</h1>
                    </>
                );
                }

- check out the font-size and background-color


**4. JSX if statements**
- React supports if statements, but not inside JSX.
- You can use the ternary option

                function Fruit() {
                const x = 5;
                return (
                    <h1>{(x) < 10 ? "Banana" : "Apple"}</h1>
                );
                }

- or if option outsidejsx code

            function Fruit() {
            const x = 5;
            let y = "Apple";
            if (x < 10) {
                y = "Banana";
            }

            return (
                <h1>{y}</h1>
            );
            }

**5. React Events**
- React event handlers are written inside curly braces:
onClick={shoot}  instead of onclick="shoot()".

                <button onClick={shoot}>Take the Shot!</button>

Example

            import { createRoot } from 'react-dom/client'

            function Football() {
            const shoot = () => {
                alert("Great Shot!");
            }

            return (
                <button onClick={shoot}>Take the shot!</button>
            );
            }

            createRoot(document.getElementById('root')).render(
            <Football />
            );

- To pass argument use event handler

            import { createRoot } from 'react-dom/client'

            function Football() {
            const shoot = (a) => {
                alert(a);
            }

            return (
                <button onClick={() => shoot("Goal!")}>Take the shot!</button>
            );
            }

            createRoot(document.getElementById('root')).render(
            <Football />
            );

- React event object.

            import { createRoot } from 'react-dom/client'

            function Football() {
            const shoot = (a, b) => {
                alert(b.type);
                /*
                'b' represents the React event that triggered the function,
                in this case the 'click' event
                */
            }

            return (
                <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
            );
            }

            createRoot(document.getElementById('root')).render(
            <Football />
            )


**6 React components**
- Components are like functions that return HTML elements.

1. When creating a React component, the component's name MUST start with an upper case letter.
creating a function component called car

            function Car() {
            return (
                <h2>Hi, I am a Car!</h2>
            );
            }

2. Props    
- Arguments can be passed into a component as props, which stands for properties.

            import { createRoot } from 'react-dom/client'

            function Car(props) {
            return (
                <h2>I am a {props.color} Car!</h2>
            );
            }

            createRoot(document.getElementById('root')).render(
            <Car color="red"/>
            );

3. Components in components
- We can refer to components inside other components:

                function Car() {
                return (
                    <h2>I am a Car!</h2>
                );
                }

                function Garage() {
                return (
                    <>
                    <h1>Who lives in my Garage?</h1>
                    <Car />
                    </>
                );
                }

                createRoot(document.getElementById('root')).render(
                <Garage />
                );

- You can also render the component twice like rendi=ering car twice in the same format.