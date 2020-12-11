import React from 'react';
import List from "./List";

function App(){
    return(
            <main>
                <section className="container">
                    <div className="title">
                        <h2>Our Person List</h2>
                    </div>
                </section>

                <List />
            </main>
    )
}

export default App;
