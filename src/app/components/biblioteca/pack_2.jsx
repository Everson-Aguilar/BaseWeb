// components/Layout.js
function pack_1({ children, pageTitle, pageDescription }) {
    return (
        <div>
            <header>
                <h1>{pageTitle}</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>{pageDescription}</p>
                <p>Pie de página común</p>
            </footer>
        </div>
    );
}

export default pack_1;
